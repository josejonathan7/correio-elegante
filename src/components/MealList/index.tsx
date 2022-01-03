import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import fastFood from "../../../assets/fast-food.png";
import champagne from "../../../assets/champagne.png";
import lollipop from "../../../assets/lollipop.png";
import cheese from "../../../assets/cheese.png";
import wine from "../../../assets/wine.png";
import frenchFries from "../../../assets/french-fries.png";
import {style} from "./style";

export function MealList() {

	return (
		<View style={style.mealContainer}>
			<Text style={style.mealTitle} >Escolha uma refeição abaixo</Text>
			<View style={style.mealList}>
				<TouchableOpacity
					style={{paddingRight: 20}}
				>
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={style.viewGroup}
					>
						<Image style={style.image} source={fastFood} />
					</LinearGradient>
				</TouchableOpacity>

				<TouchableOpacity
					style={{paddingRight: 20}}
				>
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, style.viewGroupSecond]}
					>
						<Image style={{width: "33%", height: "100%", zIndex: 1}} source={champagne} />
						<Image style={{width: "80%", height: "80%", left: -10, zIndex: 0, position: "relative", top: -5}} source={lollipop} />
					</LinearGradient>
				</TouchableOpacity>

				<TouchableOpacity
					style={{paddingRight: 20}}
				>
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, style.viewGroupSecond]}>
						<Image style={{width: "65%", height: "45%", marginRight: 5}} source={cheese} />
						<Image style={{width: "25%", height: "90%"}} source={wine} />
					</LinearGradient>
				</TouchableOpacity>

				<TouchableOpacity>
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, style.viewGroupSecond]}
					>
						<Image source={frenchFries} style={style.image} />
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
}
