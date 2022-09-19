import { useCallback } from "react";

const apiKey = "563492ad6f91700001000001db4aea1724d14c798726b2e1da41293f";

function usePexel() {
	const fetchMedias = useCallback(async function fetchMedias() {
		try {
			let response = await fetch("https://api.pexels.com/v1/curated?per_page=20", {
				method: "GET",
				headers: {
					Authorization: apiKey,
				},
			});
			response = await response.json();
			return response.photos;
		} catch (error) {
			console.log("Error ~ while fetching medias");
		}
	}, []);
	return { fetchMedias };
}

export default usePexel;
