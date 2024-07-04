import * as Anov from '@anov/3d-core'

export function nodeOps() {
  return {
    createElement(tag, _isSVG, _anchor, props) {
      if (Anov[tag]) {
        let node
        if (tag.includes('Geometry'))
          node = new Anov[tag](props.size[0], props.size[1], props.size[2])

        else
          node = new Anov[tag]()

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
