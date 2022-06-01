import React from "react";
import { View } from "react-native";

const Screen = ({
	children,
	paddingT = false,
	paddingB = false,
	paddingH = true,
}) => {
	return (
		<View
			style={{
				flex: 1,
				paddingTop: paddingT ? 15 : 0,
				paddingBottom: paddingB ? 15 : 0,
				paddingHorizontal: paddingH ? 15 : 0,
			}}
		>
			{children}
		</View>
	);
};

export default Screen;
