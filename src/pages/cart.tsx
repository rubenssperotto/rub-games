import Cart, { CartProps } from 'pages/templates/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommendedQuery } from 'graphql/generated/graphql'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(data.games),
      recommendedHighlight: highlightMapper(data.recommended?.data?.attributes?.section.highlight)
    }
  }
}
