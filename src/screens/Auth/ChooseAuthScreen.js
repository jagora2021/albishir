import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthButton } from "../../components";
import { colors, fonts } from "../../constants";

export default function ChooseAuthScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Image source={require("../../../assets/images/albishir-splash.png")} />
			<View style={styles.bottom}>
				<AuthButton
					title="Log in"
					onPress={() => navigation.navigate("Login")}
				/>
				<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
					<Text style={styles.bottomText}>
						Don’t have an account?{" "}
						<Text style={styles.bottomTextLink}>Create one</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.lightGrey,
	},
	bottom: {
		alignItems: "center",
		width: "100%",
		position: "absolute",
		bottom: 50,
	},
	bottomText: {
		marginTop: 10,
		fontSize: fonts.size.m,
		fontWeight: fonts.weight.semiBold,
		color: colors.dark,
	},
	bottomTextLink: {
		color: colors.green,
		fontWeight: fonts.weight.bold,
	},
});
