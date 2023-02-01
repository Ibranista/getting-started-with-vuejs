<template>
  <div class="greetings">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>
<script lang="ts">
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
<style scoped>
.greetings {
  color: white !important;
  background-color: #2d2d2d;
  width: 60%;
  border: solid 1px #ffffff;
  text-align: center;
  padding-top: 1em;
  margin-bottom: 50px;
}
.greetings:hover {
  box-shadow: inset 0px 1px 4px #aaa;
  box-shadow: 0px 0px 5px rgba(103, 103, 103, 0.8);
  scale: calc(1.02);
  transition: scale 0.3s;
  cursor: pointer;
}
span {
  font-size: 1.5em;
  letter-spacing: 1.2px;
}
h4 {
  font-weight: bold;
  font-size: 2em;
  padding: 1em 1em 1.5em 1em;
}
</style>
