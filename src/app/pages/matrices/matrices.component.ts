import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-matrices',
  standalone: true,
  imports: [MenuBarComponent, AccordionModule, NgFor, NgIf],
  templateUrl: './matrices.component.html',
  styleUrl: './matrices.component.scss'
})
export class MatricesComponent {
  titulo: String;
  headers: String[] = [];
  lines: String[] = [];
  constructor(private http:HttpClient){}

  ngOnInit() {
    

    this.http.get('temas/matrices.txt', {
      responseType: 'text'}).subscribe(data=> {
        //const reader = new FileReader();
        //const file = data;
        //console.log(file);
        console.log(data)

        for (const line of data.split(/[\r\n]+/)){
          let header = -1;
          if(line.includes('titulo:')) {
            this.titulo = line.split('titulo:')[1];
          }
          else {
            if(line.includes('header:')) {
              this.headers.push(line.split('header:')[1]);
              this.lines.push(line.split('header:')[1]);
              header++;
            }
            else {
              this.lines.push(line);
              //document.getElementById("header0_content")!.innerHTML+= "<p>" + line + "</p>";
            }
          }
        }
    })
  }

  escribirLinea(linea: number, header: String) {
    let numHeaderInHeaders; //el número de header en el array de headers
    let i = 0;
    let isLast = false;
    for(let h of this.headers) {
      if(h == header) {
        numHeaderInHeaders = i;
        break;
      }
      i++;
    }

    let nextHeader = this.headers[i+1]; //aquí guardo el texto del siguiente header
    
    let numNextHeader = -1;
    let numHeader = -1;
    i=0;
    for(let l of this.lines) {
      if(l == header) {
        numHeader = i;
      }
      if(l == nextHeader) {
        numNextHeader = i;
      }
      if(numHeader != -1 && numNextHeader != -1)
        break
      i++;
    }
    console.log(numHeader)
    console.log(numNextHeader)

    if(nextHeader) {
      if(linea > numHeader && linea < numNextHeader)
        return this.lines[linea]
      else
        return 0;
    } else {
      if(linea > numHeader)
        return this.lines[linea]
      else
        return 0;
    }
    
    
  }

}
