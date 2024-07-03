import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  Object3D,
  Vector3,
} from "@anov/3d-core";

export const nodeOps = () => {
  return {
    createElement(tag, _isSVG, _anchor, props) {
      switch (tag) {
        case "Mesh":
          const box = new Mesh(
            new BoxGeometry(10, 10, 10),
            new MeshBasicMaterial()
          );
          return box;
      }
    },
    insert(child, parent, anchor) {
      parent.add(child);
    },
    remove(child) {
      const parent = child.parent;
      if (parent) {
        parent.remove(child);
      }
    },
    setElementText(node) {},
    createText(text) {
      return new Object3D();
    },
    createComment(text) {
      return new Object3D();
    },
    setText(node, text) {},
    parentNode(node) {
      return node.parent;
    },
    nextSibling(node) {
      return null;
    },
    querySelector(selectors) {
      return null;
    },
    setScopeId(el, id) {},
  };
};
