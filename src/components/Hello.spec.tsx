import React from "react";
import { render, screen } from "@testing-library/react-native";
import Hello from "./Hello";

describe("Hello", () => {
	it("render the correct message", () => {
		render(<Hello />);
		expect(screen.queryByText("Hello, World!")).toBeTruthy();
	});
});
