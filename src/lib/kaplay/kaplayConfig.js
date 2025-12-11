import kaplay from 'kaplay'

let k = null

export function initKaplay(container) {
  if (!k) {
    k = kaplay({
      root: container,
      width: container.clientWidth,
      height: container.clientHeight,
      global: false,
      letterbox: true,
      scale: 1,
    })
  }
  return k
}

export function getKaplay() {
  if (!k) throw new Error('Kaplay not initialized yet')
  return k
}
