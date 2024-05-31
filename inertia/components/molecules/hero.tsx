import styled from 'styled-components';
import { ColorHelper } from '~/utils';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #666;
`;

const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: ${ColorHelper.Colors.blue};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:${ColorHelper.Colors.celadon};
  }
`;

const ImageContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <TextContent>
          <Title>Bienvenido a The Fishery</Title>
          <Subtitle>No limpiamos pescado</Subtitle>
          <HeroButton>Quiero entrar</HeroButton>
        </TextContent>
        <ImageContent>
          <HeroImage src="https://lh6.googleusercontent.com/proxy/ax5PLOgdlM4q6pukrrc_bB--ZgxjX_PVLfYxmEdK9JJxAGSeyLloVh70lsE4r6XJE2MxmImoU3PDpMScNfKdeIKbcACTpX1KGq-TfdfRkV9DZEi0KoLx-2Sd21hO4FXZ8LUBGDtWZIXv" alt="Hero Image" />
        </ImageContent>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
