import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Keyboard,
	TouchableWithoutFeedback,
	Platform,
	Modal,
} from "react-native";
import LottieView from "lottie-react-native";

import { CustomHeader } from "../../components";
import { colors, fonts } from "../../constants";

function TransferAmountScreen({ navigation, route }) {
	const [modalVisible, setModalVisible] = useState(false);
	const [amount, setAmount] = useState("0.00");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<Modal visible={modalVisible}>
					<View style={styles.modalBg}>
						<LottieView
							style={{ width: 150 }}
							source={require("../../../assets/animations/check-mark.json")}
							autoPlay
							loop={false}
							onAnimationFinish={() =>
								navigation.replace("receipt", { amount })
							}
						/>
					</View>
				</Modal>

				<CustomHeader />
				<View style={styles.amountContainer}>
					<View
						style={{
							flex: 1,
							paddingTop: 10,
							alignItems: "center",
							width: "100%",
						}}
					>
						<Text style={styles.receiver}>
							{route.params.title ? route.params.title : null}
						</Text>
						<Text style={styles.subtitle}>Enter the amount to send</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.amount}>₦</Text>
							<TextInput
								style={styles.amount}
								value={amount}
								onChangeText={text => setAmount(text)}
								onFocus={() => setAmount("")}
								keyboardType="number-pad"
								onBlur={() =>
									amount == "" ? setAmount("0.00") : setAmount(amount + ".00")
								}
							/>
						</View>
					</View>
					<View style={styles.amountRecommendation}>
						<TouchableOpacity
							style={styles.recAmountContainer}
							onPress={() => setAmount("100.00")}
						>
							<Text style={styles.recAmount}>₦100.00</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.recAmountContainer}
							onPress={() => setAmount("500.00")}
						>
							<Text style={styles.recAmount}>₦500.00</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.recAmountContainer}
							onPress={() => setAmount("1000.00")}
						>
							<Text style={styles.recAmount}>₦1000.00</Text>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => setModalVisible(true)}
				>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	amountContainer: {
		height: 200,
		width: "100%",
		backgroundColor: colors.lightGreen,
		alignItems: "center",
		padding: 15,
		marginBottom: 20,
	},
	amountRecommendation: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	amount: {
		fontSize: fonts.size.xxl,
		fontWeight: fonts.weight.bold,
	},
	recAmount: {
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
		fontSize: fonts.size.m,
	},
	recAmountContainer: {
		backgroundColor: colors.primary,
		width: 90,
		height: 37,
		marginHorizontal: 5,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	subtitle: {
		fontSize: fonts.size.m,
		marginBottom: 10,
	},
	button: {
		width: "80%",
		height: 50,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	buttonText: {
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
		fontSize: fonts.size.ml,
	},
	modalBg: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	receiver: {
		fontSize: fonts.size.xl,
		fontWeight: fonts.weight.bold,
		marginBottom: 10,
	},
});

export default TransferAmountScreen;
