import React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

import {
  BalanceCard,
  FrequentTransactions,
  RecentTransactions,
  Screen,
  SelectPaymentOptions,
} from "../../components";
import { fonts } from "../../constants";
import profileImg from "../../../assets/images/profile-pic-sm.png";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function HomeScreen() {
  const { currentUser } = useAuthContext();

  return (
    <ScrollView>
      <Screen paddingT>
        <View style={styles.header}>
          <Text style={styles.headerGreeting}>
            Hi, {currentUser.displayName.split(" ")[0]}
          </Text>
          <Image style={styles.profileImg} source={profileImg} />
        </View>

        <BalanceCard />
        <SelectPaymentOptions />
        <FrequentTransactions />
        <RecentTransactions />
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: {
    marginTop: 20,
    marginBottom: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerGreeting: {
    fontSize: 30,
    fontWeight: fonts.weight.bold,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
