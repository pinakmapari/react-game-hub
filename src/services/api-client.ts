import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f448aa4535b245489dd9fbffd842e6c0",
  },
});
