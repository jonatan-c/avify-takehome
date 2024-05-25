import axios from "axios";

const clientAxios = axios.create({
  baseURL: "https://api.carbonintensity.org.uk/generation",
});

export default clientAxios;
