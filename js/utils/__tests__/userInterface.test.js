import { describe, it, expect } from "vitest";
import { isActivePath } from "../userInterface.js";

describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    const result = isActivePath("/about", "/about");
    expect(result).toBe(true);
  });

  it('Returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns true when current path includes the href", () => {
    const result = isActivePath("/venues", "/venues/123");
    expect(result).toBe(true);
  });

  it("Returns false when paths don't match", () => {
    const result = isActivePath("/about", "/contact");
    expect(result).toBe(false);
  });
});
