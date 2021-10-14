import React, { useState } from "react";
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
import { useAuthContext } from "../../contexts/AuthProvider";

export default function LoginScreen({ navigation }) {
	const { login } = useAuthContext();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = () => {
		setIsLoading(true);
		login(email, password);
		setIsLoading(false);
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<CustomHeader />
					<View style={styles.form}>
						<Text style={styles.formTitle}>Login</Text>

						<TextInput
							style={styles.textInput}
							placeholder="Email"
							keyboardType="email-address"
							autoCapitalize="none"
							value={email}
							onChangeText={setEmail}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Password"
							secureTextEntry
							value={password}
							onChangeText={setPassword}
						/>
					</View>
					<View style={styles.bottom}>
						<AuthButton
							title="Log in"
							isLoading={isLoading}
							onPress={handleSubmit}
						/>
						<TouchableOpacity
							style={styles.bottomTextContainer}
							onPress={() => navigation.navigate("Signup")}
						>
							<Text style={styles.bottomText}>
								Don’t have an account?{" "}
								<Text style={styles.bottomTextLink}>Create one</Text>
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
		paddingHorizontal: 20,
		marginHorizontal: 20,
		paddingVertical: Dimensions.get("window").height < 700 ? 40 : 60,
		marginTop: 40,
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
		marginTop: Dimensions.get("window").height < 700 ? 30 : 60,
		alignItems: "center",
		paddingBottom: 20,
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
