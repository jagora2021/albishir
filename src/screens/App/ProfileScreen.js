import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";

import { CustomHeader } from "../../components";
import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function ProfileScreen() {
	const { currentUser, logout } = useAuthContext();

	return (
		<View style={styles.container}>
			<CustomHeader />

			<View style={styles.profileSection}>
				<View style={styles.avatarBg}>
					{/* <Image
					style={styles.profileImage}
					source={require("../../../assets/images/profile-pic-lg.png")}
				/> */}
					<Ionicons
						onPress={logout}
						name="person"
						size={70}
						color={colors.darkGrey}
					/>
				</View>
				<Text style={styles.name}>{currentUser.displayName}</Text>
			</View>

			<View style={styles.bottom}>
				<View style={styles.qrCodeSection}>
					{/* <Image
						style={styles.qrCode}
						source={require("../../../assets/images/QRCode.png")}
					/> */}
					<QRCode
						value={currentUser.displayName}
						color="black"
						backgroundColor="white"
						enableLinearGradient
						size={Dimensions.get("window").height < 700 ? 200 : 220}
					/>
				</View>

				<TouchableOpacity style={styles.printButton}>
					<Text>Print QR</Text>
					<AntDesign
						style={styles.printIcon}
						name="printer"
						size={24}
						color={colors.dark}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	profileSection: {
		alignItems: "center",
		marginVertical: 15,
		flex: 0.3,
	},
	profileImage: {
		width: Dimensions.get("window").height < 700 ? 120 : 150,
		height: Dimensions.get("window").height < 700 ? 120 : 150,
		borderRadius: 75,
		backgroundColor: colors.grey,
	},
	name: {
		textAlign: "center",
		fontSize: fonts.size.xl,
		fontWeight: fonts.weight.bold,
		marginTop: 10,
	},
	bottom: {
		flex: 0.7,
		alignItems: "center",
	},
	qrCodeSection: {},
	qrCode: {
		width: Dimensions.get("window").height < 700 ? 200 : 250,
		height: Dimensions.get("window").height < 700 ? 200 : 250,
	},
	printButton: {
		width: "70%",
		borderColor: colors.dark,
		borderWidth: 1,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 16,
		marginTop: 30,
	},
	printIcon: {
		position: "absolute",
		right: 30,
	},
	avatarBg: {
		width: Dimensions.get("window").height < 700 ? 120 : 150,
		height: Dimensions.get("window").height < 700 ? 120 : 150,
		borderRadius: 75,
		backgroundColor: colors.grey,
		justifyContent: "center",
		alignItems: "center",
	},
});
