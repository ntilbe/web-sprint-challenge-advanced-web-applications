import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			authorization: window.localStorage.getItem("token"),
		},
		baseURL: "http://localhost:5000",
	});
};