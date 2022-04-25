import React, { FC, ReactNode } from 'react'

export interface MarqueeProps {
  children: ReactNode
}

const style = {
  width: '100%',
}

export const Marquee: FC<MarqueeProps> = (props) => {
  const { children } = props

  return <div style={style}>{children}</div>
}
