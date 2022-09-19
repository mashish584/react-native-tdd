import React from "react";
import { render, screen } from "@testing-library/react-native";
import Hello from ".";

describe("Hello", () => {
	it("displays the passed-in name", () => {
		render(<Hello name="Josh" />);
		expect(screen.queryByText("Hello, Josh!")).toBeTruthy();
	});
});
