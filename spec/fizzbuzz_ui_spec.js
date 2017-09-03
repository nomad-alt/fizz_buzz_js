describe('fizzBuzz - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
    loadFixtures('sample_partial.html');
    $.holdReady(false);
    $('#number').val(1);
    $('#number').val(3);
    $('#number').val(5);
    $('#number').val(15);
    $('#calculate').trigger('click');
  });

  describe("display FizzBuzz", function() {

    it("displays 1 when button is clicked", function() {
      expect($('#display_message').text()).toBe('1');
    });
    it("displays 'Fizz' when button is clicked", function() {
      expect($('#display_message').text()).toBe('Fizz');
    });
    it("displays 'Buzz' when button is clicked", function() {
      expect($('#display_message').text()).toBe('Buzz');
    });
    it("displays 'FizzBuzz' when button is clicked", function() {
      expect($('#display_message').text()).toBe('FizzBuzz');
    });
  });
});
