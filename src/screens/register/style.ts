import { StyleSheet } from "react-native";
import { getStatusBarHeight, getBottomSpace } from "react-native-iphone-x-helper";
import { FONTS } from "../../themes/fonts";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getStatusBarHeight() + 17,
		backgroundColor: "#FFFFFF"
	},

	containerBody: {
		width: "100%",
		height: 700,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		position: "relative",
		top: -40,
		alignItems: "center"

	},

	inputGroup: {
		width: "100%",
		padding: 20,
		paddingBottom: getBottomSpace() + 16,
	},
	inputLabel: {
		fontFamily: FONTS.BOLD,
	},
	input: {
		backgroundColor: "#FFFFFF",
		width: "100%",
		borderRadius: 10,
		padding: 10,
		borderColor: "#B73058",
		borderWidth: 2,
	},

	button: {
		alignItems: "center",
		width: "100%",
		padding: 20,
		borderRadius: 10
	},
	buttonText: {
		fontFamily: FONTS.BOLD,
		color: "#FFFFFF"
	}
});
