import React from "react";
import { View } from "react-native";
import { HomeHeader, HomeContent } from "../../components";
import {style} from "./style";
import { StatusBar } from "expo-status-bar";

export function Home () {

	return(
		<View style={style.container}>
			<StatusBar style="dark" translucent backgroundColor="transparent" />
			<View style={style.imageViewContainer}>
				<HomeHeader />
			</View>
			<View style={style.textContainer}>
				<HomeContent />
			</View>
		</View>
	);
}
