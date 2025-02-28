import { baseUrl } from "./constants";

/* eslint-disable-next-line */
const axios = require("axios").default;

export const loginUser = async (formData: {
  username: string;
  name: string;
}) => {
  try {
    const response = await axios.post(
      `${baseUrl}/auth/login`,
      {
        formData,
      },
      { withCredentials: true }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
