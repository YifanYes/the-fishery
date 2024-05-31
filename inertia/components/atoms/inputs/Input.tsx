import { InputError } from '../errors'
import { Flex } from '../layout'
import { Label } from '../texts'
import { TextInput } from './variants'

export type InputPropsType = {
  className?: string
  type?: InputType
  value?: any
  placeholder?: string
  isDisabled?: boolean
  isDirty?: boolean
  isTouched?: boolean
  isRequired?: boolean
  ['data-field']?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onBlur?: () => void
  onChange?: (params?: any) => void
}

export type LabelPropsType = {
  label?: string
}

export type ErrorPropsType = {
  isInvalid?: boolean
  error?: string
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Search = 'search',
}

const InputVariant = (props: InputPropsType) => {
  switch (props.type) {
    case InputType.Password:
    case InputType.Number:
    case InputType.Search:
    case InputType.Text:
    default:
      return <TextInput {...props} />
  }
}

const Input = ({
  className,
  type,
  label,
  value,
  placeholder,
  error,
  isDisabled,
  isInvalid,
  isDirty,
  isTouched,
  isRequired,
  ['data-field']: dataField,
  startIcon,
  endIcon,
  onBlur,
  onChange,
}: InputPropsType & LabelPropsType & ErrorPropsType) => {
  return (
    <Flex direction="column">
      {label && <Label htmlFor={dataField}>{label}</Label>}
      <InputVariant
        className={className}
        type={type}
        data-field={dataField}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isDirty={isDirty}
        isTouched={isTouched}
        isRequired={isRequired}
        startIcon={startIcon}
        endIcon={endIcon}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {isInvalid && error && <InputError error={error} />}
    </Flex>
  )
}

export default Input
