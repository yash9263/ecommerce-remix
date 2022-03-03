type Globals = 'inherit' | 'initial' | 'revert' | 'unset'

interface gutterProps {
  p?: Globals | string | number
  m?: Globals | string | number
  pX?: Globals | number
  pY?: Globals | number
  mX?: Globals | number
  mY?: Globals | number
  pT?: Globals | number
  pR?: Globals | number
  pB?: Globals | number
  pL?: Globals | number
  mT?: Globals | number
  mR?: Globals | number
  mB?: Globals | number
  mL?: Globals | number
}

interface colorProps {
  bg?: Globals | string
  color?: Globals | string
}

interface dimensionsProps {
  width?: Globals | string
  height?: Globals | string
  maxW?: Globals | string
  minW?: Globals | string
  maxH?: Globals | string
  minH?: Globals | string
}

interface typographyProps {
  fontSize?: Globals | number | string
  textAlign?: Globals | 'center' | 'left' | 'right'
  fontWeight?: Globals | 'bold' | 'medium' | 'normal'
  lineHeight?: Globals | number
}

export type { Globals, gutterProps, colorProps, dimensionsProps, typographyProps }
