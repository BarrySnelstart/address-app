import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PERSONS } from 'src/app/mock-persons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit{
  persons: Person[] = PERSONS;

  constructor (private router: Router) { }

  ngOnInit(): void {}

  personDetails(id : number): void{
    this.router.navigate(['details']);
    //this.barrydetails.push({city: 'Den helder', id: 1, firstName: 'barry', lastName: 'kramer'})
    // this.barrydetails.city = "Den Helder";
    // this.barrydetails.firstName = "barry";
    // this.barrydetails.lastName = "Kramer";
    //console.log(this.barrydetails);
 }

}
