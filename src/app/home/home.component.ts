import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanetaService } from '../services/planetas.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PlanetaService]
})

export class HomeComponent {

  public title: string;
  public parraf: string;
  public weightIn: any
  public value: boolean;

  constructor(private _route: ActivatedRoute,private _router: Router){
    this.title = "PLANET WEIGHT";
    this.parraf = "Sabías que si fueras a otros planetas pesarías diferente que en la Tierra? Si quieres conocer cuanto pesarías coloca tu peso debajo y pulsa la flecha!"
    this.weightIn = 0
    this.value = true
  }

  ngOnInit(){
    // this.setWeghtIn()
  }

  setWeight(inputValue:any){
    if(inputValue == '' || inputValue == 0){
      this.value = false
    }else{
      this.value = true
      this._router.navigate([`/planetas/${inputValue}/0`]);
    }
  }
}
