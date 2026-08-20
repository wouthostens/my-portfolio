<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  snake: { type: Array, required: true },
  food: { type: Object, default: null },
  deathTraps: { type: Array, default: () => [] },
  grid: { type: Number, default: 20 },
})

const container = ref(null)

// Kleuren per thema
const THEME = {
  dark: { board: 0x232329, grid: 0x52525b, ambient: 0.85, dir: 2.4, wall: 0x6366f1, glow: 1 },
  light: { board: 0xe4e4e7, grid: 0xa1a1aa, ambient: 1.45, dir: 3.0, wall: 0x8b5cf6, glow: 0.3 },
}

let renderer, scene, camera, frameId
let boardMat, gridHelper, ambientLight, dirLight, wallMats = []
let snakeMeshes = [], trapMeshes = [], foodMesh, foodLight
let bodyMat, headMat, foodMat, trapMat
let boxGeo, sphereGeo
// Basiswaarden voor de gloed, geschaald per thema
const GLOW = { body: 0.22, head: 0.5, trap: 0.4, food: 0.7, wall: 0.55 }
let resizeObserver, themeObserver
let startTime = 0, lastTime = 0
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Speelveld-coordinaat naar wereld-coordinaat
const half = (props.grid - 1) / 2
const toWorld = (x, y, out = new THREE.Vector3()) => out.set(x - half, 0.5, y - half)

const isDark = () => document.body.classList.contains('dark')

function applyTheme() {
  const t = isDark() ? THEME.dark : THEME.light
  boardMat.color.setHex(t.board)
  gridHelper.material.color.setHex(t.grid)
  ambientLight.intensity = t.ambient
  dirLight.intensity = t.dir
  wallMats.forEach((m) => {
    m.color.setHex(t.wall)
    m.emissive.setHex(t.wall)
    m.emissiveIntensity = GLOW.wall * t.glow
  })
  bodyMat.emissiveIntensity = GLOW.body * t.glow
  headMat.emissiveIntensity = GLOW.head * t.glow
  trapMat.emissiveIntensity = GLOW.trap * t.glow
  foodMat.emissiveIntensity = GLOW.food * t.glow
  foodLight.intensity = 26 * t.glow
}

function makeSnakeMesh() {
  const mesh = new THREE.Mesh(boxGeo, bodyMat)
  mesh.castShadow = true
  mesh.userData = { target: new THREE.Vector3(), fresh: true, scale: 1 }
  scene.add(mesh)
  return mesh
}

function syncSnake() {
  const segments = props.snake || []
  while (snakeMeshes.length < segments.length) snakeMeshes.push(makeSnakeMesh())

  snakeMeshes.forEach((mesh, i) => {
    if (i >= segments.length) {
      mesh.visible = false
      mesh.userData.fresh = true
      return
    }
    mesh.visible = true
    toWorld(segments[i].x, segments[i].y, mesh.userData.target)

    if (mesh.userData.fresh) {
      // Nieuw segment groeit uit de nek van de slang
      const spawn = i > 0 ? snakeMeshes[i - 1].position : mesh.userData.target
      mesh.position.copy(spawn)
      mesh.scale.setScalar(0.01)
      mesh.userData.fresh = false
    }

    const isHead = i === 0
    mesh.material = isHead ? headMat : bodyMat
    // Staart wordt subtiel smaller richting het uiteinde
    mesh.userData.scale = isHead ? 1 : Math.max(0.62, 0.92 - i * 0.006)
  })
}

function syncTraps() {
  const traps = props.deathTraps || []
  while (trapMeshes.length < traps.length) {
    const mesh = new THREE.Mesh(boxGeo, trapMat)
    mesh.castShadow = true
    mesh.userData = { scale: 0 }
    scene.add(mesh)
    trapMeshes.push(mesh)
  }
  trapMeshes.forEach((mesh, i) => {
    if (i >= traps.length) {
      mesh.visible = false
      mesh.userData.scale = 0
      mesh.scale.setScalar(0.01)
      return
    }
    mesh.visible = true
    toWorld(traps[i].x, traps[i].y, mesh.position)
    mesh.position.y = 0.55
    mesh.userData.scale = 1.05
  })
}

function syncFood() {
  const visible = !!props.food
  foodMesh.visible = visible
  foodLight.visible = visible
  if (visible) {
    toWorld(props.food.x, props.food.y, foodMesh.userData.target)
    if (foodMesh.userData.fresh) {
      foodMesh.position.copy(foodMesh.userData.target)
      foodMesh.userData.fresh = false
    }
  } else {
    foodMesh.userData.fresh = true
  }
}

function resize() {
  if (!container.value || !renderer) return
  const { clientWidth: w, clientHeight: h } = container.value
  if (!w || !h) return
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
}

function animate() {
  frameId = requestAnimationFrame(animate)
  const now = performance.now() / 1000
  const dt = Math.min(now - lastTime, 0.1)
  lastTime = now
  const t = now - startTime

  // Vloeiend naar de doelpositie bewegen (het spel tikt maar elke 200ms)
  const ease = reduceMotion ? 1 : Math.min(1, dt * 14)

  snakeMeshes.forEach((mesh) => {
    if (!mesh.visible) return
    mesh.position.lerp(mesh.userData.target, ease)
    const s = mesh.scale.x + (mesh.userData.scale - mesh.scale.x) * Math.min(1, dt * 10)
    mesh.scale.setScalar(s)
  })

  trapMeshes.forEach((mesh) => {
    if (!mesh.visible) return
    const s = mesh.scale.x + (mesh.userData.scale - mesh.scale.x) * Math.min(1, dt * 8)
    mesh.scale.setScalar(s)
  })

  if (foodMesh.visible) {
    foodMesh.position.lerp(foodMesh.userData.target, ease)
    foodMesh.position.y = 0.6 + (reduceMotion ? 0 : Math.sin(t * 2.4) * 0.16)
    if (!reduceMotion) {
      foodMesh.rotation.y = t * 0.9
      foodMesh.rotation.x = t * 0.5
    }
    foodLight.position.copy(foodMesh.position)
  }

  // Heel subtiele camerabeweging zodat de scene leeft
  if (!reduceMotion) {
    camera.position.x = Math.sin(t * 0.18) * 1.1
    camera.position.z = 17.5 + Math.cos(t * 0.22) * 0.6
    camera.lookAt(0, 0, 0)
  }

  renderer.render(scene, camera)
}

