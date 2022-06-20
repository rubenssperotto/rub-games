import Heading from 'components/Heading'
import Link from 'next/link'
import Logo from 'components/Logo'
import * as S from './styles'
type AuthProps = {
  title: string
  children: React.ReactNode
}
const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading size="huge">
            Todos os seus jogos favoritos em um só lugar.
          </Heading>
          <S.Subtitle>
            <strong>RUB</strong> a melhor e mais completa plataforma de games.
          </S.Subtitle>
        </div>

        <S.Footer>Rub Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="nightblack" size="large" />
          </a>
        </Link>
        <Heading color="nightblack" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)
export default Auth
