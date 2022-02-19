import axios from "axios";
import { Config } from "../config.global";

export const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})