import styled from 'styled-components'
import { LoaderSize } from '.'

const Inner = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
`

const Circle = styled.div<{ color: string }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  color: ${({ color }) => color};
  font-size: calc(60px * 0.24);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Line = styled.div<{ color: string }>`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation-duration: 1s;
  border-left-width: calc(60px / 25);
  border-top-width: calc(60px / 25);
  border-left-color: ${({ color }) => color};
  border-left-style: solid;
  border-top-style: solid;
  border-top-color: transparent;
`

const Wrapper = styled.div<{ size: LoaderSize | string }>`
  box-sizing: border-box;
  ${({ size }) => `
    height: ${typeof size === 'string' ? size : size.height};
    width: ${typeof size === 'string' ? size : size.width}`};
  overflow: hidden;

  ${Line}:nth-child(1) {
    animation: atom-spinner-animation-1 1s linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }

  ${Line}:nth-child(2) {
    animation: atom-spinner-animation-2 1s linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }

  ${Line}:nth-child(3) {
    animation: atom-spinner-animation-3 1s linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }

  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
  }
`

const Loader = ({
  size = '5rem',
  color = '#ff1d5e',
}: {
  size?: LoaderSize | string
  color?: string
}) => {
  return (
    <Wrapper size={size}>
      <Inner>
        <Line color={color} />
        <Line color={color} />
        <Line color={color} />
        <Circle color={color}>&#9679;</Circle>
      </Inner>
    </Wrapper>
  )
}

export default Loader
