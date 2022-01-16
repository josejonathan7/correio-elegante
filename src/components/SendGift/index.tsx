import React from "react";
import { Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {style} from "./style";

import fastFood from "../../../assets/fast-food.png";
import champagne from "../../../assets/champagne.png";
import lollipop from "../../../assets/lollipop.png";
import cheese from "../../../assets/cheese.png";
import wine from "../../../assets/wine.png";
import frenchFries from "../../../assets/french-fries.png";

interface Props {
	type: "hamburguer" | "champanhe" | "queijo" | "batata" | "error";
}

export function SendGift ({type}: Props) {



	return (
		<>
			{
				type === "champanhe" ? (
					<LinearGradient
						colors={["#FFFFFF", "#DCDCDC"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[style.viewGroup, style.viewGroupSecond]}
					>
						<Image style={{width: "25%", height: "80%", zIndex: 1, left: 20}} source={champagne} />
						<Image style={{width: "60%", height: "60%", left: 5, zIndex: 0, position: "relative", top: -5}} source={lollipop} />
					</LinearGradient>
				) :
					type === "hamburguer" ? (
						<LinearGradient
							colors={["#FFFFFF", "#DCDCDC"]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							style={style.viewGroup}
						>
							<Image style={style.image} source={fastFood} />
						</LinearGradient>
					) :
						type === "queijo" ? (
							<LinearGradient
								colors={["#FFFFFF", "#DCDCDC"]}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 1 }}
								style={[style.viewGroup, style.viewGroupSecond]}
							>
								<Image style={{width: "50%", height: "35%", marginRight: 5}} source={cheese} />
								<Image style={{width: "20%", height: "70%"}} source={wine} />
							</LinearGradient>
						) :
							type === "batata" ? (
								<LinearGradient
									colors={["#FFFFFF", "#DCDCDC"]}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 1 }}
									style={[style.viewGroup, {padding: 5, justifyContent: "center"}]}
								>
									<Image source={frenchFries} style={style.image} />
								</LinearGradient>
							) : (
								<Text>Error</Text>
							)
			}
		</>
	);
}
