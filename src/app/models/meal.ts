export class Meal {
     idMeal : string;
    strMeal : string;
    strDrinkAlternate : string;
    strCategory : string;
    strArea : string;
    strInstructions : string;
    strMealThumb : string;
    strTags : string;
    strYoutube : string;
    strIngredient1 : string;
    strIngredient2 : string;
    strIngredient3 : string;
    strIngredient4 : string;
    strIngredient5 : string;
    strIngredient6 : string;
    strIngredient7 : string;
    strIngredient8 : string;
    strIngredient9 : string;
    strIngredient10 : string;
    strIngredient11 : string;
    strIngredient12 : string;
    strIngredient13 : string;
    strIngredient14 : string;
    strIngredient15 : string;
    strIngredient16 : string;
    strIngredient17 : string;
    strIngredient18 : string;
    strIngredient19 : string;
    strIngredient20 : string;
    strMeasure1 : string;
    strMeasure2 : string;
    strMeasure3 : string;
    strMeasure4 : string;
    strMeasure5 : string;
    strMeasure6 : string;
    strMeasure7 : string;
    strMeasure8 : string;
    strMeasure9 : string;
    strMeasure10 : string;
    strMeasure11 : string;
    strMeasure12 : string;
    strMeasure13 : string;
    strMeasure14 : string;
    strMeasure15 : string;
    strMeasure16 : string;
    strMeasure17 : string;
    strMeasure18 : string;
    strMeasure19 : string;
    strMeasure20 : string;
    strSource : string;
    strImageSource : string;
    strCreativeCommonsConfirmed : string;
    dateModified : string; 


    constructor(){
        this.idMeal = '';
        this.strMeal = '';
        this.strDrinkAlternate = '';
        this.strCategory = '';
        this.strArea = '';
        this.strInstructions = '';
        this.strMealThumb = '';
        this.strMealThumb = '';
        this.strTags = '';
        this.strYoutube = '';
        this.strIngredient1 = '';
        this.strIngredient2 = '';
        this.strIngredient3 = '';
        this.strIngredient4 = '';
        this.strIngredient5 = '';
        this.strIngredient6 = '';
        this.strIngredient7 = '';
        this.strIngredient8 = '';
        this.strIngredient9 = '';
        this.strIngredient10 = '';
        this.strIngredient11 = '';
        this.strIngredient12 = '';
        this.strIngredient13 = '';
        this.strIngredient14 = '';
        this.strIngredient15 = '';
        this.strIngredient16 = '';
        this.strIngredient17 = '';
        this.strIngredient18 = '';
        this.strIngredient19 = '';
        this.strIngredient20 = '';
        this.strMeasure1 = '';
        this.strMeasure2 = '';
        this.strMeasure3 = '';
        this.strMeasure4 = '';
        this.strMeasure5 = '';
        this.strMeasure6 = '';
        this.strMeasure7 = '';
        this.strMeasure8 = '';
        this.strMeasure9 = '';
        this.strMeasure10 = '';
        this.strMeasure11 = '';
        this.strMeasure12 = '';
        this.strMeasure13 = '';
        this.strMeasure14 = '';
        this.strMeasure15 = '';
        this.strMeasure16 = '';
        this.strMeasure17 = '';
        this.strMeasure18 = '';
        this.strMeasure19 = '';
        this.strMeasure20 = '';
        this.strSource = '';
        this.strImageSource = '';
        this.strCreativeCommonsConfirmed = '';
        this.dateModified = '';
    }

     getIngredientsArray() : string[]{
        let array : string[]= []
        let i = 0;
        let flag : boolean = true;
        while(i<=20 && flag){
            const ingredientKey = `strIngredient${i}`;
            if(ingredientKey){
                array.push(ingredientKey);
            }else{
                flag = false;
            }
            i++;
        }
        return array;
    } 




}
