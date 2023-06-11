import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Details = (props) => {
	return (
		<View>
			<View style={styles.contentContainer}>
				<Image style={styles.icon} source={require("./assets/images.png")} />
				<Text style={styles.contact}>{props.name}</Text>
			</View>
			<View>
				<Text style={styles.number}>{props.num}</Text>
			</View>
		</View>
	);
};
export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>CONTACTS</Text>
			<Details name={"Ashwin"} num={"8856417354"} />
			<Details name={"Bharat"} num={"9712412309"} />
			<Details name={"Robin"} num={"7210877325"} />
			<Details name={"Jeet"} num={"9541984732"} />
			<Details name={"Harsh"} num={"8781236896"} />
			<Details name={"Yuvraj"} num={"9904789633"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#A8CBC8",
		padding: 10,
	},
	heading: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 25,
		margin: 25,
		textAlign: "center",
		backgroundColor: "#4CADCB",
		borderRadius: 10,
	},
	contentContainer: {
		//justifyContent:"space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	contact: {
		fontSize: 21,
		marginLeft: 150, // Add some margin between the image and text
	},
	number: {
		fontSize: 25,
		marginLeft: 210,
		justifyContent: "space-between",
	},
	icon: {
		width: 70,
		height: 56,
	},
});
