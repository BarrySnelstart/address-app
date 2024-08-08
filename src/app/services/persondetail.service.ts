import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.apiUrl + '/' + id);
  }

  updatePersonDetails(person: Person): Observable<Person> {
    const url = `${this.apiUrl}/${person.id}`;
    return this.http.put<Person>(url, person, httpOptions);
  }

  newPersonDetails(person: Person): Observable<Person> {
    person.id = this.generateID();
    return this.http.post<Person>(this.apiUrl, person, httpOptions);
  }

  generateID(): number {
    const generatedid = Math.random() * 100;
    return Math.round(generatedid);
  }
}
