import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Header() {
	const { top } = useSafeAreaInsets();
	return (
		<View style={[styles.header, { paddingTop: top }]}>
			<Text style={styles.heading}>Media Gallery</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#ECB365",
		paddingBottom: 15,
	},
	heading: {
		fontSize: 20,
		textAlign: "center",
	},
});

export default Header;
