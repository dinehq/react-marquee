import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { Marquee } from '../src'

const container = document.getElementById('app')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Marquee>Hello, world!</Marquee>
    </StrictMode>
  )
}
