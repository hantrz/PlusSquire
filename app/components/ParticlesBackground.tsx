'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'attract' },
    },
    modes: {
      attract: { distance: 150, duration: 0.4, speed: 2 },
    },
  },
  particles: {
    color: { value: '#1ea672' },
    links: {
      color: '#1ea672',
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none' as const,
      random: true,
      straight: false,
      outModes: { default: 'bounce' as const },
    },
    number: { value: 140, density: { enable: true, width: 1920, height: 1080 } },
    opacity: { value: 0.2 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
}

export default function ParticlesBackground() {
  const [engineReady, setEngineReady] = useState(false)

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    initParticlesEngine(particlesInit).then(() => setEngineReady(true))
  }, [particlesInit])

  // The hero's height depends on how its text content wraps (varies a lot on
  // mobile), which settles AFTER this component's first paint. tsParticles
  // only re-measures its canvas on a window "resize" event, so without this
  // nudge it keeps the canvas sized to the pre-layout height and the particle
  // field ends up squashed into just the top of the section on phones.
  useEffect(() => {
    if (!engineReady) return
    const t = setTimeout(() => window.dispatchEvent(new Event('resize')), 350)
    return () => clearTimeout(t)
  }, [engineReady])

  if (!engineReady) return null

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      <Particles
        id="hero-particles"
        options={particlesOptions}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
