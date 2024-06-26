export interface IResponseAPI {
    data: Data;
}

export interface Data {
    from:          string;
    to:            string;
    generationmix: Generationmix[];
}

export interface Generationmix {
    fuel: string;
    perc: number;
}
