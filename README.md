vue3 threejs 自定义渲染

```vue
<template>
  <div class="root">
    <Scene>
      <AMesh :position="[0, 0, 0]" @click="handleClick" @mouseover="handleMouseover" @mouseout="handleMouseout">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="red" />
      </AMesh>

      <AMesh :position="[-10, 10, 0]">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="green" />
      </AMesh>

      <AMesh :position="[-10, -10, 0]">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="yellow" />
      </AMesh>
    </Scene>
  </div>
</template>
```