<template>
  <main>
    <h1>Hello Button</h1>
    <button @click="incrementMethod">
      {{ names }}
    </button>
    {{ num }}
  </main>
</template>

<script lang="ts">
export default {
  name: "PlayButton",
  props: {
    names: String,
    num: Number,
    incrementMethod: Function,
  },
};
</script>
