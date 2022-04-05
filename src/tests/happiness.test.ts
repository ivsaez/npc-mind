import { Happiness } from "../happiness";

describe("Happiness should", () => {
    it("create a new instance with default level", () => {
        let happiness = new Happiness();

        expect(happiness.value).toBe(50);
        expect(happiness.isNeutral).toBe(true);
    });
  
    it("create a new instance with specified level", () => {
    let happiness = new Happiness(10);

    expect(happiness.value).toBe(10);
  });

  it("increase level", () => {
    let happiness = new Happiness();
    happiness.increase(10);

    expect(happiness.value).toBe(60);
  });

  it("decrease level", () => {
    let happiness = new Happiness();
    happiness.decrease(10);

    expect(happiness.value).toBe(40);
  });
  
  it("increase percentage level", () => {
    let happiness = new Happiness();
    happiness.increasePercentage(10);

    expect(happiness.value).toBe(55);
  });

  it("decrease percentage level", () => {
    let happiness = new Happiness();
    happiness.decreasePercentage(10);

    expect(happiness.value).toBe(45);
  });

  it("flag happy status", () => {
    let happiness = new Happiness(80);

    expect(happiness.isHappy).toBe(true);
    expect(happiness.isNeutral).toBe(false);
  });

  it("flag euphoric status", () => {
    let happiness = new Happiness(95);

    expect(happiness.isEuphoric).toBe(true);
    expect(happiness.isNeutral).toBe(false);
  });

  it("flag unhappy status", () => {
    let happiness = new Happiness(20);

    expect(happiness.isUnhappy).toBe(true);
    expect(happiness.isNeutral).toBe(false);
  });

  it("flag depressed status", () => {
    let happiness = new Happiness(5);

    expect(happiness.isDepressed).toBe(true);
    expect(happiness.isNeutral).toBe(false);
  });

  it("return a copy", () => {
    let happiness = new Happiness(5);

    let copy = happiness.copy();

    expect(copy.value).toBe(happiness.value);
  });
});