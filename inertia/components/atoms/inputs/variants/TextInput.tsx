import styled from 'styled-components'
import { ColorHelper, ThemeHelper } from '~/utils'
import { InputPropsType } from '../Input'

const Input = styled.input<{
  isDisabled?: boolean
}>`
  ${({ isDisabled }) => isDisabled && `opacity: 0.5; pointer-events: none;`}
  ${ThemeHelper.fontSize('1rem')}
  ${ThemeHelper.fontFamily('400')}
  padding: 0.5rem 1rem;
  background-color: ${ColorHelper.Colors.blueGray50};
  border: 1px solid ${ColorHelper.Colors.blueGray300};
  border-radius: 0.25rem;
  outline: none;
`

const TextInput = ({
  className,
  type,
  value,
  placeholder,
  isDisabled,
  isRequired,
  ['data-field']: dataField,
  startIcon,
  endIcon,
  onBlur,
  onChange,
}: InputPropsType) => {
  return (
    <>
      {startIcon && <></>}
      <Input
        className={className}
        type={type}
        data-field={dataField}
        placeholder={placeholder}
        isDisabled={isDisabled}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {isRequired && <></>}
      {endIcon && <></>}
    </>
  )
}

export default TextInput
