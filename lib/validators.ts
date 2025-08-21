export function validateInput(prompt: string) {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("Invalid prompt: must be a non-empty string");
  }
}
