import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PERSONS } from 'src/app/mock-persons';
import { Person } from 'src/app/models/Person';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit{
  persons: Person[] = PERSONS;
  public id: number | undefined;
  constructor (private router: Router, private activatedRoute: ActivatedRoute) {
  }

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params => {
    // let id = params.get('id');
    this.id = parseInt(params.get('id')??'',10) ;
  });
}

getBack () {
  this.router.navigate(['list']);
}
}

