import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigate } from "react-router-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { RegisterHeader, MealList } from "../../components";
import { style } from "./style";

interface Props {
	name?: string;
	email: string;
	message: string;
	meal: "hamburguer" | "champanhe" | "queijo" | "batata";
}

export function Register() {
	const navigate = useNavigate();
	const [ user, setUser ] = useState<Props>();
	const { register, handleSubmit, setValue } = useForm();
	const [ meal, setMeal ] = useState("");
	const [ name, setName ] = useState("");

	useEffect(() => {
		register("name");
		register("email");
		register("message");
		register("meal");
	}, [register]);

	useEffect(() => {
		setValue("meal", meal);
	}, [meal]);

	useEffect(() => {
		setValue("name", name);
	}, [name]);

	const sendData = async (data: Props) => {

		const schema = Yup.object().shape({
			name: Yup.string().uppercase().trim(),
			email: Yup.string().required("O email do destinatario é obrigatório!").email("Digite um email valido!"),
			message: Yup.string().trim().required("Digite a sua mensagem para o destinatário!"),
			meal: Yup.string().required("O presente é obrigatório!")
		});

		try {
			const validatedData = await schema.validate(data, {
				abortEarly: false
			}) as Props;

			setUser(validatedData);
			navigate("/success", {
				state: user
			});

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error instanceof Yup.ValidationError) {
				const errorMessages = {};

				error.inner.forEach(error => {
					const path = String(error.path);

					errorMessages[path] = error.message;
					alert(errorMessages[path] = error.message);
				});
			}else {
				alert(error.message);
			}
		}

	};

	return(
		<ScrollView style={style.container}>
			<StatusBar style="dark" translucent backgroundColor="#FFFFFF" />
			<RegisterHeader setName={setName} />

			<View style={style.containerBody}>

				<MealList setMeal={setMeal} />

				<View style={style.inputGroup} >
					<Text style={style.inputLabel} >Email</Text>
					<TextInput
						placeholder="Digite o email dele ou dela"
						placeholderTextColor="#E7DFDD"
						style={style.input}
						keyboardAppearance="dark"
						onChangeText={text => setValue("email", text)}
					/>
				</View>

				<View style={style.inputGroup} >
					<Text style={style.inputLabel} >Surpreenda</Text>
					<TextInput
						placeholder="solte o verbo para o seu/sua amado(a)"
						placeholderTextColor="#E7DFDD"
						multiline
						keyboardAppearance="dark"
						maxLength={140}
						numberOfLines={5}
						style={[style.input, {textAlignVertical: "top"}]}
						onChangeText={text => setValue("message", text)}
					/>
				</View>

				<TouchableOpacity
					style={{width: "80%", alignItems: "center"}}
					activeOpacity={0.7}
					onPress={handleSubmit(sendData)}
				>
					<LinearGradient
						colors={["#E06C88", "#B73058"]}
						start={{x: 0, y: 0}}
						end={{x: 1, y: 1}}
						style={style.button}
					>
						<Text style={style.buttonText}>ENVIAR CORREIO</Text>
					</LinearGradient>

				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}
