import React, { useState } from 'react'
import {
  AlignmentType,
  Appearance,
  BorderRadius,
  Cursors,
  Devices,
  FlexDirection,
  FlexDisplay,
  FlexWrap,
  FontSizes,
  FontWeights,
  GridDisplay,
  GridFlow,
  JustifyType,
  Shadows,
  Spacing,
  WindowBreakpoints,
} from '~/styles/default'
import {
  AppearanceElement,
  AppearanceObject,
  BorderRadiusObject,
  ColorObject,
  CursorObject,
  DeviceElement,
  FontWeightObject,
  MainStyleThemeObject,
  OtherStylesObject,
  ShadowObject,
  StyleObject,
  WindowBreakpointObject,
} from '~/types/style.types'

type ThemeContextType = {
  colors: ColorObject
  currentAppearance: AppearanceElement
  appearance: AppearanceObject
  fontSizes: StyleObject
  fontWeights: FontWeightObject
  spacing: StyleObject
  shadows: ShadowObject
  cursors: CursorObject
  borderRadius: BorderRadiusObject
  devices: DeviceElement[]
  windowBreakpoints: WindowBreakpointObject
  otherStyles: OtherStylesObject
  setThemeValues: (values: any) => void
  setCurrentAppearance: (theme: AppearanceElement) => void
}

const initialThemeContext: ThemeContextType = {
  colors: {},
  currentAppearance: 'default',
  appearance: Appearance,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  spacing: Spacing,
  shadows: Shadows,
  cursors: Cursors,
  borderRadius: BorderRadius,
  devices: Devices,
  windowBreakpoints: WindowBreakpoints,
  otherStyles: {
    flex: FlexDisplay,
    flexDirection: FlexDirection,
    flexWrap: FlexWrap,
    grid: GridDisplay,
    gridFlow: GridFlow,
    alignment: AlignmentType,
    justify: JustifyType,
  },
  setThemeValues: () => {},
  setCurrentAppearance: () => {},
}

export const ThemeContext = React.createContext(initialThemeContext)

const ThemeProvider = ({
  children,
  initialStyles,
}: {
  children: React.ReactNode
  initialStyles?: MainStyleThemeObject
}) => {
  const [values, setValues] = useState<ThemeContextType>({
    ...(initialStyles ? { ...initialStyles } : {}),
    ...initialThemeContext,
  })
  const [currentAppearance, setCurrentAppearance] = useState<AppearanceElement>('default')

  const setThemeValues = (params: any) => setValues({ ...values, ...params })

  return (
    <ThemeContext.Provider
      value={{
        ...values,
        currentAppearance,
        setCurrentAppearance,
        setThemeValues,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
