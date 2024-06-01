import styled from 'styled-components'
import { Grid } from '~/components/atoms'
import { ThemeHelper } from '~/utils'
import FeatureCard from './FeatureCard'

export type FeatureCardProps = {
  img: string
  title: string
  description: string
}

const Wrapper = styled(Grid)`
  width: 100%;
  ${ThemeHelper.media('xs', 'width: 100%;')}
  ${ThemeHelper.media('sm', 'width: 80%;')}
  ${ThemeHelper.media('md', 'width: 60%;')}
`

const Features = ({ features }: { features: FeatureCardProps[] }) => {
  return (
    <Wrapper columns="1" justify="center" align="center" gap="4rem">
      {features.map((item, index) => (
        <FeatureCard
          key={index}
          imageSrc={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </Wrapper>
  )
}

export default Features
