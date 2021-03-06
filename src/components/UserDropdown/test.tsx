import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../../public/utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Rubens" />)

    expect(screen.getByText(/rubens/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="Rubens" />)

    // open menu
    userEvent.click(screen.getByText(/rubens/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})