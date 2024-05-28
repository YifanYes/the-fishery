import styled from 'styled-components'

const BaseBox = styled.div``

const Box = ({ className, children }: { className?: string; children?: any }) => {
  return <BaseBox className={className}>{children}</BaseBox>
}

export default Box
