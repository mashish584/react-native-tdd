import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Header from "./src/components/Header";
import Media from "./src/components/Media";
import usePexel from "./src/hooks/usePexel";

function App() {
	const [medias, setMedias] = useState<any[]>([]);
	const { fetchMedias } = usePexel();

	useEffect(() => {
		(async () => {
			const photos = await fetchMedias();
			setMedias(photos);
		})();
	}, [fetchMedias]);

	console.log(`Total medias ${medias.length}`);

	return (
		<SafeAreaProvider>
			<Header />
			<FlatList
				numColumns={2}
				data={medias}
				renderItem={({ item }) => {
					const media = item;
					return <Media url={media.src.original} />;
				}}
			/>
		</SafeAreaProvider>
	);
}

export default App;
