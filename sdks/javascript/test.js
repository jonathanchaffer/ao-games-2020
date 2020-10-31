const ai = require("./ai");

test("returns a valid response", () => {
  expect(ai.prepareResponse({ column: 1 })).toEqual(`{"column":1}\n`);
});

test("returns whether moves are valid", () => {
  expect(
    ai.isValidMove({ column: 0 }, [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ])
  ).toBeTruthy();
  expect(
    ai.isValidMove({ column: 0 }, [
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
    ])
  ).toBeFalsy();
});

test("returns the winner given a board state", () => {
  expect(
    ai.getWinner([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ])
  ).toEqual(0);
  expect(
    ai.getWinner([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 1, 2, 2],
    ])
  ).toEqual(1);
  expect(
    ai.getWinner([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0],
      [0, 1, 2, 2, 1, 0, 0],
      [1, 0, 1, 1, 2, 0, 2],
      [1, 2, 2, 1, 1, 2, 0],
    ])
  ).toEqual(2);
});
