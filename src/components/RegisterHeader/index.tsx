import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View, Text } from "react-native";
import { useNavigate } from "react-router-native";
import { style } from "./style";

interface Props {
	setName: (arg0: string) => void;
	getSubmit: () => void;
}

export function RegisterHeader({ setName, getSubmit }: Props) {
	const navigate = useNavigate();

	return (
		<View style={style.header}>
			<Ionicons name="return-down-back" size={50} style={{position: "absolute", left: 15}} onPress={() => navigate("/")} />

			<Text style={style.headerTitle}>Você gostaria de se identificar?</Text>
			<TextInput
				placeholder="Digite seu nome ou apelido"
				placeholderTextColor="#E7DFDD"
				style={style.inputHeader}
				onChangeText={text => setName(text)}
				returnKeyType="done"
				onSubmitEditing={() => {getSubmit();}}
			/>
		</View>
	);
}
