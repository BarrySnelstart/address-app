import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class PersondetailService {
  private apiUrl = 'http://localhost:5000/person';
  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  deletePerson(person: Person): Observable<Person> {
    const url = `${this.apiUrl}/${person.id}`;
    return this.http.delete<Person>(url);
  }

  updatePersonDetails (person : Person): Observable<Person>{
    const url = `${this.apiUrl}/${person.id}`;
    return this.http.put<Person>(url, person, httpOptions);
}
}
