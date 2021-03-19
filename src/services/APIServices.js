import axios from "axios";
import {BASE_URL} from "../utils/consts";

const headers = () => {
  return {
    headers: {
      "Content-type": "application/json"
    },
  };
};

export const getItineraries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}itineraries`, headers());
    return { success: true, data: response.data || [] };
  } catch (e) {
    console.log(e);
    return { success: false, msg: "Something went wrong" };
  }
};

export const getItinerariesById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}itineraries/${id}`, headers());
    return { success: true, data: response.data || [] };
  } catch (e) {
    console.log(e);
    return { success: false, msg: "Something went wrong" };
  }
};

export const getLegsById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}legs/${id}`, headers());
    return { success: true, data: response.data || [] };
  } catch (e) {
    console.log(e);
    return { success: false, msg: "Something went wrong" };
  }
};

export const getLegs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}legs`, headers());
    return { success: true, data: response.data || [] };
  } catch (e) {
    console.log(e);
    return { success: false, msg: "Something went wrong" };
  }
};
