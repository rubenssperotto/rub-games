import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from '../../../public/utils/tests/helpers'

describe('<Logo />', () => {

  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  // renderizar o componente `render`
  //selecionar o elemento a ser testado `screen` (queries) - getByLabel...
  //expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
  it('Should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Rub Games/i).parentElement).toHaveStyle({ color: '#fafafa' })
})

it('Should render a nightblack label by default', () => {
  renderWithTheme(<Logo color="nightblack" />)
  expect(screen.getByLabelText(/Rub Games/i).parentElement).toHaveStyle({ color: '#222B49' })
})

it('Should render a normal logo when size is default', () => {
   renderWithTheme(<Logo/>)
  expect(screen.getByLabelText(/Rub Games/i).parentElement).toHaveStyle({ width: '16rem' })
})

it('Should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
  expect(screen.getByLabelText(/Rub Games/i).parentElement).toHaveStyle({ width: '22rem' })
})

it('should render a bigger logo without text if hideOnMobile', () => {
  renderWithTheme(<Logo hideOnMobile />)
  expect(screen.getByLabelText(/Rub Games/i).parentElement).toHaveStyleRule(
    'width',
    '7.8rem',
    {
      media: '(max-width: 768px)'
    }
  )
})
})
