import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Image } from "react-native";
import {style}from "./style";
import logo from "../../../assets/Logo.png";
import fastFood from "../../../assets/fast-food.png";
import champagne from "../../../assets/champagne.png";
import lollipop from "../../../assets/lollipop.png";
import cheese from "../../../assets/cheese.png";
import wine from "../../../assets/wine.png";


export function HomeHeader() {

	return (
		<View style={style.imageView}>

			<LinearGradient
				colors={["#FFFFFF", "#DCDCDC"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={style.viewGroupFirst}
			>
				<Image style={style.image} source={fastFood} />
			</LinearGradient>

			<LinearGradient
				colors={["#FFFFFF", "#DCDCDC"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={style.viewGroupSecond}
			>
				<Image style={{width: "33%", height: "100%", zIndex: 1}} source={champagne} />
				<Image style={{width: "80%", height: "80%", left: -10, zIndex: 0, position: "relative", top: -5}} source={lollipop} />
			</LinearGradient>

			<View
				style={style.viewGroupThree}>
				<Image style={style.image} source={logo}  />
			</View>


			<LinearGradient
				colors={["#FFFFFF", "#DCDCDC"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={style.viewGroupFour}>
				<Image style={{width: "65%", height: "45%", marginRight: 5}} source={cheese} />
				<Image style={{width: "25%", height: "90%"}} source={wine} />
			</LinearGradient>
		</View>
	);
}
