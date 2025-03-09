
export class TeamMember{
  public name:string;
  public role:string;
  public img:string;
  /**
   *
   */
  constructor(name:string,role:string,img:string) {
    this.img=img;
    this.role=role;
    this.name=name;

  }
}
