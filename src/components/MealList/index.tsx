import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import fastFood from "../../../assets/fast-food.png";
import champagne from "../../../assets/champagne.png";
import lollipop from "../../../assets/lollipop.png";
import cheese from "../../../assets/cheese.png";
import wine from "../../../assets/wine.png";
import frenchFries from "../../../assets/french-fries.png";
import {style} from "./style";

interface Props {
	setMeal: (arg0: string) => void
}

export function MealList({setMeal}: Props) {
	const [focusedOne, setFocusedOne] = useState(false);
	const [focusedTwo, setFocusedTwo] = useState(false);
	const [focusedThree, setFocusedThree] = useState(false);
	const [focusedFour, setFocusedFour] = useState(false);

	const focusedOneFunction = () => {
		setFocusedOne(true);
		setFocusedTwo(false);
		setFocusedThree(false);
		setFocusedFour(false);
		setMeal("hamburguer");
	};

	const focusedTwoFunction = () => {
		setFocusedOne(false);
		setFocusedTwo(true);
		setFocusedThree(false);
		setFocusedFour(false);
		setMeal("champanhe");
	};

	const focusedThreeFunction = () => {
		setFocusedOne(false);
		setFocusedTwo(false);
		setFocusedThree(true);
		setFocusedFour(false);
		setMeal("queijo");
	};

	const focusedFourFunction = () => {
		setFocusedOne(false);
		setFocusedTwo(false);
		setFocusedThree(false);
		setFocusedFour(true);
		setMeal("batata");
	};

	return (
		<View style={style.mealContainer}>
			<Text style={style.mealTitle} >Escolha uma refeição abaixo</Text>
			<View style={style.mealList}>
				<TouchableOpacity
					style={[focusedOne ? style.focused : {}, {marginRight: 20}]}
					onPress={() => focusedOneFunction()}
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
					style={[focusedTwo ? style.focused : {}, {marginRight: 20}]}
					onPress={() => focusedTwoFunction()}
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
					style={[focusedThree ? style.focused : {}, {marginRight: 20}]}
					onPress={() => focusedThreeFunction()}
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

				<TouchableOpacity
					style={focusedFour ? style.focused : {}}
					onPress={() => focusedFourFunction()}
				>
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, {padding: 5, justifyContent: "center"}]}
					>
						<Image source={frenchFries} style={style.image} />
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
}
