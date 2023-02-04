<script lang="ts">
import EventCard from "../components/EventCard.vue";
import axios from "axios";
export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  async created() {
    try {
      let data = await axios.get(
        "http://my-json-server.typicode.com/ibranista/fake-database/events"
      );
      this.events = data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<template>
  <main>
    <div class="events">
      <h1 class="green">Events</h1>
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.green {
  margin-right: 500px;
}
</style>
