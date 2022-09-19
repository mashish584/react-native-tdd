import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";

interface MediaI {
	url: string;
}

function Media({ url }: MediaI) {
	const [isImageLoading, setIsImageLoading] = useState(true);

	function imageLoadFinished() {
		setIsImageLoading(false);
	}

	return (
		<View style={styles.container}>
			<Image source={{ uri: url }} style={styles.image} resizeMode="cover" onLoadEnd={imageLoadFinished} />
			{isImageLoading && <ActivityIndicator size={"small"} style={styles.indicator} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "50%",
		height: 150,
		backgroundColor: "#F5F5F5",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	indicator: {
		position: "absolute",
	},
});

export default Media;
