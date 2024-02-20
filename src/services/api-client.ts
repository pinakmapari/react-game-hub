import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a89c455621394a6cb01a5b4ff590bb4f",
  },
});
