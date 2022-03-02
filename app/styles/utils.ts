import { css } from 'styled-components'
import type { gutterProps, colorProps, dimensionsProps, typographyProps } from './types/utils-types'

const gutters = css<gutterProps>`
  margin: ${(p) => (typeof p.m === 'number' ? `${p.m}px` : !isNaN(Number(p.m)) ? `${p.m}px` : p.m)};
  padding: ${(p) => (typeof p.p === 'number' ? `${p.p}px` : !isNaN(Number(p.p)) ? `${p.p}px` : p.p)};
  ${(prop) => (prop.mY ? `margin-top: ${prop.mY}px;margin-bottom: ${prop.mY}px;` : null)}
  ${(prop) => (prop.pY ? `padding-top: ${prop.pY}px;padding-bottom: ${prop.pY}px;` : null)}
  ${(prop) => (prop.mX ? `margin-left: ${prop.mX}px;margin-right: ${prop.mX}px;` : null)}
  ${(prop) => (prop.pX ? `padding-left: ${prop.pX}px;padding-right: ${prop.pX}px;` : null)}
  ${(prop) => (prop.mT ? `margin-top: ${prop.mT}px;` : null)}
  ${(prop) => (prop.mR ? `margin-right: ${prop.mR}px;` : null)}
  ${(prop) => (prop.mB ? `margin-bottom: ${prop.mB}px;` : null)}
  ${(prop) => (prop.mL ? `margin-left: ${prop.mL}px;` : null)}
  ${(prop) => (prop.pT ? `padding-top: ${prop.pT}px;` : null)}
  ${(prop) => (prop.pR ? `padding-right: ${prop.pR}px;` : null)}
  ${(prop) => (prop.pB ? `padding-bottom: ${prop.pB}px;` : null)}
  ${(prop) => (prop.pL ? `padding-left: ${prop.pL}px;` : null)}
`

const colors = css<colorProps>`
  background: ${(prop) => prop.bg || null};
  color: ${(prop) => prop.color || null};
`

const dimensions = css<dimensionsProps>`
  width: ${(p) => p.width || null};
  height: ${(p) => p.height || null};
  max-width: ${(p) => p.maxW || null};
  max-height: ${(p) => p.maxH || null};
  min-width: ${(p) => p.minW || null};
  min-height: ${(p) => p.minH || null};
`

const typography = css<typographyProps>`
  font-size: ${(p) => p.fontSize || null};
  line-height: ${(p) => p.lineHeight || null};
  font-weight: ${(p) =>
    p.fontWeight === 'bold'
      ? 'var(--font-weight-bold)'
      : p.fontWeight === 'medium'
      ? 'var(--font-weight-medium)'
      : null};
`

export { gutters, colors, dimensions, typography }
