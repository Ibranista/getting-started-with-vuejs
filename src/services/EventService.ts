import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/ibranista/fake-database",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  fetchEvents() {
    return { getEvents: apiClient.get("/events") };
  },
};
