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

  constructor(private tasksService:TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
      data=>this.tasks = data
    )
    
  }

}
