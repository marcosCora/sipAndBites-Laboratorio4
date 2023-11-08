import { Drink } from "./drink";
import { Meal } from "./meal";

export class User {
    
    id : number = 0;
    firstName : string = '';
    lastName : string = '';
    dateOfBirth : Date = new Date();
    email : string = '';
    password : string = '';
    active : boolean = true;

    drinks : Drink[] = [];
    meals : Meal[] = [];
    
}