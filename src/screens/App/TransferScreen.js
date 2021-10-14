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

import { ContactCard, CustomHeader } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, fonts } from "../../constants";
export default function TransferScreen({ navigation }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ScrollView>
				<View style={styles.container}>
					<CustomHeader />
					<TouchableOpacity style={styles.QrCode}>
						<View style={styles.cameraContainer}>
							<MaterialCommunityIcons name={"qrcode-scan"} size={40} />
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
						onPress={() => navigation.navigate("transfer amount")}
					/>
					<ContactCard
						title={"Yusuf Muhammad Dimari"}
						subtitle={"08132480901"}
					/>
					<ContactCard
						title={"Yusuf Muhammad Dimari"}
						subtitle={"08132480901"}
					/>
					<ContactCard
						title={"Yusuf Muhammad Dimari"}
						subtitle={"08132480901"}
					/>
				</View>
			</ScrollView>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingBottom: 80,
	},
	search: {
		alignItems: "center",
		backgroundColor: colors.lightGreyPlus,
		borderRadius: 8,
		flexDirection: "row",
		height: 48,
		justifyContent: "space-between",
		marginVertical: 10,
		padding: 15,
		paddingLeft: 30,
		width: "100%",
	},
	textInput: {
		width: 259,
	},
	QrCode: {
		width: "100%",
		borderRadius: 8,
		height: 90,
		backgroundColor: colors.primary,
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
	},
	sendTo: {
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.semiBold,
		marginVertical: 10,
	},
});
