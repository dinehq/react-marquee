import React, { CSSProperties, FC, ReactNode } from 'react'

import { css } from '@emotion/css'

import { style } from './style'

console.log(
  css({
    backgroundColor: 'hotpink',
  })
)

const jsx: typeof React.createElement = React.createElement

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const emotion = require('@emotion/react')
  // if (emotion?.jsx !== undefined) {
  //   jsx = emotion.jsx
  // }
} catch (e) {}

const isEmotionJSX = jsx !== React.createElement

export interface MarqueeHeadlessProps {
  children?: ReactNode
  overrides?: {
    root: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  }
}

export const MarqueeHeadless: FC<MarqueeHeadlessProps> = (props) => {
  const { children, overrides } = props

  const styleProps = {} as {
    css?: CSSProperties
    className?: string
  }

  if (isEmotionJSX) {
    styleProps.css = style.root
  } else {
    styleProps.className = css({
      ...style.root,
    })
  }

  return jsx('div', {
    ...styleProps,
    ...overrides?.root,
    children,
  })
}
