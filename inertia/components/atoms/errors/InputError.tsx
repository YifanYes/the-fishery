import styled from 'styled-components'
import { FontWeightObject } from '~/types/style.types'
import { ColorHelper, ThemeHelper } from '~/utils'

const Error = styled.p<{ fontWeights?: FontWeightObject }>`
  color: ${ColorHelper.Colors.red};
  ${ThemeHelper.fontSize('1.4rem')}
  ${ThemeHelper.fontFamily('400')}
`

const InputError = ({ error }: { error: string }) => {
  return <Error>{error}</Error>
}

export default InputError
