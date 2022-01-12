import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FONTS } from "../../themes/fonts";


export const style = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getStatusBarHeight() + 17,
		backgroundColor: "#FFFFFF"
	},
	header: {
		backgroundColor: "#B73058",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		width: "100%",
		height: "8%"
	},
	body: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		top: -45,
		alignItems: "center"
	},
	bodyHeader: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		paddingTop: 50
	},
	bodyHeaderText: {
		fontSize: 20,
		fontFamily: FONTS.BOLD,
		textAlign: "center",
		marginTop: 10
	},
	bodyContainer: {
		borderRadius: 50,
		width: "80%",
		height: "70%",
		alignItems: "center",
		padding: 20
	},

	textContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	text: {
		transform: [{rotate: "270deg"}],
		color: "#E7DFDD",
		fontWeight: "bold",
		fontSize: 18
	},

	viewGroupSecond: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
	},
	viewGroup: {
		width: 100,
		height: 100,
		borderRadius: 50,
		alignItems: "center"
	},
});
