import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigate } from "react-router-dom";
import { style } from "./style";


export function Register() {
	const native = useNavigate();


	return(
		<View style={style.container}>
			<View style={style.header}>
				<Text>Você gostaria de se identificar?</Text>
				<TextInput placeholder="Digite seu nome ou apelido" />
			</View>

			<View >
				<Text>Escolha uma refeição abaixo</Text>
				<View style={style.mealList}>
					<TouchableOpacity>
						<Text>Escolha uma refeição abaixo</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>Escolha uma refeição abaixo</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>Escolha uma refeição abaixo</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>Escolha uma refeição abaixo</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View>
				<Text>EMAIL</Text>
				<TextInput placeholder="Digite o email dele ou dela" />
			</View>

			<View>
				<Text>SURPREENDA</Text>
				<TextInput placeholder="solte o verbo para o seu/sua amado(a)" />
			</View>
		</View>
	);
}
