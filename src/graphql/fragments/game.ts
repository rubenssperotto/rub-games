import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on GameEntityResponseCollection {
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
`
