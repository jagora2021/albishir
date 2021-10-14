import React, { useState } from "react";
import {
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

export default function LinkBankScreen({ navigation }) {
	const { setSignupDetails, signupDetails, signup } = useAuthContext();
	const [isLoading, setIsLoading] = useState(false);
	const [accountNumber, setAccountNumber] = useState("");
	const [bankName, setBankName] = useState("");
	const [bvn, setBvn] = useState("");

	const handleSubmit = () => {
		setSignupDetails({
			...signupDetails,
			accountNumber,
			bankName,
			bvn,
		});
	};

	const handleSignUp = () => {
		setIsLoading(true);

		fetch("https://fsi.ng/api/woven/vnubans/create_customer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"api-secret": "vb_ls_bfac75fe54a952841971b6918d06aeb2659523dc92d6",
				"sandbox-key": "8wnheaSRHdj1gmkvCdN3uWvnf4rd6ni11634149218",
			},
			body: JSON.stringify({
				customer_reference: signupDetails.email,
				name: signupDetails.firstName + " " + signupDetails.lastName,
				email: signupDetails.email,
				mobile_number: signupDetails.phoneNumber,
				expires_on: "2022-11-01",
				use_frequency: "10",
				min_amount: 100,
				max_amount: 2400000,
				callback_url: "https://requesturl.com",
				destination_nuban: "",
				meta_data: {
					somedatakey: "somedatavalue",
				},
			}),
		})
			.then(res => res.json())
			.then(data => {
				signup(
					signupDetails.email,
					signupDetails.password,
					signupDetails.nin,
					signupDetails.phoneNumber,
					signupDetails.firstName,
					signupDetails.lastName,
					data
				);
			})
			.catch(error => {
				setIsLoading(false);
				console.log(error.message);
			});
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<CustomHeader />
					<View style={styles.form}>
						<Text style={styles.formTitle}>Link Bank Account</Text>

						<TextInput
							style={styles.textInput}
							placeholder="Account number"
							keyboardType="number-pad"
							value={accountNumber}
							onChangeText={setAccountNumber}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Bank Name"
							value={bankName}
							onChangeText={setBankName}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="BVN"
							keyboardType="number-pad"
							value={bvn}
							onChangeText={setBvn}
						/>
					</View>
					<View style={styles.bottom}>
						<AuthButton
							title="Sign up"
							isLoading={isLoading}
							onPress={() => {
								handleSubmit();
								handleSignUp();
							}}
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
