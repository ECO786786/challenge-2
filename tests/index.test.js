const formatTime = require("../src/index");

test("Returns a string", () => {
  const result = formatTime(50);
  expect(typeof result).toBe("string");
  expect(result.length).toBeGreaterThan(0);
});

test("Returns 120 minutes (2 hours)", () => {
  const result = formatTime(120);
  expect(typeof result).toBe("string");
  expect(result).toBe("2h");
});

test("Returns 150 minutes (2 hours 30 minutes)", () => {
  const result = formatTime(150);
  expect(typeof result).toBe("string");
  expect(result).toBe("2h 30 min");
});

test("Returns 45 minutes", () => {
  const result = formatTime(45);
  expect(result).toBe("45m");
});
