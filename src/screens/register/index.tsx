import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { useNavigate } from "react-router-dom";
import { RegisterHeader, MealList } from "../../components";
import { style } from "./style";


export function Register() {
	//const native = useNavigate();


	return(
		<View style={style.container}>
			<StatusBar style="dark" translucent backgroundColor="transparent" />
			<RegisterHeader />

			<View style={style.containerBody}>

				<MealList />

				<View style={style.inputGroup} >
					<Text style={style.inputLabel} >Email</Text>
					<TextInput
						placeholder="Digite o email dele ou dela"
						placeholderTextColor="#000000"
						style={style.input}
						keyboardAppearance="dark"
					/>
				</View>

				<View style={style.inputGroup} >
					<Text style={style.inputLabel} >Surpreenda</Text>
					<TextInput
						placeholder="solte o verbo para o seu/sua amado(a)"
						placeholderTextColor="#000000"
						multiline
						maxLength={140}
						style={style.input}
					/>
				</View>
			</View>
		</View>
	);
}
