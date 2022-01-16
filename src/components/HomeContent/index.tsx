import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigate } from "react-router-native";
import {style} from "./style";

export function HomeContent () {
	const navigate = useNavigate();

	return (
		<View style={style.textView}>
			<Text style={style.title}>Surpreenda seu amor</Text>
			<Text style={style.description}>Envie mensagens e presentes incríveis</Text>
			<TouchableOpacity
				style={style.button}
				activeOpacity={0.7}
				onPress={() => navigate("/register")}
			>

				<Text style={style.buttonText}>COMEÇAR</Text>

			</TouchableOpacity>
		</View>
	);
}
