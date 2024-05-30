import styled from 'styled-components'
import { ColorHelper, ThemeHelper } from '~/utils'
import { ButtonLoader } from '../loaders'

export type ButtonType =
  | 'primary'
  | 'success'
  | 'danger'
  | 'danger-light'
  | 'link'
  | 'transparent'
  | 'transparent-border'
  | 'a-link'

export type ButtonSize = 'sm' | 'lm' | 'lg'

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

const StyledButton = styled.button<{
  size: string
  color: string
  disabled: boolean
}>`
  font-family: inherit;
  display: inline-block;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  ${ThemeHelper.transition('opacity 0.25s ease-in-out')}
  opacity: 1;
  font-size: 1.4rem;
  letter-spacing: 0.4px;
  padding: 0.5rem 1.5rem;
  background-color: ${ColorHelper.Colors.teal};
  color: ${ColorHelper.Colors.blueGray100};
  line-height: 0;

  &:hover {
    ${ThemeHelper.transition('opacity 0.25s ease-in-out')}
    opacity: 0.9;
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    `pointer-events: none;
    cursor: default;
    opacity: 0.4;`}

  ${({ size }) => {
    if (size === 'lg') {
      return `
        ${ThemeHelper.fontSize('16px')}
        min-width: 192px;
      `
    }

    if (size === 'sm') {
      return `
        ${ThemeHelper.fontSize('1rem')}
        min-height: 2.6rem;
      `
    }

    if (size === 'lm') {
      return `
        flex-grow: 1;
        ${ThemeHelper.fontSize('16px')}
      `
    }
  }}

  ${({ color }) => {
    if (color === 'transparent') {
      return `
        background-color: transparent;
        color: inherit;
        border-color: transparent;
      `
    }

    if (color === 'transparent-border') {
      return `
        box-shadow: inset 0 0 0 1px ${ColorHelper.Colors.black};
        background-color: transparent;
        color: inherit;
      `
    }

    if (color === 'primary') {
      return `
        box-shadow: inset 0 0 0 1px ${ColorHelper.Colors.black};
        background-color: ${ColorHelper.Colors.teal};
        color: ${ColorHelper.Colors.white};
      `
    }

    if (color === 'danger') {
      return `
        background-color: ${ColorHelper.Colors.red};
        color: ${ColorHelper.Colors.white};
      `
    }

    if (color === 'danger-light') {
      return `
        background-color: ${ColorHelper.Colors.white};
        color: ${ColorHelper.Colors.red};
      `
    }

    if (color === 'success') {
      return `
        background-color: ${ColorHelper.Colors.successBackground};
        color: ${ColorHelper.Colors.successColor};
        svg {
          .icon-path {
            fill: ${ColorHelper.Colors.successColor};
          }
        }
      `
    }

    if (color === 'a-link') {
      return `
        background-color: transparent;
        color: ${ColorHelper.Colors.blue};
        text-decoration: underline;
        padding: 0;
        margin: 0;
      `
    }

    if (color === 'link') {
      return `
        background-color: transparent;
        color: ${ColorHelper.Colors.blue};
        text-decoration: underline;
      `
    }
  }}
`

const Button = ({
  className = '',
  color = 'primary',
  children,
  size = 'sm',
  loading = false,
  startIcon,
  endIcon,
  disabled = false,
  onClick,
}: {
  className?: string
  color?: ButtonType | string
  size?: ButtonSize
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}) => {
  return (
    <StyledButton
      className={className}
      type="button"
      color={color}
      size={size}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
    >
      <ButtonInner>
        {!loading && startIcon}
        <span>{children}</span>
        {loading && <ButtonLoader size={'0.65rem'} color={ColorHelper.Colors.primary} />}
        {!loading && endIcon}
      </ButtonInner>
    </StyledButton>
  )
}

export default Button
