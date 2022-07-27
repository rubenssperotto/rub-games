import Wishlist, { WishlistTemplateProps } from 'pages/templates/Wishlist'
import gamesMock from 'components/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommendedQuery } from 'graphql/generated/graphql'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(data.games),
      recommendedHighlight: highlightMapper(data.recommended?.data?.attributes?.section.highlight)
    }
  }
}
