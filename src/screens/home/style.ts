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
		height: "55%",
		backgroundColor: "#B73058",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		alignItems: "center"
	},
	textContainer: {
		width: "100%",
		height: "100%",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		position: "relative",
		top: -40,
		backgroundColor: "#FFFFFF"
	}
});
