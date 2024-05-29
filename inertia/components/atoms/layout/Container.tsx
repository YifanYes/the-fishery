import styled from 'styled-components'

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Container = ({ className, children }: { className?: string; children?: any }) => {
  return <BaseContainer className={className}>{children}</BaseContainer>
}

export default Container
