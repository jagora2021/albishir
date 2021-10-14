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
		data: ["Pizza", "Burger", "Risotto", "Picanto"],
	},
	{
		name: "September, 2020",
		data: ["French Fries", "Onion Rings", "Fried Shrimps"],
	},
];

export default function ExpensesScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<SectionList
				contentContainerStyle={{ paddingBottom: 80 }}
				sections={DATA}
				keyExtractor={(item, index) => item + index}
				renderItem={() => (
					<View style={styles.historyCardContainer}>
						<HistoryCard
							title="Habiba Salihu"
							amount="-₦12.50"
							subTitle="Oct 19, 05:45 AM"
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
