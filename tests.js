// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function (){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string  "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string 1 "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})

describe('isFive', function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when executed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when executed', function () {
        expect(isFive("5")).toBe(false);
    });
})

describe('isEven', function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return true when executed', function () {
        expect(isEven("bananas")).toBe(false);
    });
    it('should return true when executed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when executed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when executed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed', function () {
        expect(isVowel()).toBe(false);
    });
} );

describe('add', function (){
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when executed', function () {
        expect(add(3, 2)).toBe(5);
    });
    it('should return -12 when executed', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when executed', function () {
        expect(add("5", 6)).toBe(11)
    });
    it('should return 6 when executed', function () {
        expect(add("-4", "10")).toBe(6);
    });
     it('should return NaN when executed', function () {
         expect(add("banana", "split")).toBeNaN(NaN);
     });
    it('should return NaN when executed', function () {
        expect(add(2, "apples")).toBeNaN(NaN)
    });
    it('should return NaN when executed', function () {
        expect(add()).toBeNaN(NaN);
    });
});