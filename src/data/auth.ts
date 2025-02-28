import { baseUrl } from "./constants";

import axios from "axios";

export const loginUser = async (formData: { name: string; email: string }) => {
  try {
    await axios.post(`${baseUrl}/auth/login`, formData, {
      withCredentials: true,
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      if (!error?.response) {
        return { error: true, resp: "Failed to reach server, try again later" };
      } else if (error.status === 401) {
        return {
          error: true,
          resp: "Those credentials were incorrect, please try again",
        };
      } else {
        return {
          error: true,
          resp: `Something has gone wrong: ${error.message}`,
        };
      }
    }
    console.error(error);
    return {
      error: true,
      resp: "Something has gone wrong, please contact us at help@homeward-bound.com",
    };
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(
      `${baseUrl}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      if (!error?.response) {
        return { error: true, resp: "Failed to reach server, try again later" };
      } else {
        return {
          error: true,
          resp: `Something has gone wrong: ${error.message}`,
        };
      }
    }
    console.error(error);
    return {
      error: true,
      resp: "Something has gone wrong, please contact us at help@homeward-bound.com",
    };
  }
};
