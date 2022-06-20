import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="nightblack" />
    <S.Content>
      <S.Column>
        <Heading
          color="nightblack"
          size="small"
          lineBottom
          lineColor="secondary"
        >
          Contact
        </Heading>

        <a href="mailto:rub@rubgames.com">rub@rubgames.com</a>
        <a href='tel:+55 61 123456789'>+55 61 123456789</a>
      </S.Column>

      <S.Column>
        <Heading
          color="nightblack"
          lineColor="secondary"
          lineBottom
          size="small"
        >
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="#"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading
          color="nightblack"
          lineColor="secondary"
          lineBottom
          size="small"
        >
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading
          color="nightblack"
          lineColor="secondary"
          lineBottom
          size="small"
        >
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Rub Games 2020 © Todos os direitos reservados.</S.Copyright>
  </S.Wrapper>
)

export default Footer
