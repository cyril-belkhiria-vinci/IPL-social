import { isValidEmail } from "./EmailChecker";

describe("EmailChecker", () => {

    test("missing @", () => {
    expect(isValidEmail("dahyuntwice.com")).toBe(false);
    });

    test("missing dot in domain", () => {
    expect(isValidEmail("dahyun@twice")).toBe(false);
    });

    test("dot as last character", () => {
    expect(isValidEmail("dahyun@twice.")).toBe(false);
    });

    test("contains space", () => {
    expect(isValidEmail("dahyun @twice.com")).toBe(false);
    });

    test("no text before @", () => {
    expect(isValidEmail("@twice.com")).toBe(false);
    });

    test("no text after @", () => {
    expect(isValidEmail("dahyun@")).toBe(false);
    });

    test("valid email", () => {
    expect(isValidEmail("dahyun@twice.com")).toBe(true);
    });
    
});
