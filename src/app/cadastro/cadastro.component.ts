import { ConsultaCepService } from "./../service/consulta-cep.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCEPService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    if (form.valid) {
    }

    console.log("asd", form.controls);
  }

  consultaCEP(event: any, f: NgForm) {
    const cep = event.target.value;
    if (!cep) {
      return;
    }

    return this.consultaCEPService.getConsultaCEP(cep).subscribe((resposta) => {
      this.populandoEndereco(resposta, f);
    });
  }

  populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
}
