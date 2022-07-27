import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  //************* */ Llamada del servicio ***********************
  constructor(private paisService:PaisService) { }

  //****************** */ Variables *********************
  termino:string='';
  hayError:boolean=true;
  paises:Country[]=[];

  // ***************** Metodo buscar ***********************
  buscar(){
    this.hayError=false
    console.log(this.termino)
    
    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises= paises;

    },(err)=>{
      this.hayError=true;
      this.paises=[];
    })
  }

}
