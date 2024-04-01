import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourfirsproject';
  tablearr = [{
    pillars : "Angular",
    def : "It is framework of javascript based on js",
    depen : "Its dependent of TS"
  },
  {
    pillars : "Javascript",
    def : "It is used add more Funtionality",
    depen : "Javascript is give dependency to other" 
  },
  {
    pillars : "HTML",
    def : "It is Hyper text markUp language used to add content to browser",
    depen : "Css made html more superior"
  }
];
tablearr2 = [{
  pillars : "Bootstrap",
  def : "It is framework of css",
  depen : "Its dependent of CSS"
},
{
  pillars : "TypeScript",
  def : "Its strict type language same as javascript but in this we use type",
  depen : "TypeScript is fully dependent on JS" 
},
{
  pillars : "HTML",
  def : "It is Hyper text markUp language used to add content to browser",
  depen : "Css made html more superior"
}
];
}