import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FONTS } from "../../themes/fonts";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getStatusBarHeight() + 17,
		backgroundColor: "#FFFFFF",
		alignItems: "center"
	},
	header: {
		backgroundColor: "#B73058",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	mealList: {
		display: "flex",
		flexDirection: "row",
		overflow: "scroll"
	}
});
