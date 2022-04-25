import React, { FC, ReactNode } from 'react'

import { MarqueeHeadless } from './MarqueeHeadless'
import { style } from './style'

export interface MarqueeProps {
  children: ReactNode
  overrides?: {
    root: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  }
  styleType?: 'css' | 'js'
}

export const Marquee: FC<MarqueeProps> = (props) => {
  const { children, styleType = process.env.componentStyleType === 'css' ? 'css' : 'js' } = props

  const styleProps = {} as {
    className?: string
    style?: React.CSSProperties
  }

  if (styleType === 'css') {
    styleProps.className = 'root'
  } else {
    styleProps.style = style.root
  }

  return <MarqueeHeadless {...styleProps}>{children}</MarqueeHeadless>
}
