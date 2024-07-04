import {
  Fragment,
  createRenderer,
  defineComponent,
  getCurrentInstance,
  h,
  ref,
} from 'vue'
import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'

function mountCustomRenderer(context, slots) {
  const InternalComponent = defineComponent({
    setup() {
      const instance = getCurrentInstance()?.appContext.app
      const ctx = getCurrentInstance()?.appContext

      if (ctx)
        ctx.app = instance

      return () => h(Fragment, null, slots?.default ? slots.default() : [])
    },
  })

  const { render } = createRenderer({
    ...nodeOps(),
    patchProp,
  })

  const scene = context.scene
  const app = ref(h(InternalComponent))
  render(app.value, scene)
}

export default mountCustomRenderer
