import React from "react";
import QRCode from "react-native-qrcode-svg";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
	Dimensions,
	Image,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { Screen } from "../../components";
import { colors, fonts } from "../../constants";
import { useAuthContext } from "../../contexts/AuthProvider";
import brImg from "../../../assets/images/bg_qr.jpg";
import profilePic from "../../../assets/images/profile-pic-lg.png";

export default function QRDisplayScreen() {
	const { currentUser } = useAuthContext();
	const isProfilePicAvailable = true;

	return (
		<Screen>
			<View style={styles.profileSection}>
				{isProfilePicAvailable ? (
					<Image style={styles.profileImage} source={profilePic} />
				) : (
					<View style={[styles.profileImage, styles.avatarBg]}>
						<Ionicons name="person" size={24} color={colors.darkGrey} />
					</View>
				)}
				<Text style={styles.name}>{currentUser.displayName}</Text>

				<TouchableOpacity
					style={styles.printButton}
					onPress={() => console.log("Printing...")}
				>
					<AntDesign
						style={styles.printIcon}
						name="printer"
						size={26}
						color={colors.black}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.backgroundWrapper}>
				<ImageBackground
					blurRadius={5}
					style={styles.background}
					source={brImg}
					resizeMode="cover"
				>
					<View style={styles.qrCodeSection}>
						<QRCode
							value={currentUser.displayName}
							color="black"
							backgroundColor="white"
							// enableLinearGradient
							// linearGradient={[colors.primary, colors.green]}
							size={
								Dimensions.get("window").height < 700
									? Dimensions.get("window").width * 0.5
									: Dimensions.get("window").width * 0.55
							}
						/>
					</View>
				</ImageBackground>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	profileSection: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: colors.grey,
	},
	avatarBg: {
		justifyContent: "center",
		alignItems: "center",
	},
	name: {
		marginLeft: 8,
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.bold,
	},
	backgroundWrapper: {
		marginLeft: "auto",
		marginRight: "auto",
		width: Dimensions.get("window").height < 700 ? "95%" : "100%",
		flex: Dimensions.get("window").height < 700 ? 0.9 : 0.95,
	},
	background: {
		flex: 1,
		backgroundColor: colors.grey,
		overflow: "hidden",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 16,
	},
	qrCodeSection: {
		borderColor: colors.black,
		borderWidth: 5,
		borderRadius: 8,
		padding: 20,
		backgroundColor: colors.white,
	},
	qrCode: {
		width: Dimensions.get("window").height < 700 ? 200 : 250,
		height: Dimensions.get("window").height < 700 ? 200 : 250,
	},
	printButton: {
		borderColor: colors.dark,
		padding: 8,
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: "auto",
	},
	printText: {
		fontWeight: fonts.weight.bold,
	},
	printIcon: {
		marginLeft: 5,
	},
});
