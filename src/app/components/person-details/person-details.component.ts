import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersondetailService } from 'src/app/services/persondetail.service';
import { Person } from 'src/app/models/Person';
import { Observable } from 'rxjs';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  persons: Person[] = [];
  public isNew: boolean = false;
  public person!: Person;
  protected buttonText = '';
  public id: number | undefined;
  public isLoading = false;

  @Output() onDeleteTask: EventEmitter<Person> = new EventEmitter();

  public formGroup = new FormGroup<any>({
    id: new FormControl<number | null>(null, {
      validators: [],
      updateOn: 'change',
    }),
    firstName: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    lastName: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    nameSufix: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    streetName: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    houseNumber: new FormControl<number | null>(null, {
      validators: [],
      updateOn: 'change',
    }),
    houseNumberSufix: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    zipCode: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    city: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    country: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    telephoneNumber: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
    emailAdress: new FormControl<string>('', {
      validators: [],
      updateOn: 'change',
    }),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private persondetailService: PersondetailService
  ) {}

  ngOnInit(): void {
    this.formGroup.controls['id'].disable();
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id') == 'new') {
        this.isNew = true;
      } else {
        this.id = parseInt(params.get('id') ?? '', 10);
        this.persondetailService.getPerson(this.id).subscribe((person) => {
          this.person = person;
          this.formGroup.setValue(person);
        });
      }
    });
  }


  // onDelete(person: any) {
  //   this.onDeleteTask.emit(person);
  // }

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

  updatePersonDetails() {
    this.isLoading = true;
    if (this.isNew) {
      this.persondetailService
        .newPersonDetails(this.formGroup.value)
        .subscribe();
    } else {
      this.persondetailService
        .updatePersonDetails(this.formGroup.getRawValue())
        .subscribe();
    }
    this.startUpdatingButton();
  }

  private startUpdatingButton() {
    let count = 0;

    const interval = setInterval(() => {
      if (count >= 10) {
        // After 2 seconds (10 * 0.2s)
        clearInterval(interval);
        setTimeout(() => {this.buttonText = 'Opslaan'}, 0);
      } else {
        const currentDots = '.'.repeat(count % 4); // Cycles through "", ".", "..", "..."
        this.buttonText = 'Opslaan' + currentDots;
        // Replace this with actual button text update in UI
        count++;
      }

    }, 200);

  }
}
