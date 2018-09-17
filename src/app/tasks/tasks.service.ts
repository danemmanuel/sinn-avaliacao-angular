import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TasksService {

  constructor(private http:  HttpClient) { }

  getTasks(){
  let returner = this.http.get('https://jsonplaceholder.typicode.com/todos')
  console.log(returner)
  return returner
   
  }

}
