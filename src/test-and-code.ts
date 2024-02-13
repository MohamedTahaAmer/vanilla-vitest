let sayHi = (name: string) => `Hi, ${name}!`

if (import.meta.vitest) {
	let { describe, expect, it } = import.meta.vitest
	describe("#sayHi", () => {
		it("should say hi to John", () => {
			expect(sayHi("John")).toBe("Hi, John!")
		})
		it("should say hi to Jane", () => {
			expect(sayHi("Jane")).toBe("Hi, Jane!")
		})
	})
}
