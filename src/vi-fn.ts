import { convertToNumber } from "./utils/logic"

// function that calls another function, to test vi.fn() mocking
export let multiplyByTwo = (number: string | number) => {
	// console.log("\x1b[1;32m%s\x1b[1;36m", Object.keys(process.env))
	console.log("\x1b[1;32m%s\x1b[1;36m", process.env.NODE_ENV)
	let num = convertToNumber(number)
	return num * 2
}
multiplyByTwo(2)
