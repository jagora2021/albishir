import React from "react";
import { View } from "react-native";

function ContactCard(props) {
	return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: "red",
		borderRadius: 10,
		justifyContent: "center",
		alignSelf: "center",
	},
});

export default ContactCard;
