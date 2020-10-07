import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property

	const getColors = () => {
		axiosWithAuth()
			.get("/api/colors")
			.then((response) => setColorList(response.data))
			.catch((error) => console.log(error.response.data));
	};

	useEffect(() => {
		getColors();
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} getColors={getColors} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;