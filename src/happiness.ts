import LimitedInt from "limited-int";

const HappinessMax: number = 100;
const HappinessMin: number = 0;
const HappyLimit: number = 70;
const UnhappyLimit: number = 30;
const EuphoricLimit: number = 90;
const DepressedLimit: number = 10;

export class Happiness{
    private _level: LimitedInt;

    constructor(level: number = 50){
        this._level = new LimitedInt(level, HappinessMax, HappinessMin);
    }

    get value(){
        return this._level.value;
    }

    get isHappy(){
        return this._level.value >= HappyLimit;
    }

    get isUnhappy(){
        return this._level.value <= UnhappyLimit;
    }

    get isEuphoric(){
        return this._level.value >= EuphoricLimit;
    }

    get isDepressed(){
        return this._level.value <= DepressedLimit;
    }

    get isNeutral(){
        return this._level.value > UnhappyLimit && this._level.value < HappyLimit;
    }

    increase(amount:number = 1){
        this._level.increase(amount);
    }

    decrease(amount:number = 1){
        this._level.decrease(amount);
    }

    increasePercentage(percentage:number){
        this._level.increasePercentage(percentage);
    }

    decreasePercentage(percentage:number){
        this._level.decreasePercentage(percentage);
    }
}