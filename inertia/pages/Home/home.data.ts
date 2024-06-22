import { RiInstagramLine, RiLinkedinFill, RiMegaphoneLine } from '@remixicon/react'

export const hero: HeroProps = {
  title: 'Bienvenido a The Fishery',
  description: 'No limpiamos pescado',
  button: {
    text: 'Quiero entrar',
    onClick: () => {},
  },
  image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

export const navbar: NavbarProps = {
  logo: true,
  buttons: [],
  links: [
    {
      href: 'home',
      label: 'Inicio',
    },
    {
      href: 'features',
      label: 'Qué ofrecemos',
    },
    {
      href: 'about_us',
      label: 'Sobre nosotros',
    },
  ],
}

export const features: FeaturesProps = {
  title: 'Qué ofrecemos',
  description: 'Descubre lo que podemos hacer por ti',
  cards: [
    {
      title: 'Desarrolla tu idea de negocio',
      description:
        'Utiliza nuestra metodología paso a paso para desarrollar tu idea de negocio y llevarla al mercado en tiempo récord.',
      imgUrl:
        'https://djnw5a0wszky0.cloudfront.net/inkfactorywp/wp-content/uploads/2019/04/DrawingonBoard_BlogImage4.jpg.webp',
    },
    {
      title: 'Conecta con perfiles afines',
      description: 'Conecta y encuentra co-fundadores, inversores y talento en nuestra red.',
      imgUrl: 'https://tradulingua.com/wp-content/uploads/2022/08/networking-que-es.jpg',
    },
    {
      title: 'Accede a nuestra librería',
      description: 'Accede a nuestra librería de recursos con vídeos, guías y resúmenes de libros.',
      imgUrl:
        'https://www.rae.es/sites/default/files/styles/paragraph_galeria_grande/public/2020-06/galeria.biblioteca-3.jpg?h=c9f93661&itok=LXhOmrbv',
    },
  ],
}

export const footer: FooterProps = {
  socials: [
    {
      icon: RiInstagramLine,
      name: 'Instagram',
      href: 'https://instagram.com',
    },
    {
      icon: RiMegaphoneLine,
      name: 'Meetup',
      href: 'https://meetup.com',
    },
    {
      icon: RiLinkedinFill,
      name: 'Linkedin',
      href: 'https://linkedin.com',
    },
  ],
  links: [
    {
      label: 'Términos y condiciones',
      href: '#',
    },
    {
      label: 'Política de privacidad',
      href: '#',
    },
  ],
  copyright: '© 2023 The Fishery™. All Rights Reserved.',
}

export const aboutUs: AboutUsProps = {
  title: 'Sobre nosotros',
  description: `Queremos ayudarte a impulsar tu negocio.<br />De la idea a la ejecución.<br />Del ahora al éxito.`,
  stats: [
    { name: 'Usuarios registrados', value: '1200+' },
    { name: 'Recursos de la librería', value: '300+' },
    { name: 'Proyectos activos', value: '40+' },
    { name: 'Potencial de tu proyecto', value: 'Ilimitado' },
  ],
}
