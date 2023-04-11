import { add, subtract, multiply, divide } from "./index.js";

//add tests
test("returns 5 if called with add (2,3)", () => {
    const result1 = add(2, 3);
    expect(result1).toBe(5);
});
test("returns a negative value if the greater argument is negative", () => {
    const result2 = add(-5, 2);
    expect(result2).toBe(-3);

    const result3 = add(2, -5);
    expect(result3).toBeLessThan(0);
});
test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    const result4 = add(0.1, 0.2);
    expect(result4).toBeCloseTo(0.3);
});

//subtract tests
test("returns 10 if called with subtract(15, 5)", () => {
    const result5 = subtract(15, 5);
    expect(result5).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one", () => {
    const result6 = subtract(2, 5);
    expect(result6).toBeLessThan(0);
});

//multiply tests
test("returns 8 if called with multiply(2, 4)", () => {
    const result7 = multiply(2, 4);
    expect(result7).toBe(8);
});
test("returns a negative value if only the first argument is negative", () => {
    const result8 = multiply(-2, 5);
    expect(result8).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative", () => {
    const result9 = multiply(2, -5);
    expect(result9).toBeLessThan(0);
});
test("returns a positive value if called with two negative arguments", () => {
    const result10 = multiply(-2, -2);
    expect(result10).toBeGreaterThan(0);
});

//divide
test("returns 3 if called with divide(9, 3)", () => {
    const result11 = divide(9, 3);
    expect(result11).toBe(3);
});
test("returns 'You should not do this!' if called with 0 as second argument", () => {
    const result12 = divide(12, 0);
    expect(result12).toBe("You should not do this!");
});