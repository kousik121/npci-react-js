import { test, expect } from "vitest";
import baList from "./Balist";

test("the size of the list is 5", () => {
    expect(baList().length).toBeGreaterThanOrEqual(5)
});

test("expect the first element id to be 1", () =>{
    expect(baList()[0].id).toBe(1)
});

test("expect the name of the first object to be Suraj", () => {
    expect(baList()[0].aname).toBe("Suraj")
});