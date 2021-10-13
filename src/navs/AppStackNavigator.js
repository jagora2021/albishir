import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  TransferScreen,
  ReceiptScreen,
  TransferAmountScreen,
} from "../screens";
const Stack = createStackNavigator();
function AppStackNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"transfer"} component={TransferScreen} />
      <Stack.Screen name={"transfer amount"} component={TransferAmountScreen} />
      <Stack.Screen name={"receipt"} component={ReceiptScreen} />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;
