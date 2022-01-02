import React from "react";
import { View, Image, Text, TouchableOpacity, Button } from "react-native";
import {style} from "./style";
import logo from "../../../assets/Logo.png";
import fastFood from "../../../assets/fast-food.png";
import champagne from "../../../assets/champagne.png";
import lollipop from "../../../assets/lollipop.png";
import cheese from "../../../assets/cheese.png";
import wine from "../../../assets/wine.png";

export function Home () {

	const test = () => {
		alert("ok");
	};

	return(
		<View style={style.container}>
			<View style={style.imageViewContainer}>
				<View style={style.imageView}>
					<View style={style.viewGroupFirst}>
						<Image style={style.image} source={fastFood} />
					</View>

					<View style={style.viewGroupSecond}>
						<Image style={{width: "30%", height: "100%", zIndex: 1}} source={champagne} />
						<Image style={{width: "80%", height: "80%", left: -10, zIndex: 0}} source={lollipop} />
					</View>

					<View style={style.viewGroupThree}>
						<Image style={style.image} source={logo}  />
					</View>


					<View style={style.viewGroupFour}>
						<Image style={{width: "55%", height: "45%", marginRight: 10}} source={cheese} />
						<Image style={{width: "25%", height: "90%"}} source={wine} />
					</View>
				</View>
			</View>
			<View>
				<View>
					<Text>Surpeenda seu amor</Text>
					<Text>Envie mensagens e presentes incríveis</Text>
					<TouchableOpacity>
						<Button
							title="init"
							onPress={test}
						>
							COMEÇAR
						</Button>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
