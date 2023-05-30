import { Ifood } from "./ifood";

export class Food implements Ifood {
    id!:number;
    name!: string;
    image!: string;
    topdish!: string;
    foodtype!: string;
    rating!: number;
    distance!: number;
    price!: number;
    time!: number;
}