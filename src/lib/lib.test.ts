import { describe, expect, it } from "vitest";
import { cn, isExternal } from "./utils";
import { encodeEmail } from "./email";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });
});

describe("isExternal", () => {
  it.each([
    ["https://example.com", true],
    ["//cdn.example.com", true],
    ["mailto:someone@example.com", true],
    ["/work/slug", false],
    ["#contact", false],
  ])("%s → %s", (href, expected) => {
    expect(isExternal(href)).toBe(expected);
  });
});

describe("encodeEmail", () => {
  it("round-trips through atob in the browser", () => {
    const email = "someone@example.com";
    const encoded = encodeEmail(email);
    expect(encoded).not.toContain("@");
    expect(atob(encoded)).toBe(email);
  });
});
