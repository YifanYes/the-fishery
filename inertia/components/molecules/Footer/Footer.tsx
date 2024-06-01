import { logoInstagram, logoLinkedin, megaphoneOutline } from 'ionicons/icons'
import styled from 'styled-components'
import { Flex, Heading, Image, Link } from '~/components/atoms'
import { ColorHelper } from '~/utils'

const FooterContainer = styled(Flex)`
  width: -webkit-fill-available;
  padding: 2rem;
  background-color: ${ColorHelper.Colors.onyx};
  margin-top: 10rem;
`

const socialMedia = [
  {
    src: logoInstagram,
    name: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    src: megaphoneOutline,
    name: 'Meetup',
    href: 'https://meetup.com',
  },
  {
    src: logoLinkedin,
    name: 'Linkedin',
    href: 'https://linkedin.com',
  },
]

const Footer = () => {
  return (
    <FooterContainer direction="row" justify="space-evenly" align="center" wrap="wrap">
      <Flex direction="column" gap="1.5rem">
        <Heading level={3} color="#fff">
          Redes sociales
        </Heading>
        <Flex direction="row" gap="2rem">
          {socialMedia.map((item, index) => (
            <Link key={index} href={item.href} target="_blank" color="#fff">
              <Image src={item.src} width="20px" height="20px" color="#fff" />
              <span>{item.name}</span>
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap="1.5rem">
        <Heading level={3} color="#fff">
          Documentos
        </Heading>
        <Flex direction="row" gap="2rem">
          <Link href="/terms" color="#fff">
            Términos y condiciones
          </Link>
          <Link href="/privacy" color="#fff">
            Política de privacidad
          </Link>
        </Flex>
      </Flex>
    </FooterContainer>
  )
}

export default Footer
