import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddColor = ({ getColors, initialColor }) => {
	const [colorToAdd, setColorToAdd] = useState(initialColor);

	const addColor = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post(`/api/colors`, colorToAdd)
			.then(() => {
				getColors();
				setColorToAdd(initialColor);
			})
			.catch((error) => console.log(error.response.data));
	};

	return (
		<form onSubmit={addColor}>
			<legend>add color</legend>
			<label>
				color name:
				<input
					onChange={(e) => setColorToAdd({ ...colorToAdd, color: e.target.value })}
					value={colorToAdd.color}
				/>
			</label>
			<label>
				hex code:
				<input
					onChange={(e) =>
						setColorToAdd({
							...colorToAdd,
							code: { hex: e.target.value },
						})
					}
					value={colorToAdd.code.hex}
				/>
			</label>
			<div className="button-row">
				<button type="submit">save</button>
			</div>
		</form>
	);
};

export default AddColor;