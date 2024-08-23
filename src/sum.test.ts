import { describe, expect, it } from "vitest"
import { sum, unique } from "./sum"

// - Why Vitest over Jest?
// 1- Vitest is faster than Jest
// 2- Vitest allow the import export syntax out of the box
// 3- single config file to configure the testing
// 4- integrates will with vite

describe("#sum", () => {
	it("should add two numbers", () => {
		expect(sum(1, 3)).toBe(4)
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

describe("#unique", () => {
	it("should remove duplicates", () => {
		expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
	})
	it("should return empty array for empty array", () => {
		expect(unique([])).toEqual([])
	})
	it("should return single element array for single element array", () => {
		expect(unique([1])).toEqual([1])
	})
})
