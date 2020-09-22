import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/challenge-23f4b/us-central1/api",

  // 'http://localhost:5001/challenge-23f4b.cloudfunctions.net/api'
});

export default instance;
