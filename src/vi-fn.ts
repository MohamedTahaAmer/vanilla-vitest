import { convertToNumber } from "./utils/logic"

// function that calls another function, to test vi.fn() mocking
export let multiplyByTwo = (number: string | number) => {
	let num = convertToNumber(number)
	return num * 2
}
