import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ControlContainer,
} from "@angular/forms";

@Directive({
  selector: "[maiorIdadeValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaiorIdadeDirective,
      multi: true,
    },
  ],
})
export class MaiorIdadeDirective implements Validator {
  constructor(private readonly form: ControlContainer) {}

  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();

    const anoAtual = new Date().getFullYear();

    const maiorDeIdade = anoAtual - anoNascimento >= 18;

    return maiorDeIdade ? null : { maiorIdadeValidator: true };
  }
}
