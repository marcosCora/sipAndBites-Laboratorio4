import { numberAttribute } from "@angular/core";

export class Comment {
    id : number;
    idProduct : number;
    idUser : number;
    nameUser : string;
    comment : string;
    dateComment : string;

    constructor(){
        this.id = 0;
        this.idProduct = 0;
        this.idUser = 0;
        this.nameUser = '';
        this.comment = '';
        this.dateComment = '';
    }
}
