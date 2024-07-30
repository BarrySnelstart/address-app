import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersondetailService {
  private apiUrl = 'http://localhost:5000/persons'
  constructor(private http:HttpClient) {}

  getPersons() : Observable<Person[]> {
return this.http.get<Person[]>(this.apiUrl);
  }
}
