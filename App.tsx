import React from "react";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Home, Register, SendMessage } from "./src/screens";


export default function App() {
	const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

	if(!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NativeRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/register" element={<Register/>} />
				<Route path="/success" element={<SendMessage />}  />
			</Routes>
		</NativeRouter>
	);
}
