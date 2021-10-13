import React from "react";
import {
	Dimensions,
	Keyboard,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import { AuthButton, CustomHeader } from "../../components";
import { colors, fonts } from "../../constants";

export default function SignupScreen({ navigation }) {
	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<CustomHeader />
					<View style={styles.form}>
						<Text style={styles.formTitle}>Register</Text>

						<TextInput style={styles.textInput} placeholder="First name" />
						<TextInput style={styles.textInput} placeholder="Last name" />
						<TextInput
							style={styles.textInput}
							placeholder="Email"
							keyboardType="email-address"
							autoCapitalize="none"
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Password"
							secureTextEntry
						/>
					</View>
					<View style={styles.bottom}>
						<AuthButton
							title="Continue"
							onPress={() => navigation.navigate("Identification")}
						/>
						<TouchableOpacity
							style={styles.bottomTextContainer}
							onPress={() => navigation.navigate("Login")}
						>
							<Text style={styles.bottomText}>
								Already have an account?{" "}
								<Text style={styles.bottomTextLink}>Log in</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	CustomHeaderContainer: {
		position: "absolute",
		top: 0,
		width: "100%",
	},
	form: {
		borderWidth: 1,
		borderColor: colors.grey,
		marginHorizontal: 20,
		paddingHorizontal: 20,
		paddingVertical: 30,
		marginTop: 30,
	},
	formTitle: {
		fontSize: fonts.size.xxl,
		textAlign: "center",
		marginBottom: 10,
	},
	textInput: {
		backgroundColor: colors.lightGreen,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 8,
		height: 52,
		fontSize: fonts.size.ml,
	},
	bottom: {
		marginTop: 60,
		alignItems: "center",
	},
	bottomTextContainer: {
		alignSelf: "center",
	},
	bottomText: {
		marginTop: 10,
		fontSize: fonts.size.m,
		fontWeight: fonts.weight.semiBold,
		color: colors.dark,
	},
	bottomTextLink: {
		color: colors.primary,
		fontWeight: fonts.weight.bold,
	},
});
