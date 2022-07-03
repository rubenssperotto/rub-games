import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../../public/utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('Should render a white Heading by default', () => {
    renderWithTheme(<Heading>Rub Games</Heading>)
    expect(screen.getByRole('heading', { name: /Rub games/i })).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('Should render a black Heading when color nightblack is passed', () => {
    renderWithTheme(<Heading color="nightblack">Rub Games</Heading>)
    expect(screen.getByRole('heading', { name: /Rub games/i })).toHaveStyle({
      color: '#222B49'
    })
  })

  it('Should render a Heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Rub Games</Heading>)
    expect(screen.getByRole('heading', { name: /Rub games/i })).toHaveStyle({
      'border-left': '0.7rem solid #00a6fb'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Rub Games</Heading>)
    expect(screen.getByRole('heading', { name: /Rub games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #00a6fb',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Rub Games</Heading>)
    expect(screen.getByRole('heading', { name: /Rub games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Rub games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #00a6fb' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #00a6fb', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #d90429' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #d90429', {
      modifier: '::after'
    })
  })
})
