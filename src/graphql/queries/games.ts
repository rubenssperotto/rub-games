import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import {
  QueryGamesQuery,
  QueryGamesQueryVariables
} from 'graphql/generated/graphql'
//import { GameFragment } from 'graphql/fragments/game'

export const QUERY_GAMES = gql`
query QueryGames($limit: Int, $start: Int, $where: GameFiltersInput, $sort: [String]) {
  games(pagination: {limit: $limit, start: $start}, filters: $where, sort: $sort) {
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
          developers {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
          price
        }
      }
    }
  }
`
export const QUERY_GAMES_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
export function useQueryGames(
  options?: QueryHookOptions<QueryGamesQuery, QueryGamesQueryVariables>
) {
  return useQuery<QueryGamesQuery, QueryGamesQueryVariables>(
    QUERY_GAMES,
    options
  )
}
