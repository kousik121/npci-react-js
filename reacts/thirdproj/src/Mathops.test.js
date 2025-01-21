import { expect, test } from "vitest";
import { addnum, mulnum } from "./Mathops";

test("the sum of 2 and 3 is 5", () => {
    expect(addnum(2, 3)).toBe(5)
});

test("the product of 2 and 3 is 6", () => {
    expect(mulnum(2, 3)).toBe(6)
});