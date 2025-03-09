export class TechnologyItem
{
  public number:string;
  public name:string;
  public url:string;
  public position:string;
  
  constructor(name:string,number:string,url:string,position:string) {
    this.number=number;
    this.name=name;
    this.url=url;
    this.position=position;

  }
}
