import styled from 'styled-components'

const BaseSection = styled.section`
  width: 100%;
`

const Section = ({ className, children }: { className?: string; children?: any }) => {
  return <BaseSection className={className}>{children}</BaseSection>
}

export default Section
