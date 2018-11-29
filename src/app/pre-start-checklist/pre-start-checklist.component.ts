import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-start-checklist',
  templateUrl: './pre-start-checklist.component.html',
  styleUrls: ['./pre-start-checklist.component.css']
})
export class PreStartChecklistComponent implements OnInit {
  clicked : boolean = false;
  message : string = "";
  submitted : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  doSomething() {
    this.message = "I'd love to experiment more with the HTTP client but I'm running out of time. I'll be covering more server side angular in coming weeks as I'm studing mobile systems (angular/ionic) over the summer at uni."
    this.submitted = !this.submitted;
  }

}
