import GamesTemplate, { GamesTemplateProps } from 'pages/templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGamesQuery, QueryGamesQueryVariables } from 'graphql/generated/graphql'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query< QueryGamesQuery, QueryGamesQueryVariables >({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      initialApoloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
