import { describe, expect, it, test } from "vitest"
import { sum } from "./sum"

// - Why Vitest over Jest?
// 1- Vitest is faster than Jest
// 2- Vitest allow the import export syntax out of the box
// 3- single config file to configure the testing
// 4- integrates will with vite

describe("#sum", () => {
	// it or test is the same, we use describe to group bunch of tests together
	test("should add two numbers", () => {
		expect(sum(1, 3)).toBe(4)
		expect(sum(1, 3)).not.toBe(0)

		// this is used to compare arrays and objects that are the same but have different references
		expect(sum(1, 3)).toEqual(4)
	})
	it("should be zero for no arguments", () => {
		expect(sum()).toBe(0)
	})
	it("should add three numbers", () => {
		expect(sum(1, 2, 3)).toBe(6)
	})
	it("should add negative numbers", () => {
		expect(sum(1, -2, 3)).toBe(2)
	})
	it("should add single number", () => {
		expect(sum(1)).toBe(1)
	})
})
