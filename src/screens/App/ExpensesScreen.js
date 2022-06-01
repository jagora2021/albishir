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
		name: "March, 2022",
		data: [
			{
				image: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
				name: "Habiba Salihu",
				amount: "319.99",
				time: "Mar 31, 11:31 AM",
			},
			{
				image: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
				name: "Muhammad AbdulKadir",
				amount: "231.00",
				time: "Mar 27, 10:12 AM",
			},
			{
				image: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
				name: "Zainab Yusuf",
				amount: "521.99",
				time: "Mar 26, 07:52 AM",
			},
			{
				image: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
				name: "James Victor",
				amount: "432.75",
				time: "Mar 11, 05:45 PM",
			},
		],
	},
	{
		name: "April, 2022",
		data: [
			{
				image: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
				name: "Jack Emmanuel",
				amount: "319.99",
				time: "Apr 29, 07:42 PM",
			},
			{
				image: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
				name: "Attahir Aliyu",
				amount: "319.99",
				time: "Apr 27, 03:12 AM",
			},
			{
				image: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
				name: "Asmau Lamido",
				amount: "319.99",
				time: "Apr 19, 11:24 AM",
			},
		],
	},
];

export default function ExpensesScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<SectionList
				contentContainerStyle={{ paddingBottom: 80 }}
				sections={DATA}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => (
					<View style={styles.historyCardContainer}>
						<HistoryCard
							image={item.image}
							title={item.name}
							amount={`-₦${item.amount}`}
							subTitle={item.time}
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
