import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getStatusBarHeight() + 17,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
	},
	imageViewContainer: {
		width: "100%",
		height: "50%",
		backgroundColor: "#B73058",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		alignItems: "center"
	},
	imageView: {
		width: "80%",
		height: "80%",
		marginTop: 50,
		borderRadius: 200,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		padding: 10,
		display: "flex"

	},
	viewGroupFirst: {
		width: 70,
		height: 70,
		backgroundColor: "#9CABC2",
		opacity: 0.7,
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
		backgroundColor: "#9CABC2",
		opacity: 0.7,
		borderRadius: 10,
		alignItems: "center",
		padding: 5,
		position: "relative",
		left: 100,
	},
	viewGroupThree: {
		width: 100,
		height: 80,
		opacity: 0.7,
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
		backgroundColor: "#9CABC2",
		opacity: 0.7,
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
