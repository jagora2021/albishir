import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { colors, fonts } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const frequentlyTransactedData = [
	{
		image: "https://randomuser.me/api/portraits/med/women/58.jpg",
		name: "Jack Emmanuel",
	},
	{
		image: "https://randomuser.me/api/portraits/med/men/57.jpg",
		name: "Attahir Aliyu",
	},
	{
		image: "https://randomuser.me/api/portraits/med/men/55.jpg",
		name: "Asmau Lamido",
	},
	{
		image: "https://randomuser.me/api/portraits/med/women/61.jpg",
		name: "Jack Emmanuel",
	},
	{
		image: "https://randomuser.me/api/portraits/med/men/62.jpg",
		name: "Attahir Aliyu",
	},
	{
		image: "https://randomuser.me/api/portraits/med/women/63.jpg",
		name: "Asmau Lamido",
	},
];

const FrequentlyContacted = () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Frequently transacted</Text>

			<FlatList
				data={frequentlyTransactedData}
				ItemSeparatorComponent={() => (
					<View style={styles.itemSeparatorComponent} />
				)}
				horizontal
				ListHeaderComponent={() => (
					<TouchableOpacity
						style={[
							styles.itemContainer,
							{
								justifyContent: "center",
								alignItems: "center",
								borderStyle: "dashed",
								borderColor: colors.darkGrey,
								marginRight: 15,
							},
						]}
					>
						<AntDesign name="plus" size={30} />
					</TouchableOpacity>
				)}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.itemContainer}>
						<Image
							source={{ uri: item.image }}
							style={styles.image}
							resizeMode="cover"
						/>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default FrequentlyContacted;

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 20,
	},
	title: {
		fontWeight: fonts.weight.semiBold,
		fontSize: fonts.size.ml,
		marginBottom: 10,
	},
	itemContainer: {
		height: 50,
		width: 50,
		borderRadius: 24,
		overflow: "hidden",
		backgroundColor: colors.grey,
		borderWidth: 1,
		borderColor: colors.grey,
	},
	itemSeparatorComponent: {
		width: 15,
	},
	image: {
		height: "100%",
		width: "100%",
	},
});
