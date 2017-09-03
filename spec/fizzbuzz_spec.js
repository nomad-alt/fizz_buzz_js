describe("FizzBuzz", function() {
  beforeEach(function() {
    fizzbuzz = new fizzBuzz;
  });

  it("returns Fizz if divisible by 3", function() {
    expect(fizzbuzz.try(3)).toEqual('Fizz');
  });

  it("returns Buzz if divisible by 5", function() {
    expect(fizzbuzz.try(5)).toEqual('Buzz');
  });

  it("returns FizzBuzz if divisible by 3 and 5", function() {
    expect(fizzbuzz.try(15)).toEqual('FizzBuzz');
  });

  it("returns number if nondivisible by 3 and 5", function() {
    expect(fizzbuzz.try(1)).toEqual(1);
  });
});
