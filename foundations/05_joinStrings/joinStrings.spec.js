const values = require("./joinStrings");

describe("step 2", () => {
  test("firstName is Jhon", () => {
    expect(values.firstName).toEqual("Jhon");
  });
  test("lastName is Doe", () => {
    expect(values.lastName).toEqual("Doe");
  });
  test("thisYear is 2026", () => {
    expect(values.thisYear).toEqual(2026);
  });
  test("birthYear is 1993", () => {
    expect(values.birthYear).toEqual(1993);
  });
  test("greeting is properly output", () => {
    expect(values.greeting).toEqual(
      "Hello! My name is Jhon Doe and I am 33 years old.",
    );
  });
});

describe("step 3", () => {
  test("fullName is Jhon Doe", () => {
    expect(values.fullName).toEqual("Jhon Doe");
  });
  test("age is 33", () => {
    expect(values.age).toEqual(33);
  });
});
