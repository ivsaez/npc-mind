import LimitedInt from "limited-int";

const MaxPersonality: number = 100;
const MinPersonality: number = 0;

const BelowLimit: number = 40;
const AboveLimit: number = 60;

export class Personality{
    private _introvertyExtroverty: LimitedInt;
    private _pesimisticOptimistic: LimitedInt;
    private _pacificViolent: LimitedInt;
    private _manseSexual: LimitedInt;
    private _politeUnpolite: LimitedInt;

    constructor(
        introvertyExtroverty: number = 50, 
        pesimisticOptimistic: number = 50, 
        pacificViolent: number = 50, 
        manseSexual: number = 50,
        politeUnpolite: number = 50){

        this._introvertyExtroverty = new LimitedInt(introvertyExtroverty, MaxPersonality, MinPersonality);
        this._pesimisticOptimistic = new LimitedInt(pesimisticOptimistic, MaxPersonality, MinPersonality);
        this._pacificViolent = new LimitedInt(pacificViolent, MaxPersonality, MinPersonality);
        this._manseSexual = new LimitedInt(manseSexual, MaxPersonality, MinPersonality);
        this._politeUnpolite = new LimitedInt(politeUnpolite, MaxPersonality, MinPersonality);
    }

    get introvertyExtroverty(){
        return this._introvertyExtroverty.value;
    }

    get pesimisticOptimistic(){
        return this._pesimisticOptimistic.value;
    }

    get pacificViolent(){
        return this._pacificViolent.value;
    }

    get manseSexual(){
        return this._manseSexual.value;
    }

    get politeUnpolite(){
        return this._politeUnpolite.value;
    }

    set introvertyExtroverty(value){
        this._introvertyExtroverty.value = value;
    }

    set pesimisticOptimistic(value){
        this._pesimisticOptimistic.value = value;
    }

    set pacificViolent(value){
        this._pacificViolent.value = value;
    }

    set manseSexual(value){
        this._manseSexual.value = value;
    }

    set politeUnpolite(value){
        this._politeUnpolite.value = value;
    }

    get isIntroverted(){
        return this._introvertyExtroverty.value < BelowLimit;
    }

    get isExtroverted(){
        return this._introvertyExtroverty.value >= AboveLimit;
    }

    get isPesimistic(){
        return this._pesimisticOptimistic.value < BelowLimit;
    }

    get isOptimistic(){
        return this._pesimisticOptimistic.value >= AboveLimit;
    }

    get isPacific(){
        return this._pacificViolent.value < BelowLimit;
    }

    get isViolent(){
        return this._pacificViolent.value >= BelowLimit;
    }

    get isManse(){
        return this._manseSexual.value < BelowLimit;
    }

    get isSexual(){
        return this._manseSexual.value >= AboveLimit;
    }

    get isPolite(){
        return this._politeUnpolite.value < BelowLimit;
    }

    get isUnpolite(){
        return this._politeUnpolite.value >= AboveLimit;
    }

    copy(): Personality{
        return new Personality(
            this._introvertyExtroverty.value,
            this._pesimisticOptimistic.value,
            this._pacificViolent.value,
            this._manseSexual.value,
            this._politeUnpolite.value
        );
    }
}