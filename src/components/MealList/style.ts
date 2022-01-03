import { StyleSheet } from "react-native";
import { FONTS } from "../../themes/fonts";

export const style = StyleSheet.create({
	mealContainer: {
		width: "100%",
		marginTop: 50,
		alignItems: "center"
	},
	mealTitle: {
		fontFamily: FONTS.BOLD,
		fontSize: 20,
		padding: 20
	},
	mealList: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center"
	},

	viewGroup: {
		width: 70,
		height: 70,
		borderRadius: 10,
		alignItems: "center"
	},

	viewGroupSecond: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
	},
	image: {
		width: "80%",
		height: "80%"
	},
	focused: {
		borderColor: "#B73058",
		borderWidth: 3,
		borderRadius: 10
	}
});
