import React from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
} from "react-native";

import { ContactCard, CustomHeader, Screen } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, fonts } from "../../constants";
export default function TransferScreen({ navigation }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ScrollView>
				<Screen paddingT>
					{/* <CustomHeader /> */}
					<TouchableOpacity
						style={styles.QrCode}
						onPress={() => navigation.navigate("QR Camera")}
					>
						<View style={styles.cameraContainer}>
							<MaterialCommunityIcons
								name={"qrcode-scan"}
								size={40}
								color={colors.white}
							/>
						</View>
						<Text style={styles.QrText}>Scan QR</Text>
					</TouchableOpacity>
					<Text style={styles.sendTo}>Send To</Text>

					<View style={styles.search}>
						<TextInput
							style={styles.textInput}
							placeholder="Type to search contact"
							clearButtonMode="while-editing"
						/>
						<TouchableOpacity>
							<MaterialCommunityIcons name="magnify" size={24} />
						</TouchableOpacity>
					</View>
					<ContactCard
						title={"Yusuf Muhammad Dimari"}
						subtitle={"08132480901"}
						onPress={() =>
							navigation.navigate("transfer amount", {
								title: "Yusuf Muhammad Dimari",
							})
						}
					/>
					<ContactCard
						title={"Nafisa Umar"}
						subtitle={"07033416062"}
						onPress={() =>
							navigation.navigate("transfer amount", { title: "Nafisa Umar" })
						}
					/>
					<ContactCard
						title={"Yahya Mana Abubakar"}
						subtitle={"09033889352"}
						onPress={() =>
							navigation.navigate("transfer amount", {
								title: "Yahya Mana Abubakar",
							})
						}
					/>
				</Screen>
			</ScrollView>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	search: {
		alignItems: "center",
		backgroundColor: colors.lightGrey,
		borderWidth: 1,
		borderColor: colors.lightGreyPlus,
		borderRadius: 8,
		flexDirection: "row",
		height: 48,
		justifyContent: "space-between",
		marginVertical: 10,
		padding: 15,
		width: "100%",
	},
	textInput: {
		width: 259,
	},
	QrCode: {
		width: "100%",
		borderRadius: 8,
		height: 90,
		backgroundColor: colors.secondary,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		flexDirection: "row",
		marginBottom: 30,
	},
	cameraContainer: {
		width: 56,
		height: 56,
		justifyContent: "center",
		alignItems: "center",
	},
	QrText: {
		fontSize: fonts.size.xxl,
		fontWeight: fonts.weight.medium,
		marginLeft: 10,
		color: colors.white,
	},
	sendTo: {
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.semiBold,
		marginVertical: 10,
	},
});
