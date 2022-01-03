import { StyleSheet } from "react-native";
import { FONTS } from "../../themes/fonts";

export const style = StyleSheet.create({
	header: {
		backgroundColor: "#B73058",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		width: "100%",
		height: "35%",
		alignItems: "center",
		paddingBottom: 50,
		paddingTop: 50
	},
	headerTitle: {
		fontFamily: FONTS.BOLD,
		fontSize: 20,
		color: "#FFFFFF",
		padding: 20
	},
	inputHeader: {
		backgroundColor: "#FFFFFF",
		width: "80%",
		borderRadius: 10,
		padding: 10
	}
});
