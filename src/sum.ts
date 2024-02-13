export let sum = (...args: number[]) =>
	args.reduce((acc, number) => acc + number, 0)
