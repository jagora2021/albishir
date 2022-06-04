import React from "react";
import {
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors, fonts } from "../constants";
import ErrorMessage from "./ErrorMessage";

const AppTextInput = ({
	label,
	placeholder,
	error = "",
	keyboardType = "default",
	secureTextEntry = false,
	autoCapitalize = "sentences",
	icon,
	value,
	onChangeText,
}) => {
	return (
		<View>
			<View style={styles.labelAndErrorContainer}>
				<Text style={styles.label}>{label}</Text>
				{error ? <ErrorMessage error={error} /> : null}
			</View>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder={placeholder}
					keyboardType={keyboardType}
					secureTextEntry={secureTextEntry}
					autoCapitalize={autoCapitalize}
					value={value}
					onChangeText={onChangeText}
				/>
				{icon && (
					<TouchableOpacity>
						<MaterialCommunityIcons name={icon} size={22} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	labelAndErrorContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	label: {
		fontWeight:
			Platform.OS === "ios" ? fonts.weight.semiBold : fonts.weight.bold,
		color: colors.dark,
		marginBottom: 5,
	},
	textInputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1.5,
		borderColor: colors.grey,
		borderRadius: 8,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},
	textInput: {
		flex: 1,
	},
});
