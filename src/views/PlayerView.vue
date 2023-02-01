<template>
  <div>
    <PlayButton :names="names" :num="num" :incrementMethod="increment" />
  </div>
</template>

<script lang="ts">
import PlayButton from "@/components/PlayButton.vue";
export default {
  name: "PlayView",
  components: {
    PlayButton,
  },
  data() {
    return {
      names: "Add",
      num: 0,
    };
  },
  methods: {
    increment() {
      this.num++;
    },
  },
};
</script>
