import { Control, Controller, FieldValues } from 'react-hook-form'
import BaseInput, { InputType } from './Input'

const FormInput = ({
  className,
  type,
  label,
  ['data-field']: dataField,
  placeholder,
  required,
  control,
  startIcon,
  endIcon,
  setInputState,
}: {
  className?: string
  type?: InputType
  label?: string
  ['data-field']: string
  placeholder?: string
  required?: boolean
  control?: Control<FieldValues>
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  setInputState?: (props: any) => void
}) => {
  return (
    <Controller
      control={control}
      rules={{ required }}
      render={({
        field: { onChange, onBlur, value, disabled },
        fieldState: { invalid, isTouched, isDirty, error },
      }) => (
        <BaseInput
          className={className}
          type={type}
          placeholder={placeholder}
          onBlur={() => {
            onBlur()
            setInputState?.({})
          }}
          onChange={(values) => {
            onChange(values)
            setInputState?.({
              values,
              invalid,
              error: error?.message,
              dirty: isDirty,
            })
          }}
          value={value}
          label={label}
          isDisabled={disabled}
          data-field={dataField}
          isInvalid={invalid}
          error={error?.message}
          isDirty={isDirty}
          isTouched={isTouched}
          isRequired={required}
          startIcon={startIcon}
          endIcon={endIcon}
        />
      )}
      name={dataField}
    />
  )
}

export default FormInput
