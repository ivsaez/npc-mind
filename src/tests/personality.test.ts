import { Personality } from "../personality";

describe("Personality should", () => {
    it("create a new instance with default values", () => {
        let personality = new Personality();

        expect(personality.introvertyExtroverty).toBe(50);
        expect(personality.pesimisticOptimistic).toBe(50);
        expect(personality.pacificViolent).toBe(50);
        expect(personality.manseSexual).toBe(50);
        expect(personality.politeUnpolite).toBe(50);
    });
  
    it("create a new instance with specified values", () => {
        let personality = new Personality(10, 20, 30, 40, 50);

        expect(personality.introvertyExtroverty).toBe(10);
        expect(personality.pesimisticOptimistic).toBe(20);
        expect(personality.pacificViolent).toBe(30);
        expect(personality.manseSexual).toBe(40);
        expect(personality.politeUnpolite).toBe(50);
    });

    it("set specific values", () => {
        let personality = new Personality();

        personality.introvertyExtroverty = 10;
        personality.pesimisticOptimistic = 20;
        personality.pacificViolent = 30;
        personality.manseSexual = 40;
        personality.politeUnpolite = 50;

        expect(personality.introvertyExtroverty).toBe(10);
        expect(personality.pesimisticOptimistic).toBe(20);
        expect(personality.pacificViolent).toBe(30);
        expect(personality.manseSexual).toBe(40);
        expect(personality.politeUnpolite).toBe(50);
    });

    it("flag personality traits", () => {
        let personality = new Personality(10, 10, 10, 10, 10);
        expect(personality.isIntroverted).toBe(true);
        expect(personality.isExtroverted).toBe(false);
        expect(personality.isPesimistic).toBe(true);
        expect(personality.isOptimistic).toBe(false);
        expect(personality.isPacific).toBe(true);
        expect(personality.isViolent).toBe(false);
        expect(personality.isManse).toBe(true);
        expect(personality.isSexual).toBe(false);
        expect(personality.isPolite).toBe(true);
        expect(personality.isUnpolite).toBe(false);

        personality = new Personality(90, 90, 90, 90, 90);
        expect(personality.isIntroverted).toBe(false);
        expect(personality.isExtroverted).toBe(true);
        expect(personality.isPesimistic).toBe(false);
        expect(personality.isOptimistic).toBe(true);
        expect(personality.isPacific).toBe(false);
        expect(personality.isViolent).toBe(true);
        expect(personality.isManse).toBe(false);
        expect(personality.isSexual).toBe(true);
        expect(personality.isPolite).toBe(false);
        expect(personality.isUnpolite).toBe(true);
    });
});