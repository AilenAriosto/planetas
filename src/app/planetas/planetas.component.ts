import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlanetaService } from '../services/planetas.service';
import { RequestService } from '../services/request.service';
import { Planeta } from '../models/planeta';

@Component({
  selector: 'planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss'],
  providers: [ PlanetaService, RequestService]
})

export class PlanetasComponent implements OnInit {

  public namePlanets: Planeta;
  public color: String[];
  public data: any;
  public weightPerson: any;
  public checked: boolean;

  constructor(private _route: ActivatedRoute,private _planetasService: PlanetaService,private _requestService: RequestService) {
    this.color = this._planetasService.getColor()
    this.namePlanets = <any>Planeta
    this.weightPerson = ''
    this.checked = false
  }

  ngOnInit(): void {

    this._requestService.getPlanetasJson().subscribe(
      result =>{
        this.data = result.data
        this._route.params.subscribe((params: Params) => {
          this.weightPerson = params['peso']
          this.namePlanets = this.getNamePlanetas(params['planeta'])
        })
      },
      error =>{
        console.log(<any>error)
      });
  }

  getNamePlanetas(i:any){
    return this.data[i]
  }

  toggleBurguer(){
    if(this.checked){
      this.checked = false
    }else{
      this.checked = true
    }
  }

  planetClick(){
    if(this.checked == true){
      this.toggleBurguer()
    }else{
      return
    }
  }
  
}
