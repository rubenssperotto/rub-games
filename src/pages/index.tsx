import Home, { HomeTemplateProps } from './templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QueryHomeQuery, QueryHomeQueryVariables } from 'graphql/generated/graphql'
import { QUERY_HOME } from 'graphql/queries/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES
// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10) //2022-07-24

  const { data: { banners, newGames, upcomingGames, freeGames, sections } } = await apolloClient.query<QueryHomeQuery, QueryHomeQueryVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  })

  return {
    props: {
      revalidade: 60,
      banners: bannerMapper(banners),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.data?.attributes?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections?.data?.attributes?.popularGames?.games),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.data?.attributes?.upcomingGames?.highlight),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.data?.attributes?.freeGames?.highlight)
    }
  }
}
