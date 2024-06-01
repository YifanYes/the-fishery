import { Head } from '@inertiajs/react'
import styled from 'styled-components'
import { Flex } from '~/components/atoms'
import { Features, Footer, Hero } from '~/components/molecules'
import { FeatureCardProps } from '~/components/molecules/Features/Features'
import { Navbar } from '~/components/organisms'

const Wrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  font-family: Inter;
`

const features: FeatureCardProps[] = [
  {
    img: 'https://djnw5a0wszky0.cloudfront.net/inkfactorywp/wp-content/uploads/2019/04/DrawingonBoard_BlogImage4.jpg.webp',
    title: 'Desarrolla tu idea de negocio',
    description:
      'Utiliza nuestra metodología paso a paso para desarrollar tu idea de negocio y llevarla al mercado en tiempo récord.',
  },
  {
    img: 'https://tradulingua.com/wp-content/uploads/2022/08/networking-que-es.jpg',
    title: 'Conecta con perfiles afines',
    description: 'Conecta y encuentra co-fundadores, inversores y talento en nuestra red.',
  },
  {
    img: 'https://www.rae.es/sites/default/files/styles/paragraph_galeria_grande/public/2020-06/galeria.biblioteca-3.jpg?h=c9f93661&itok=LXhOmrbv',
    title: 'Accede a nuestra librería',
    description:
      'Accede a nuestra librería de recursos con vídeos, guías y resúmenes de libros para.',
  },
]

export default function Home() {
  return (
    <>
      <Head title="The Fishery" />
      <Wrapper direction="column" align="center">
        <Navbar />
        <Hero />
        <Features features={features} />
        <Footer />
      </Wrapper>
    </>
  )
}
