import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service'
import { Observable } from 'rxjs'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {
  tasks:any
  task:any
  status:boolean = false
  status2:boolean = true

  order: string = 'id';

  constructor(private tasksService:TasksService) { }

  ngOnInit() {

    this.allTasks()
    
  }

  openTasks(){
  this.status = false
  this.status2 = false
   
  }
  closeTasks(){
    this.status = true
    this.status2 = true
  
  }

  allTasks(){
  this.status = true
  this.status2 = false
    this.tasksService.getTasks().subscribe(
      data=>this.tasks = data
    )
  }

  getInfoTask(id){

    this.tasksService.getTask(id).subscribe(
      data=>this.task = data,
      
    )
    let modal = document.querySelector('.modal')
    modal.classList.add('opened')
  }

  closeModal(){
    let modal = document.querySelector('.modal')
    modal.classList.remove('opened')
  }

}
