import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palabra = "EDUARDOGARCIA";
  palabraoculta = "";
  Intentos = 0;
  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(){

   this.palabraoculta = "_ ".repeat(this.palabra.length);

  }

  comprobar(letra){

    this.existeLetra(letra);

     const palabraOcultaARR = this.palabraoculta.split(" ");

    for(var x = 0; x < this.palabra.length; x++){

      if (this.palabra[x] === letra){

        palabraOcultaARR[x] = letra;
      }

    }

    this.palabraoculta = palabraOcultaARR.join(" ");
    this.verificaGane();
    }

    verificaGane(){

      const palabraARR = this.palabraoculta.split(" ");
      const palabraEvaluar = palabraARR.join("");

      if(palabraEvaluar === this.palabra){

        this.gano = true;
      }

      if(this.Intentos >= 9){

        this.perdio = true;
      }

    }

    existeLetra(letra){

      if(this.palabra.indexOf(letra) >= 0 ){
        console.log("Letra existe: " + letra);
      }else{
        console.log("Letra No existe: " + letra);
        this.Intentos++;
      }
    }
}
