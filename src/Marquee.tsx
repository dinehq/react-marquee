import React, { FC, ReactNode } from 'react'

export interface MarqueeProps {
  children: ReactNode
}

export const Marquee: FC<MarqueeProps> = (props) => {
  const { children } = props

  return <div>{children}</div>
}
