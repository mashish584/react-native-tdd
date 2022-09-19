import { printSum } from "./index";

describe("Utils tests", () => {
	describe("check printSum", () => {
		it("return sum of passed numbers", () => {
			const result = printSum(1, 2);
			expect(result).toEqual(3);
		});
	});
});
