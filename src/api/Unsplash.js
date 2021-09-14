import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3epZ7R5CZebrCllm2iz8u3CfC4Ssh3rbhgmC7BB3LyQ",
  },
});
