import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { style } from "./style";
import { LinearGradient } from "expo-linear-gradient";
import champagne from "../../../assets/champagne.png";
import lollipop from "../../../assets/lollipop.png";
import { useNavigate } from "react-router-native";

export function SendMessage (props) {
	console.log(props);

	const navigate = useNavigate();

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
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, style.viewGroupSecond]}
					>
						<Image style={{width: "25%", height: "80%", zIndex: 1, left: 20}} source={champagne} />
						<Image style={{width: "60%", height: "60%", left: 5, zIndex: 0, position: "relative", top: -5}} source={lollipop} />
					</LinearGradient>

					<View style={style.textContainer}>
						<View style={{ left: -80}}>
							<Text style={style.text} >De: Administrador Secreto</Text>
						</View>

						<View >
							<Text style={style.text} >Para: Você</Text>
						</View>

					</View>

					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, style.viewGroupSecond]}
					>
						<Image style={{width: "25%", height: "80%", zIndex: 1, left: 20}} source={champagne} />
						<Image style={{width: "60%", height: "60%", left: 5, zIndex: 0, position: "relative", top: -5}} source={lollipop} />
					</LinearGradient>


				</LinearGradient>

			</View>

		</View>
	);
}
