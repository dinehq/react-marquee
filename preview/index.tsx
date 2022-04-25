import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { Marquee, MarqueeHeadless } from '../src'

const container = document.getElementById('app')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Marquee styleType="css">CSS style</Marquee>
      <Marquee styleType="js">JS style</Marquee>
      <MarqueeHeadless>Emotion</MarqueeHeadless>
    </StrictMode>
  )
}
