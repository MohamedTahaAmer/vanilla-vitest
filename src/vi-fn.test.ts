import { describe, expect, it, vi, vitest } from "vitest"
import { multiplyByTwo } from "./vi-fn"

// ? How to mock a function from another file?
// 1- import the function from the file as usual
import { convertToNumber } from "./utils/logic"

// 2- overwrite any call to import from this file with 'vitest.mock'
vitest.mock("./utils/logic", () => {
	// 3- wrap the logic you wanna mock inside a 'vi.fn' function to be able to track any calls to it
	let convertToNumber = vi.fn((number: string | number) => {
		return Number(number)
	})
	return {
		convertToNumber,
	}
})

describe("vi-fn", () => {
	it("should multiply by two", () => {
		expect(multiplyByTwo(2)).toBe(4)
		expect(multiplyByTwo(2)).not.toBe(0)
		expect(multiplyByTwo(2)).toEqual(4)
		// 4- you can check if the function was called and how many
		// without 'vitest.mock' the function itself will be imported and executed, unlike with this implementation, our overwrite to the './utils/logic' is the one that will be used
		expect(convertToNumber).toHaveBeenCalledTimes(3)
	})
	it("should multiply by two for strings", () => {
		expect(multiplyByTwo("2")).toBe(4)
	})
})
