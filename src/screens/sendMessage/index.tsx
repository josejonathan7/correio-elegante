import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import { useLocation, useNavigate } from "react-router-native";
import { SendGift } from "../../components";

interface Props {
	name?: string;
	email: string;
	message: string;
	meal: "hamburguer" | "champanhe" | "queijo" | "batata";
}

export function SendMessage () {
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState<Props>();

	useEffect(() => {

		const userLocation = location.state as Props;

		setUser(userLocation);
	});

	return (
		<View style={style.container}>
			<StatusBar style="dark" translucent backgroundColor="#FFFFFF" />
			<View style={style.header}>

			</View>
			<View style={style.body}>
				<Ionicons name="return-down-back" size={50} style={{position: "absolute", left: 10}} onPress={() => navigate("/register")} />

				<View style={style.bodyHeader}>
					<AntDesign name="checkcircle" size={50} color="#00FF00" />
					<Text style={style.bodyHeaderText}>
						Seu correio foi enviado com sucesso
					</Text>
				</View>

				<LinearGradient
					style={style.bodyContainer}
					colors={["#E06C88", "#B73058"]}
					start={{x: 0, y: 0}}
					end={{x: 1, y: 1}}
				>

					<SendGift type={user?.meal ? user.meal : "error"} />

					<View style={style.textContainer}>
						<View style={{ left: -10}}>
							<Text style={style.text} >De: { user?.name ? user.name : "Administrador Secreto" }</Text>
						</View>

						<View style={{right: -80}}>
							<Text style={style.text} >Para: { user?.email ? user.email : "Você" }</Text>
						</View>

					</View>

					<SendGift type={user?.meal ? user.meal : "error"} />

				</LinearGradient>

			</View>

		</View>
	);
}
