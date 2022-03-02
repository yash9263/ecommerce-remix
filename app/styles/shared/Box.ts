import styled from 'styled-components'
import { colors, dimensions, gutters, typography } from '../utils'

import type { colorProps, dimensionsProps, Globals, gutterProps, typographyProps } from '../types/utils-types'

interface BoxProps extends gutterProps, colorProps, dimensionsProps, typographyProps {
  position?: Globals | 'relative' | 'absolute' | 'static'
  display?: Globals | 'block' | 'flex' | 'inline-block' | 'inline-flex'
  gap?: Globals | number
  alignItems?: Globals | 'baseline' | 'normal' | 'stretch' | 'center' | 'flex-end' | 'flex-start'
  overflow?: Globals | 'hidden' | 'auto'
}

const Box = styled.div<BoxProps>`
  position: ${(p) => p.position};
  display: ${(p) => p.display};
  ${(p) => (p.display === 'flex' || p.display === 'inline-flex' ? `align-items: ${p.alignItems};` : null)}
  ${(p) => (p.display === 'flex' || p.display === 'inline-flex' ? `gap: ${p.gap}px;` : null)}
  overflow: ${(p) => p.overflow};
  ${gutters}
  ${colors}
  ${dimensions}
  ${typography}
`

export { Box }
