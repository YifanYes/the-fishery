import styled from 'styled-components'
import { ColorHelper } from '~/utils'

const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: ${ColorHelper.Colors.blue};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${ColorHelper.Colors.celadon};
  }
`

const ImageContent = styled.div`
  flex: 1;
  padding: 20px;
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const Hero = () => {
  return (
    <div className="h-[calc(100vh-86px)] flex items-center justify-center flex-row">
      <div className="flex w-[80%] max-w-[1200px] my-0 mx-auto">
        <div className="flex-1 p-[20px]">
          <h1 className="text-[#333] text-[3rem] mb-[10px]">Bienvenido a The Fishery</h1>
          <h2 className="text-[#666] text-[1.5rem] mb-[20px]">No limpiamos pescado</h2>
          <HeroButton>Quiero entrar</HeroButton>
        </div>
        <ImageContent>
          <HeroImage
            src="https://lh6.googleusercontent.com/proxy/ax5PLOgdlM4q6pukrrc_bB--ZgxjX_PVLfYxmEdK9JJxAGSeyLloVh70lsE4r6XJE2MxmImoU3PDpMScNfKdeIKbcACTpX1KGq-TfdfRkV9DZEi0KoLx-2Sd21hO4FXZ8LUBGDtWZIXv"
            alt="Hero Image"
          />
        </ImageContent>
      </div>
    </div>
  )
}

export default Hero
