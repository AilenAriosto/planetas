import { Injectable } from '@angular/core';

@Injectable()

export class PlanetaService{
  public color: String[];


  constructor(){

    this.color = [
      'linear-gradient(180deg, #403D95 7.29%, #E6C1C8 100%)',
      'linear-gradient(180deg, #774700 0%, #F9D6A9 100%)',
      'linear-gradient(180deg, #984A19 0%, #EC9E5E 100%)',
      'linear-gradient(180deg, #9E110B 7.29%, #F5C5AB 100%)',
      'linear-gradient(180deg, #7E5026 7.29%, #D5B999 100%)',
      'linear-gradient(180deg, #BB824F 7.29%, #FCEEDE 100%)',
      'linear-gradient(180deg, #33527E 7.29%, #BADEFD 100%)',
      'linear-gradient(180deg, #580B83 7.29%, #F146F1 100%)'

    ]

  }

  getColor(){
    return this.color
  }

}
