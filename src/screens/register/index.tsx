import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { RegisterHeader, MealList } from "../../components";
import { style } from "./style";


export function Register() {

	return(
		<ScrollView style={style.container}>
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
						keyboardAppearance="dark"
						maxLength={140}
						numberOfLines={5}
						style={[style.input, {textAlignVertical: "top"}]}
					/>
				</View>

				<TouchableOpacity
					style={style.button}
					activeOpacity={0.7}
				>
					<Text style={style.buttonText}>ENVIAR CORREIO</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}
