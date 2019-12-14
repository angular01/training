import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-tracby',
  templateUrl: './ng-for-tracby.component.html',
  styleUrls: ['./ng-for-tracby.component.css']
})
export class NgForTracbyComponent implements OnInit {

  courses: any;

  constructor() { }

  loadCourses(){
      
    this.courses = [
      {id:1,name: "courcs1"},
      {id:2,name: "courcs2"},
      {id:3,name: "courcs3"},
      {id:4,name: "courcs4"},
      {id:5,name: "courcs5"}
    ]
  }
  
  ngOnInit() {
  }

  trackCourse(index,course)
  {
    return course ? course.id: undefined;
  }
}
