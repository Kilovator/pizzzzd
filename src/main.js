// ─── App scripts (side-effect imports) ───────────────────────────────────────
import '../script.js'
import '../mobile.js'
import '../auth.js'

// ─── Three.js background scene ───────────────────────────────────────────────
import { initThreeScene } from './three-scene.js'

document.addEventListener('DOMContentLoaded', () => {
  initThreeScene()
})
