import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ImageContent = styled.div`
  flex: 1;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
`;

const TextContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Feature = ({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) => {
  return (
    <FeaturesContainer>
      <ContentWrapper>
        <ImageContent>
          <FeatureImage src={imageSrc} alt="Feature Image" />
        </ImageContent>
        <TextContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContent>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default Feature;
