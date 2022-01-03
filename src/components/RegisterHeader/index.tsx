import React from "react";
import { TextInput, View, Text } from "react-native";
import { style } from "./style";


export function RegisterHeader() {

	return (
		<View style={style.header}>
			<Text style={style.headerTitle}>Você gostaria de se identificar?</Text>
			<TextInput
				placeholder="Digite seu nome ou apelido"
				placeholderTextColor="#2F394B"
				style={style.inputHeader}
			/>
		</View>
	);
}
