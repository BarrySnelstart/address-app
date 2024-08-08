export class Person {
  private _id?: string;
  public firstName: string;
  public lastName: string;
  nameSufix?: string;
  streetName: string;
  houseNumber: number;
  houseNumberSufix?: string;
  zipCode: string;
  city: string;
  country: string;
  telephoneNumber: string;
  emailAdress: string;

  constructor(obj: any) {
    this._id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.nameSufix = obj.nameSufix;
    this.streetName = obj.streetName;
    this.houseNumber = obj.houseNumber;
    this.houseNumberSufix = obj.houseNumberSufix;
    this.zipCode = obj.zipCode;
    this.city = obj.city;
    this.country = obj.country;
    this.telephoneNumber = obj.telephoneNumber;
    this.emailAdress = obj.emailAdress;
  }
  get id(): string{
    return this._id ?? '';
  }

  set id(id: string){
    this._id = id;
  }

  get fullName(): string {
    if (this.nameSufix) {
      return `${this.firstName} ${this.nameSufix} ${this.lastName}`;
    }
    return `${this.firstName} ${this.lastName}`;
  }
}
