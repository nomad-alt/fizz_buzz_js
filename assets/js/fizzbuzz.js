var fizzBuzz = function () {

    var getResult = function(number) {
      if (isDivisibleByThree(number) && isDivisibleByFive(number))
        return "FizzBuzz!";
      if (isDivisibleByThree(number))
        return "Fizz!";
      if (isDivisibleByFive(number))
          return "Buzz!";
      return number.toString();
    };

    var isDivisibleByThree = function (number) {
      return number % 3 == 0 && number != 0;
    };

    var isDivisibleByFive = function (number) {
      return number % 5 == 0 && number != 0;
    };

    return {
      getResult: getResult
    };
} ();
