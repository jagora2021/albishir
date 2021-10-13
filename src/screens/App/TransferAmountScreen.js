import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { CustomHeader } from "../../components";
import { colors, fonts } from "../../constants";
<<<<<<< HEAD
function TransferAmountScreen(props) {
	return (
		<View style={{ flex: 1 }}>
			<CustomHeader />
			<View style={styles.amountContainer}>
				<View style={{ flex: 1 }}>
					<Text>Enter the amount to send</Text>
					<Text style={styles.amount}>N1000.00</Text>
				</View>
				<View style={styles.amountRecommendation}>
					<View style={styles.recAmountContainer}>
						<Text style={styles.recAmount}>N1000.00</Text>
					</View>
					<View style={styles.recAmountContainer}>
						<Text style={styles.recAmount}>N1000.00</Text>
					</View>
					<View style={styles.recAmountContainer}>
						<Text style={styles.recAmount}>N1000.00</Text>
					</View>
				</View>
			</View>
		</View>
	);
=======
function TransferAmountScreen({ navigation }) {
  const [amount, setAmount] = useState("0.00");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <CustomHeader />
        <View style={styles.amountContainer}>
          <View style={{ flex: 1, marginTop: 30, alignItems: "center" }}>
            <Text style={styles.subtitle}>Enter the amount to send</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.amount}>₦</Text>
              <TextInput
                style={styles.amount}
                value={amount}
                onChangeText={(text) => setAmount(text)}
                onFocus={() => setAmount("")}
                keyboardType="number-pad"
                onBlur={() =>
                  amount == "" ? setAmount("0.00") : setAmount(amount + ".00")
                }
              />
            </View>
          </View>
          <View style={styles.amountRecommendation}>
            <TouchableOpacity
              style={styles.recAmountContainer}
              onPress={() => setAmount("1000.00")}
            >
              <Text style={styles.recAmount}>₦1000.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.recAmountContainer}
              onPress={() => setAmount("2000.00")}
            >
              <Text style={styles.recAmount}>₦2000.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.recAmountContainer}
              onPress={() => setAmount("10000.00")}
            >
              <Text style={styles.recAmount}>₦10000.00</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("receipt", { amount: amount })}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
>>>>>>> 3320021a524668efe9af8e2dac6ab731d3e27b23
}
const styles = StyleSheet.create({
  amountContainer: {
    height: 200,
    width: "100%",
    backgroundColor: colors.lightGreen,
    alignItems: "center",
    padding: 15,
    marginVertical: 20,
  },
  amountRecommendation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  amount: {
    fontSize: fonts.size.xxl,
    fontWeight: fonts.weight.bold,
  },
  recAmount: {
    fontWeight: fonts.weight.semiBold,
    fontSize: fonts.size.m,
  },
  recAmountContainer: {
    backgroundColor: colors.primary,
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: fonts.size.m,
    marginBottom: 10,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});

export default TransferAmountScreen;
