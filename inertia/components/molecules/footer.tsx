import { logoInstagram, logoLinkedin, megaphoneOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { ColorHelper } from '~/utils';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 40px;
  background-color:  ${ColorHelper.Colors.onyx};
  color: #fff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  margin-bottom: 4px;
`

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


const SocialLogo = styled.img`
  height: 20px;
  width: 20px;
  color: #fff;
`

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: ${ColorHelper.Colors.celadon};
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    color: ${ColorHelper.Colors.celadon};
  }
`;

const socialMedia = [
  {
    src: logoInstagram,
    name: "Instagram",
    href: "https://instagram.com"
  },
  {
    src: megaphoneOutline,
    name: "Meetup",
    href: "https://meetup.com"
  },
  {
    src: logoLinkedin,
    name: "Linkedin",
    href: "https://linkedin.com"
  }
]

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Redes sociales</ColumnTitle>
        <SocialMediaContainer>
          {socialMedia.map((item, index) => (
            <div key={index}>
              <SocialLogo src={item.src} />
              <SocialLink href={item.href}>{item.name}</SocialLink>
            </div >
          ))
          }
        </SocialMediaContainer>
      </Column>
      <Column>
        <ColumnTitle>Documentos</ColumnTitle>
        <FooterLink href="/terms">Términos y condiciones</FooterLink>
        <FooterLink href="/privacy">Política de privacidad</FooterLink>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
