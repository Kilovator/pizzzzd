import * as THREE from 'three'

/* ─────────────────────────────────────────────────────────────
   PIZZERIA NEAPOL — "Wood-Fired Oven Embers" Three.js scene
   ───────────────────────────────────────────────────────────── */

// Canvas texture: radial glow circle
function makeGlowTexture(innerColor, outerColor) {
  const SIZE = 128
  const cv = document.createElement('canvas')
  cv.width = SIZE; cv.height = SIZE
  const ctx = cv.getContext('2d')
  const g = ctx.createRadialGradient(SIZE/2, SIZE/2, 0, SIZE/2, SIZE/2, SIZE/2)
  g.addColorStop(0,    innerColor)
  g.addColorStop(0.25, outerColor)
  g.addColorStop(1,    'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, SIZE, SIZE)
  return new THREE.CanvasTexture(cv)
}

export function initThreeScene() {
  // ── Renderer ──────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)

  const canvas = renderer.domElement
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;' +
    'z-index:-1;pointer-events:none;opacity:0.7;'
  document.body.appendChild(canvas)

  // ── Scene & Camera ────────────────────────────────────────
  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(0, 0, 40)

  // ── Textures ──────────────────────────────────────────────
  const texBright = makeGlowTexture('rgba(255,220,180,1)', 'rgba(255,100,40,0.6)')
  const texRed    = makeGlowTexture('rgba(255,130,80,1)',  'rgba(200,30,10,0.4)')
  const texWhite  = makeGlowTexture('rgba(255,255,240,1)', 'rgba(255,180,130,0.3)')

  // ── Helper: create a particle system ─────────────────────
  function makeParticles(count, texture, sizeRange, spread, colorHex, opacity) {
    const pos  = new Float32Array(count * 3)
    const life = new Float32Array(count)      // 0-1 life cycle
    const spd  = new Float32Array(count * 3)  // individual velocities
    const phaseArr = new Float32Array(count)  // wave phase

    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * spread.x
      pos[i*3+1] = (Math.random() - 0.5) * spread.y
      pos[i*3+2] = (Math.random() - 0.5) * spread.z
      life[i]    = Math.random()
      spd[i*3]   = (Math.random() - 0.5) * 0.025
      spd[i*3+1] = Math.random() * 0.055 + 0.018
      spd[i*3+2] = (Math.random() - 0.5) * 0.012
      phaseArr[i] = Math.random() * Math.PI * 2
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))

    const mat = new THREE.PointsMaterial({
      size: sizeRange,
      map: texture,
      color: new THREE.Color(colorHex),
      transparent: true,
      opacity,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const pts = new THREE.Points(geo, mat)
    scene.add(pts)

    return { pts, pos, spd, life, phaseArr, spread, count }
  }

  // ── Particle layers ───────────────────────────────────────
  // Layer 1: Main embers — warm orange/red, rise upward
  const embers = makeParticles(
    220, texBright, 1.4,
    { x: 70, y: 50, z: 30 },
    '#ff7a30', 0.75
  )

  // Layer 2: Micro sparks — bright yellow-white, faster
  const sparks = makeParticles(
    140, texWhite, 0.55,
    { x: 60, y: 40, z: 25 },
    '#ffe8c0', 0.55
  )

  // Layer 3: Deep red embers — slow, large, background
  const deepEmbers = makeParticles(
    60, texRed, 2.8,
    { x: 80, y: 60, z: 20 },
    '#cc2200', 0.3
  )

  const layers = [embers, sparks, deepEmbers]

  // ── Large glowing orbs (atmospheric depth) ────────────────
  const orbColors = ['#ff4400', '#cc1100', '#ff7722', '#ff2200', '#dd3300']
  const orbMeshes = []
  const orbGeo = new THREE.SphereGeometry(1, 8, 8)

  for (let i = 0; i < 7; i++) {
    const m = new THREE.MeshBasicMaterial({
      color: new THREE.Color(orbColors[i % orbColors.length]),
      transparent: true,
      opacity: 0.055 + Math.random() * 0.06,
    })
    const mesh = new THREE.Mesh(orbGeo, m)
    mesh.position.set(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 35,
      (Math.random() - 0.5) * 20 - 8
    )
    const s = 3 + Math.random() * 8
    mesh.scale.setScalar(s)
    scene.add(mesh)
    orbMeshes.push({
      mesh,
      baseY: mesh.position.y,
      floatAmp: 0.08 + Math.random() * 0.12,
      floatFreq: 0.3  + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.001,
    })
  }

  // ── Mouse parallax ────────────────────────────────────────
  let targetMX = 0, targetMY = 0
  let camX = 0, camY = 0
  document.addEventListener('mousemove', e => {
    targetMX = (e.clientX / window.innerWidth  - 0.5) * 6
    targetMY = -(e.clientY / window.innerHeight - 0.5) * 4
  })

  // ── Reset a particle to bottom of scene ──────────────────
  function resetParticle(layer, i) {
    const { pos, spd, phaseArr, spread } = layer
    pos[i*3]   = (Math.random() - 0.5) * spread.x
    pos[i*3+1] = -(spread.y / 2) - Math.random() * 8
    pos[i*3+2] = (Math.random() - 0.5) * spread.z
    spd[i*3]   = (Math.random() - 0.5) * 0.025
    spd[i*3+1] = Math.random() * 0.055 + 0.018
    spd[i*3+2] = (Math.random() - 0.5) * 0.012
    phaseArr[i] = Math.random() * Math.PI * 2
  }

  // ── Animation loop ────────────────────────────────────────
  let t = 0
  let raf

  function tick() {
    raf = requestAnimationFrame(tick)
    t += 0.008

    // Update each particle layer
    layers.forEach(layer => {
      const { pos, spd, phaseArr, spread, count } = layer
      for (let i = 0; i < count; i++) {
        // Drift upward + sine sway
        pos[i*3]   += spd[i*3]   + Math.sin(t * 1.5 + phaseArr[i]) * 0.008
        pos[i*3+1] += spd[i*3+1]
        pos[i*3+2] += spd[i*3+2]

        // Wrap: reset particle when it exits top
        if (pos[i*3+1] > spread.y / 2 + 5) resetParticle(layer, i)
      }
      layer.pts.geometry.attributes.position.needsUpdate = true
    })

    // Float the large orbs
    orbMeshes.forEach(o => {
      o.mesh.position.y = o.baseY + Math.sin(t * o.floatFreq + o.phase) * o.floatAmp * 6
      o.mesh.rotation.y += o.rotSpeed
    })

    // Smooth camera parallax
    camX += (targetMX - camX) * 0.04
    camY += (targetMY - camY) * 0.04
    camera.position.x = camX
    camera.position.y = camY
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  tick()

  // ── Resize ────────────────────────────────────────────────
  const onResize = () => {
    const W = window.innerWidth, H = window.innerHeight
    camera.aspect = W / H
    camera.updateProjectionMatrix()
    renderer.setSize(W, H)
  }
  window.addEventListener('resize', onResize)

  // ── Cleanup on HMR (Vite hot reload) ─────────────────────
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      canvas.remove()
    })
  }
}
