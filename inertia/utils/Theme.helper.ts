import { css } from 'styled-components'
import { DeviceElement } from '~/types/style.types'

const breakpoints: { [key: string]: number } = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const fontFamily = (weight: string) => `
  font-family: 'Inter', sans-serif;
  font-weight: ${weight};
`

const size = (width: string, height?: string) => `
  width: ${width};
  height: ${height || width};
`

const boxShadow = css`
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`

const fontSize = (size: string, lineHeight: string = '0.8rem') => `
  font-size: ${size};
  line-height: calc(${size} + ${lineHeight});
`

const transform = (params: string) => `
  -moz-transform: ${params};
  -o-transform: ${params};
  -webkit-transform: ${params};
  transform: ${params};
`

const transition = (params: string) => `
  -moz-transition: ${params};
  -o-transition: ${params};
  -webkit-transition: ${params};
  transition: ${params};
`

const disableSelect = () => `
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const hex2CssVar = (hex: string) => {
  const aRgbHex: any = hex.replace('#', '').match(/.{1,2}/g)
  return `${parseInt(aRgbHex[0], 16)},${parseInt(aRgbHex[1], 16)},${parseInt(aRgbHex[2], 16)}`
}

const hex2Rgb = (hex: string) => {
  const aRgbHex: any = hex.replace('#', '').match(/.{1,2}/g)
  const str = `rgb(${parseInt(aRgbHex[0], 16)},${parseInt(
    aRgbHex[1],
    16
  )},${parseInt(aRgbHex[2], 16)})`
  return str
}

const hex2Rgba = (hex: string, opacity = 1) => {
  const aRgbHex: any = hex.replace('#', '').match(/.{1,2}/g)
  return `rgba(${parseInt(aRgbHex[0], 16)},${parseInt(
    aRgbHex[1],
    16
  )},${parseInt(aRgbHex[2], 16)},${opacity})`
}

const hex2RgbaWithVar = (cssVar: string, opacity = 1) => `rgba(${cssVar},${opacity})`

const textOverflow = (width: string) => `
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const isDevice = (device: DeviceElement, devices: DeviceElement[]): device is DeviceElement =>
  devices.includes(device)

const isMobile = (width: number) => width <= breakpoints.md

const isSmallDevice = (width: number) => width <= breakpoints.lg

const needSplash = (width: number) => width <= breakpoints.lg

const media = (device: DeviceElement, content: string) => {
  return ` @media (min-width: ${breakpoints[device]}px) {
    ${content}
  }
`
}

const isHexColor = (hex: string | undefined) => {
  if (!hex) {
    return false
  }
  if (hex.includes('#')) {
    return hex.replace('#', '').match(/[0-9A-Fa-f]{6}/g)
  }

  return false
}

const placeholder = (content: string) => `
  ::placeholder {
    ${content}
  }
`

const Theme = {
  boxShadow,
  disableSelect,
  fontFamily,
  fontSize,
  hex2CssVar,
  hex2Rgb,
  hex2Rgba,
  hex2RgbaWithVar,
  isDevice,
  isHexColor,
  isMobile,
  isSmallDevice,
  media,
  needSplash,
  placeholder,
  size,
  textOverflow,
  transform,
  transition,
}

export default Theme
