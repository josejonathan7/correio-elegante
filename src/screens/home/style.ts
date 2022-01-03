import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FONTS } from "../../themes/fonts";

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
	},
	textView: {
		marginTop: 100,
		alignItems: "center",
	},
	title: {
		fontFamily: FONTS.BOLD,
		fontSize: 28,
		padding: 20
	},
	description: {
		fontFamily: FONTS.REGULAR,
		color: "#9CABC2",
		padding: 10
	},
	button: {
		alignItems: "center",
		width: "50%",
		backgroundColor: "#E06C88",
		padding: 20,
		borderRadius: 10
	},
	buttonText: {
		fontFamily: FONTS.BOLD,
		color: "#FFFFFF"
	}
});
