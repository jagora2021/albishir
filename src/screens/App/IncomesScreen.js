import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	SectionList,
} from "react-native";
import { HistoryCard } from "../../components";
import { fonts } from "../../constants";

const DATA = [
	{
		name: "October, 2020",
		data: [
			{
				name: "Dahiru Lawal",
				amount: "319.99",
				image: "https://randomuser.me/api/portraits/med/men/1.jpg",
			},
			{
				name: "Innocent Chinedu",
				amount: "231.00",
				image: "https://randomuser.me/api/portraits/med/men/2.jpg",
			},
			{
				name: "Zainab Yusuf",
				amount: "521.99",
				image: "https://randomuser.me/api/portraits/med/women/1.jpg",
			},
			{
				name: "James Victor",
				amount: "432.75",
				image: "https://randomuser.me/api/portraits/med/men/3.jpg",
			},
			{
				name: "Maryam Abubakar",
				amount: "527.99",
				image: "https://randomuser.me/api/portraits/med/women/2.jpg",
			},
			{
				name: "Asmau Lamido",
				amount: "752.67",
				image: "https://randomuser.me/api/portraits/med/women/3.jpg",
			},
		],
	},
	{
		name: "September, 2020",
		data: [
			{
				name: "Jack Emmanuel",
				amount: "432.99",
				image: "https://randomuser.me/api/portraits/med/men/4.jpg",
			},
			{
				name: "Attahir Aliyu",
				amount: "782.23",
				image: "https://randomuser.me/api/portraits/med/men/5.jpg",
			},
			{
				name: "Asmau Lamido",
				amount: "942.00",
				image: "https://randomuser.me/api/portraits/med/women/4.jpg",
			},
			{
				name: "Maryam Abubakar",
				amount: "526.54",
				image: "https://randomuser.me/api/portraits/med/women/5.jpg",
			},
			{
				name: "Salim Ibrahim",
				amount: "712.99",
				image: "https://randomuser.me/api/portraits/med/men/6.jpg",
			},
		],
	},
];

export default function IncomesScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<SectionList
				contentContainerStyle={{ paddingBottom: 80 }}
				sections={DATA}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => (
					<View style={styles.historyCardContainer}>
						<HistoryCard
							variant="income"
							title={item.name}
							amount={`+₦${item.amount}`}
							subTitle="Oct 19, 05:45 AM"
							image={item.image}
						/>
					</View>
				)}
				renderSectionHeader={({ section: { name } }) => (
					<Text style={styles.header}>{name}</Text>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
	},
	header: {
		fontSize: fonts.size.l,
		fontWeight: fonts.weight.bold,
		paddingHorizontal: 20,
		paddingVertical: 5,
	},
	historyCardContainer: {
		paddingHorizontal: 20,
	},
});
