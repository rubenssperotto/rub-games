import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import Game, { GameTemplateProps } from 'pages/templates/Game'
import { QueryGamesQuery, QueryGamesQueryVariables, QueryGameBySlugQuery, QueryGameBySlugQueryVariables, QueryRecommendedQuery, QueryUpcomingQuery, QueryUpcomingQueryVariables } from 'graphql/generated/graphql'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG, } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if(router.isFallback) return null

  return <Game {...props} />
}

// gerar em build time (/game/bla, /game/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query< QueryGamesQuery, QueryGamesQueryVariables >({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })
//continuar a partit daqui verificar se o paths está pegando o slug para formar o link
  const paths  = data.games!.data.map(({attributes}) => ({
    params: { slug: attributes!.slug }
  }))
  
  return { paths, fallback: true}
}

  

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //Get game data
  const { data } = await apolloClient.query<
    QueryGameBySlugQuery,
    QueryGameBySlugQueryVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0]

  //Get recommended games
  const { data: recommendedSection } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  //get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query<QueryUpcomingQuery, QueryUpcomingQueryVariables>({ query: QUERY_UPCOMING, variables: { date: TODAY } })

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.attributes?.cover.data?.attributes?.src}`,
      gameInfo: {
        title: game.attributes?.name,
        price: game.attributes?.price,
        description: game.attributes?.short_description
      },
      gallery: game.attributes?.gallery?.data.map((image) => ({
        src: `http://localhost:1337${image.attributes?.src}`,
        label: image.attributes?.label
      })),
      description: game.attributes?.description,
      details: {
        developer: game.attributes?.developers?.data[0].attributes?.name,
        releaseDate: game.attributes?.release_date,
        platforms: game.attributes?.platforms?.data.map((platform) => platform.attributes?.name),
        publisher: game.attributes?.publisher?.data?.attributes?.name,
        rating: game.attributes?.rating,
        genres: game.attributes?.categories?.data.map((category) => category.attributes?.name)
      },
      upcomingTitle: upcoming.showcase?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(upcoming.showcase?.data?.attributes?.upcomingGames?.highlight),
      recommendedTitle: recommendedSection.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(recommendedSection.games),
    }
  }
}
