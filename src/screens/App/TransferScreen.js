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

import { ContactCard, Screen } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, fonts } from "../../constants";

const DATA = [
	{
		name: "Yusuf Muhammad Dimari",
		phoneNumber: "08123456789",
		image: "https://randomuser.me/api/portraits/med/men/4.jpg",
	},
	{
		name: "Nafisa Umar",
		phoneNumber: "07033416062",
		image: "https://randomuser.me/api/portraits/med/women/32.jpg",
	},
	{
		name: "Yahya Mana Abubakar",
		phoneNumber: "09033889352",
		image: "https://randomuser.me/api/portraits/med/men/10.jpg",
	},
];

export default function TransferScreen({ navigation }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ScrollView>
				<Screen paddingT>
					<TouchableOpacity
						style={styles.qrCode}
						onPress={() => navigation.navigate("QR Camera")}
					>
						<View style={styles.cameraContainer}>
							<MaterialCommunityIcons
								name={"qrcode-scan"}
								size={40}
								color={colors.white}
							/>
						</View>
						<Text style={styles.qrText}>Scan QR</Text>
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

					{DATA.map((item, index) => (
						<ContactCard
							key={index}
							title={item.name}
							subtitle={item.phoneNumber}
							image={item.image}
							onPress={() =>
								navigation.navigate("transfer amount", {
									title: item.phoneNumber,
								})
							}
						/>
					))}
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
	qrCode: {
		width: "100%",
		borderRadius: 16,
		height: 90,
		backgroundColor: colors.secondary,
		alignItems: "center",
		justifyContent: "center",
		padding: 15,
		flexDirection: "row",
		marginBottom: 30,
	},
	cameraContainer: {
		width: 70,
		height: 70,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	qrText: {
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
