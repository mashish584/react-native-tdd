import React from "react";
import { StyleSheet, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ContainerI {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerI) => {
	// const { top } = useSafeAreaInsets();
	return <View style={[styles.container, { paddingTop: 0 }]}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Container;
