import { Color, MeshBasicMaterial } from '@anov/3d-core'

export function patchProp(el, key, prevValue, nextValue) {
  if (!el)
    return

  switch (key) {
    case 'position':
      el.position.set(nextValue[0], nextValue[1], nextValue[2])
      break
    case 'rotation':
      el.rotation.set(nextValue.x, nextValue.y, nextValue.z)
      break
    case 'scale':
      el.scale.set(nextValue.x, nextValue.y, nextValue.z)
      break
    case 'color':
      el.material = new MeshBasicMaterial({
        color: new Color(nextValue),
      })
      break
  }
}
