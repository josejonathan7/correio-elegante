import { StyleSheet } from "react-native";
import { FONTS } from "../../themes/fonts";

export const style = StyleSheet.create({
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
