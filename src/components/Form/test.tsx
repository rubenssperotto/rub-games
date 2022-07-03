import { FormLink, FormWrapper } from '.'
import { renderWithTheme } from '../../../public/utils/tests/helpers'
describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
    `)
  })
})
