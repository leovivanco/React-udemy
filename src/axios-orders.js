import axios from "axios";

const instance = axios.create({
  BaseURL: "https://react-my-burger-28206.firebaseio.com"
});

export default instance;