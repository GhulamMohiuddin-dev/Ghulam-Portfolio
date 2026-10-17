/** Light obfuscation that keeps the address out of server-rendered HTML for naive scrapers. */
export function encodeEmail(email: string) {
  return Buffer.from(email, "utf8").toString("base64");
}
