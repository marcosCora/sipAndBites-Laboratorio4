import { Drink } from "./drink";

export class User {
    
    id : number = 0;
    firstName : string = '';
    lastName : string = '';
    dateOfBirth : Date = new Date();
    email : string = '';
    password : string = '';
    active : boolean = true;

    drinks : Drink[] = [];
    
}