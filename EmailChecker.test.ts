import { isValidEmail } from "./EmailChecker";

describe("Email validation", () => {

    test("sans @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
    });

    test("sans point dans le domaine", () => {
    expect(isValidEmail("test@example")).toBe(false);
    });

    test("point en dernier caractère", () => {
    expect(isValidEmail("test@example.")).toBe(false);
    });

    test("avec espace", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
    });

    test("pas de texte avant @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
    });

    test("pas de texte après @", () => {
    expect(isValidEmail("test@")).toBe(false);
    });

    test("email valide", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    });
    
});
