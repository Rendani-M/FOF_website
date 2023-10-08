import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://graph.facebook.com/1724580501141955"
}); 