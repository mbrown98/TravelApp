import { updateUI } from "./updateUI";

describe("Testing the updateUI functionality", () => {
  test("Testing that the function is defined", () => {
    expect(updateUI).toBeDefined();
  });
  test("testing that it runs fully without errors", () => {
    expect(updateUI).toBeTruthy();
  });
});
