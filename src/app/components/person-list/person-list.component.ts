import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';
import { PERSONS } from 'src/app/mock-persons';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit{
  persons: Person[] = PERSONS;

  constructor () { }

  ngOnInit(): void {}


}
