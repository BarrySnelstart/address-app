import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersondetailService } from 'src/app/services/persondetail.service';
import { Person } from 'src/app/models/Person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  @Output() onDeleteTask: EventEmitter<Person> = new EventEmitter();

  persons: Person[] = [];
  public id: number | undefined;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private persondetailService: PersondetailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id') ?? '', 10);
      this.persondetailService
        .getPersons()
        .subscribe((persons) => (this.persons = persons));
    });
  }
  onDelete(person: any) {
    this.onDeleteTask.emit(person);
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
  updatePersonDetails (person: Person){
    person.city = "Aaaanaaa pauuuulowna"
    this.persondetailService.updatePersonDetails(person).subscribe();
  }
}
