import { FormGroup, ValidatorFn, AbstractControl} from '@angular/forms';

// custom validator to check if two user-inputted fields match


export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn { 
    return (formGroup: FormGroup) => {

        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName]

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return
        }


        if (controlName !== matchingControlName) {
            return {mustMatch: true }

        }
        else{
            return null
        }
    }
}