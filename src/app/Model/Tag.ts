export class Tag {
  id;
  offre;
  value;

  constructor(id=0, offre=0, value="") {
    this.id = id;
    this.offre = offre;
    this.value = value;
  }
  toString():string{
    return this.value
  }
}
