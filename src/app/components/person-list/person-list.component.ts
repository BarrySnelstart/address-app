import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { Router } from '@angular/router';
import { PersondetailService } from 'src/app/services/persondetail.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  public persons: Person[] = [];

  constructor(
    private router: Router,
    private persondetailService: PersondetailService
  ) {}

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons(): void {
    this.persondetailService.getPersons().subscribe((persons) => {
      this.persons = persons.map((person: any) => new Person(person));
    });
  }

  public personDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
  getBack() {
    this.router.navigate(['list']);
  }
  deleteTask(person: Person) {
    this.persondetailService.deletePerson(person).subscribe(() => {
      this.persons = this.persons.filter((t) => t.id !== person.id);
      this.getBack();
    });
  }
  deleteConfirmMessage(person: Person) {
    if (confirm('Are you sure to delete ' + person.firstName)) {
      this.deleteTask(person);
    }
  }
}
