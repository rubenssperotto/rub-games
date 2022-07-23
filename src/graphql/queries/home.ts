import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      filters: { release_date: { lte: "2022-07-22" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      filters: { release_date: { gt: "2022-07-22" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }

    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      ...GameFragment
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            title
            highlight {
              ...HighlightFragment
            }
            games(pagination: { limit: 8 }) {
              data {
                attributes {
                  name
                  slug
                  cover {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
                attributes {
                  developers {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                }
                attributes {
                  price
                }
              }
            }
          }

          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
