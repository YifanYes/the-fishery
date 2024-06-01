import styled from 'styled-components'
import { Flex, Heading, Image, Text } from '~/components/atoms'
import { FontSizes } from '~/styles/default'
import { ColorHelper } from '~/utils'

const ContentWrapper = styled(Flex)`
  width: 100%;
  background-color: ${ColorHelper.Colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const ImageContent = styled.div`
  width: 24rem;
`

const TextContent = styled(Flex)`
  padding: 0 2rem;
`

const Description = styled(Text)`
  text-align: left;
`

const Feature = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string
  title: string
  description: string
}) => {
  return (
    <ContentWrapper direction="row" align="center" justify="flex-start" wrap="nowrap" gap="2rem">
      <ImageContent>
        <Image src={imageSrc} alt="Feature Image" width="100%" height="auto" />
      </ImageContent>
      <TextContent direction="column" gap="1rem" align="flex-start" justify="flex-start">
        <Heading fontSize="2rem" color="#333">
          {title}
        </Heading>
        <Description fontSize={FontSizes['1']} color="#666">
          {description}
        </Description>
      </TextContent>
    </ContentWrapper>
  )
}

export default Feature
