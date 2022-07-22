import Home, { HomeTemplateProps } from './templates/Home'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHomeQuery } from 'graphql/generated/graphql'
import { QUERY_HOME } from 'graphql/queries/home'

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

  const { data: { banners, newGames, upcomingGames, freeGames, sections } } = await apolloClient.query<QueryHomeQuery>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidade: 60,
      banners: banners?.data.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: banner.attributes?.button?.link,
        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes?.ribbon?.text,
          ribbonColor: banner.attributes?.ribbon?.color,
          ribbonSize: banner.attributes?.ribbon?.size
        })
      })),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: newGames?.data.map((game) => ({
        tiitle: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularHighlight: highlightMock,
      mostPopularGames: sections!.data!.attributes!.popularGames!.games!.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcomingGames: upcomingGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      upcomingHighlight: highlightMock,
      freeGames: freeGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      freeHighlight: highlightMock
    }
  }
}
