import { ValidatorFn, AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {

    static forbiddenNames(forbiddenNameRegEx : RegExp) : ValidatorFn {
        return (control : AbstractControl) : {[key : string] : any} | null => {
            const forbidden = forbiddenNameRegEx.test(control.value);

            return forbidden ? {'forbiddenName: ' : { value : control.value}} : null;
        }
    } 
    
    static matchPasswords(password: string, confirmPassword: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
          const passwordControl = control.get(password);
          const confirmPasswordControl = control.get(confirmPassword);
      
          if (passwordControl && confirmPasswordControl && passwordControl.value === confirmPasswordControl.value) {
            return null; // No hay error de validación, las contraseñas coinciden
          } else {
            return { mismatch: true }; // Error de validación, las contraseñas no coinciden
          }
        };
    }

    


    static registeredEmails(existingEmails: string[]) {
        return (control: AbstractControl) => {
        const email = control.value;
        const emailExists = existingEmails.includes(email);
        return emailExists ? { emailExists: true } : null;
        };
    }

    static legalAge(control : AbstractControl) {
        const birthDate = new Date(control.value);
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
    
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        // Comparar la edad mínima requerida (en este caso, 18 años)
        return age >= 18 ? null : { notLegalAge: true };
      }

      static requiredIfOtherFieldHasValue(otherControlName : string): ValidatorFn {
        return (control : AbstractControl) => {
          if (!control.parent) {
            return null;
          }
      
          const thisControl = control;
          const otherControl = control.parent.get(otherControlName);
      
          if (!thisControl || !otherControl) {
            return null;
          }
      
          if (otherControl.value && !thisControl.value) {
            return { requiredIfOtherFieldHasValue: true };
          }
      
          return null;
        };
      }
}

