export class LibraryUsed{
  public name: string;
  public description: string;
  public version: string;

  constructor(name: string, description?: string, version?: string){
    this.name = name;
    this.description = description;
    if(version === null){
      this.version = version;
    } else {
      this.version = 'Sin especificar';
    }
  }
}
