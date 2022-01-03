import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	imageView: {
		width: "80%",
		height: "75%",
		marginTop: 50,
		borderRadius: 200,
		backgroundColor: "#F5F5F5",
		alignItems: "center",
		padding: 10,
		display: "flex"

	},
	viewGroupFirst: {
		width: 70,
		height: 70,
		borderRadius: 10,
		alignItems: "center",
		padding: 5,
		position: "relative",
		left: -60,
		top: 10
	},
	viewGroupSecond: {
		display: "flex",
		flexDirection: "row",
		width: 70,
		height: 70,
		borderRadius: 10,
		alignItems: "center",
		padding: 5,
		position: "relative",
		left: 100,
	},
	viewGroupThree: {
		width: 100,
		height: 80,
		borderRadius: 10,
		alignItems: "center",
		position: "relative",
		top: -10
	},
	viewGroupFour: {
		display: "flex",
		flexDirection: "row",
		width: 70,
		height: 70,
		borderRadius: 10,
		alignItems: "center",
		padding: 5,
		position: "relative",
		left: -60,
	},
	image: {
		width: "80%",
		height: "80%"
	}
});