onMounted(() => {
  const G = props.grid
  startTime = performance.now() / 1000
  lastTime = startTime

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(45, 4 / 3, 0.1, 200)
  camera.position.set(0, 19.5, 17.5)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1
  container.value.appendChild(renderer.domElement)
  renderer.domElement.style.display = 'block'

  // Licht
  ambientLight = new THREE.AmbientLight(0xffffff, 1.1)
  scene.add(ambientLight)

  dirLight = new THREE.DirectionalLight(0xffffff, 2.6)
  dirLight.position.set(-8, 18, 10)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(1024, 1024)
  dirLight.shadow.camera.left = -14
  dirLight.shadow.camera.right = 14
  dirLight.shadow.camera.top = 14
  dirLight.shadow.camera.bottom = -14
  dirLight.shadow.camera.far = 60
  dirLight.shadow.normalBias = 0.02
  scene.add(dirLight)

  // Gekleurde accentlichten in de gradient van de site
  const indigo = new THREE.PointLight(0x6366f1, 55, 40)
  indigo.position.set(-12, 8, -12)
  scene.add(indigo)
  const fuchsia = new THREE.PointLight(0xd946ef, 55, 40)
  fuchsia.position.set(12, 8, 12)
  scene.add(fuchsia)

  // Speelveld
  boardMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.95, metalness: 0.05 })
  const board = new THREE.Mesh(new THREE.BoxGeometry(G, 0.6, G), boardMat)
  board.position.y = -0.3
  board.receiveShadow = true
  scene.add(board)

  gridHelper = new THREE.GridHelper(G, G, 0x3f3f46, 0x3f3f46)
  gridHelper.position.y = 0.015
  gridHelper.material.transparent = true
  gridHelper.material.opacity = 0.8
  scene.add(gridHelper)

  // Neon randen: dit zijn de dodelijke muren
  const wallGeo = new THREE.BoxGeometry(G + 0.3, 0.7, 0.3)
  const wallDefs = [
    [0, -G / 2, 0],
    [0, G / 2, 0],
    [-G / 2, 0, Math.PI / 2],
    [G / 2, 0, Math.PI / 2],
  ]
  wallDefs.forEach(([x, z, rot]) => {
    const mat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x6366f1,
      emissiveIntensity: 0.55,
      transparent: true,
      opacity: 0.45,
      roughness: 0.3,
    })
    wallMats.push(mat)
    const wall = new THREE.Mesh(wallGeo, mat)
    wall.position.set(x, 0.35, z)
    wall.rotation.y = rot
    scene.add(wall)
  })

  // Materialen en geometrie voor de spelobjecten
  boxGeo = new THREE.BoxGeometry(0.86, 0.86, 0.86)
  sphereGeo = new THREE.SphereGeometry(0.42, 32, 24)

  bodyMat = new THREE.MeshStandardMaterial({
    color: 0x059669, roughness: 0.3, metalness: 0.25,
    emissive: 0x10b981, emissiveIntensity: 0.22,
  })
  headMat = new THREE.MeshStandardMaterial({
    color: 0x10b981, roughness: 0.22, metalness: 0.3,
    emissive: 0x34d399, emissiveIntensity: 0.5,
  })
  trapMat = new THREE.MeshStandardMaterial({
    color: 0x7c3aed, roughness: 0.28, metalness: 0.3,
    emissive: 0x8b5cf6, emissiveIntensity: 0.4,
  })
  foodMat = new THREE.MeshStandardMaterial({
    color: 0xf43f5e, roughness: 0.2, metalness: 0.3,
    emissive: 0xf43f5e, emissiveIntensity: 0.7,
  })

  foodMesh = new THREE.Mesh(sphereGeo, foodMat)
  foodMesh.castShadow = true
  foodMesh.userData = { target: new THREE.Vector3(), fresh: true }
  scene.add(foodMesh)

  foodLight = new THREE.PointLight(0xf43f5e, 26, 9)
  scene.add(foodLight)

  applyTheme()
  syncSnake()
  syncTraps()
  syncFood()
  resize()
  animate()

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container.value)

  themeObserver = new MutationObserver(applyTheme)
  themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })
})

watch(() => props.snake, syncSnake, { deep: true })
watch(() => props.deathTraps, syncTraps, { deep: true })
watch(() => props.food, syncFood, { deep: true })

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
  resizeObserver?.disconnect()
  themeObserver?.disconnect()
  scene?.traverse((obj) => {
    if (obj.isMesh) {
      obj.geometry?.dispose()
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
      mats.forEach((m) => m?.dispose())
    }
  })
  gridHelper?.material.dispose()
  gridHelper?.geometry.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div ref="container" class="relative w-full overflow-hidden rounded-xl ring-1 ring-zinc-900/10 dark:ring-white/10"
    style="aspect-ratio: 4 / 3"></div>
</template>
