import { Iuser } from "./iuser";

export class User implements Iuser {
    id!: number;
    name!: string;
    phone!: string;
    email!: string;
  }