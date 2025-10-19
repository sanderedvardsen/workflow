import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const testUser = { name: "John Doe", email: "john@example.com" };
    saveUser(testUser);

    const result = getUsername();
    expect(result).toBe("John Doe");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
