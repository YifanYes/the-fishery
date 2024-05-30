import styled from 'styled-components'

export type LoaderSize = {
  width?: string
  height?: string
}

const Circle = styled.div`
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
`

const Wrapper = styled.div<{ size: LoaderSize | string; color: string }>`
  box-sizing: border-box;
  ${({ size }) => `
    height: ${typeof size === 'string' ? size : size.height};
    width: ${typeof size === 'string' ? size : size.width}`};
  border-radius: 100%;
  position: relative;

  ${Circle}:nth-child(1) {
    border-top-color: ${({ color }) => color};
    animation: half-circle-spinner-animation 1s infinite;
  }

  ${Circle}:nth-child(2) {
    border-bottom-color: ${({ color }) => color};
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const ButtonLoader = ({
  size = '5rem',
  color = '#ff1d5e',
}: {
  size?: LoaderSize | string
  color?: string
}) => {
  return (
    <Wrapper size={size} color={color}>
      <Circle />
      <Circle />
    </Wrapper>
  )
}

export default ButtonLoader
