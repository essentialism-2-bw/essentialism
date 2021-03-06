import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://essentialism-test-01.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;

/* https://essentialism-test-01.herokuapp.com/ */
/* https://essentialism-2.herokuapp.com/ */
