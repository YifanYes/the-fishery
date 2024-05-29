import styled from 'styled-components'

const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const Page = ({ className, children }: { className?: string; children?: any }) => {
  return <BaseContainer className={className}>{children}</BaseContainer>
}

export default Page
