import styled, { css } from 'styled-components'
import { LogoProps } from '.'

import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    width: 16rem;
    heigth: 4.7rem;
  `,
  large: () => css`
    width: 22rem;
    heigth: 6.2 rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 7.8rem;
      height: 6.5rem;
      svg {
        height: 6.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
