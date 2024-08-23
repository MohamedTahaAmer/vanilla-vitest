export let sum = (...args: number[]) =>
	args.reduce((acc, number) => acc + number, 0)

export function unique<T>(array: T[]): T[] {
	return [...new Set(array)]
}
