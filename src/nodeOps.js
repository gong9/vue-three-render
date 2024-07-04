import * as Anov from '@anov/3d-core'
import { eventKey } from './config'

export function nodeOps() {
  const { renderer, camera, domElement } = Anov.use.useScene()

  const interactionManager = new Anov.InteractionManager(
    renderer, camera, domElement,
  )

  Anov.use.useframe(() => {
    interactionManager.update()
  })

  return {
    createElement(tag, _isSVG, _anchor, props) {
      tag = tag.slice(1)

      if (Anov[tag]) {
        let node
        if (tag.includes('Geometry'))
          node = new Anov[tag](props.size[0], props.size[1], props.size[2])

        else
          node = new Anov[tag]()

        Object.keys(props).forEach(
          (prop) => {
            if (eventKey.includes(prop)) {
              !node?.isInteract && interactionManager.add(node)
              node.isInteract = true

              node.addEventListener(prop.toLowerCase().slice(2), () => props[prop](node))
            }
          },
        )

        return node
      }

      throw new Error('Anov not have tag moudle')
    },
    insert(child, parent) {
      if (child && parent) {
        if (child.isBufferGeometry)
          parent.geometry = child

        else if (child.isMaterial)
          parent.material = child

        else parent.add(child)
      }
    },
    remove(child) {
      const parent = child.parent

      if (child.type === 'Mesh')
        child.isInteract = false

      if (parent)
        parent.remove(child)
    },
    createText() {
      return null
    },
    createComment() {
      return null
    },

    parentNode(node) {
      if (node && node.parent)
        return node.parent

      return null
    },

    nextSibling(node) {
      if (node && node.nextSibling)
        return node.nextSibling

      return null
    },
  }
}
