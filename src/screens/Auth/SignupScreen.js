import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
	Keyboard,
	ScrollView,
	StyleSheet,
	Text,
	Pressable,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppTextInput, AuthButton } from "../../components";
import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
	const navigation = useNavigation();

	const { setSignupDetails, signupDetails } = useAuthContext();

	const [isTermsAndConditionAgreed, setIsTermsAndConditionAgreed] =
		useState(false);

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().min(2).max(255).required().label("First name"),
		lastName: Yup.string().min(2).max(255).required().label("Last name"),
		email: Yup.string().min(3).max(255).email().required().label("Email"),
		password: Yup.string().min(6).max(255).required().label("Password"),
	});

	const handleSubmit = ({ firstName, lastName, email, password }) => {
		setSignupDetails({
			...signupDetails,
			firstName,
			lastName,
			email,
			password,
		});
		navigation.navigate("Identification");
	};

	return (
		<ScrollView>
			<KeyboardAvoidingView behavior="padding">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<View style={styles.header}>
							<Text style={styles.title}>Create account!👋</Text>
							<Text style={styles.subtitle}>
								Fill in your details to register a free account!
							</Text>
						</View>

						<Formik
							initialValues={{
								firstName: "",
								lastName: "",
								email: "",
								password: "",
							}}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							{({ handleChange, errors, handleSubmit, values }) => (
								<>
									<View style={styles.form}>
										<View style={styles.inputContainer}>
											<AppTextInput
												label="First name"
												placeholder="E.g, John"
												value={values.firstName}
												onChangeText={handleChange("firstName")}
												error={errors.firstName}
											/>
										</View>

										<View style={styles.inputContainer}>
											<AppTextInput
												label="Last name"
												placeholder="E.g, Doe"
												value={values.lastName}
												onChangeText={handleChange("lastName")}
												error={errors.lastName}
											/>
										</View>

										<View style={styles.inputContainer}>
											<AppTextInput
												label="Email address"
												placeholder="Email Address"
												keyboardType="email-address"
												autoCapitalize="none"
												value={values.email}
												onChangeText={handleChange("email")}
												error={errors.email}
											/>
										</View>

										<View style={styles.inputContainer}>
											<AppTextInput
												label="Password"
												placeholder="Enter your password"
												secureTextEntry
												icon="eye-off"
												value={values.password}
												onChangeText={handleChange("password")}
												error={errors.password}
											/>
										</View>

										<Pressable
											style={styles.termsAndConditionContainer}
											onPress={() =>
												setIsTermsAndConditionAgreed((prev) => !prev)
											}
										>
											<Ionicons
												name={
													isTermsAndConditionAgreed
														? "checkbox"
														: "checkbox-outline"
												}
												size={24}
												color={colors.green}
											/>
											<Text style={styles.termsAndConditionText}>
												I agree to the terms and conditions
											</Text>
										</Pressable>
									</View>

									<View style={styles.bottom}>
										<AuthButton title="Continue" full onPress={handleSubmit} />
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
								</>
							)}
						</Formik>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	header: {},
	title: {
		fontSize: 30,
		fontWeight: fonts.weight.semiBold,
	},
	subtitle: {
		fontSize: 16,
		fontWeight: fonts.weight.semiBold,
		color: colors.dark,
		opacity: 0.5,
	},
	form: {
		marginVertical: 50,
	},
	inputContainer: {
		marginBottom: 24,
	},
	termsAndConditionContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	termsAndConditionText: {
		marginLeft: 4,
	},
	bottom: {
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
		color: colors.green,
		fontWeight: fonts.weight.bold,
	},
});
