describe("FizzBuzz", function() {

  it("should return Fizz! if number is divisible by three", function() {
    var result = fizzBuzz.getResult(3);
    expect(result).toEqual('Fizz!');
  });

  it("should return Buzz! if number is divisible by five", function() {
    var result = fizzBuzz.getResult(5);
    expect(result).toEqual('Buzz!');
  });

  it("should return FizzBuzz! if number is divisible by three and five", function() {
    var result = fizzBuzz.getResult(15);
    expect(result).toEqual('FizzBuzz!');
  });

  it("should return number if number is nondivisible by three and five", function() {
    var result = fizzBuzz.getResult(7);
    expect(result).toEqual('7');
  });

  it("should return '0' for zero", function() {
    var result = fizzBuzz.getResult(0);
    expect(result).toEqual('0');
  });
});
