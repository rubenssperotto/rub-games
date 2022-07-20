import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/queries/fragments/banner'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
    ...BannerFragment
  }
  }
  ${BannerFragment}
`
