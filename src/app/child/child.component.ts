import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() loggedIn: boolean | undefined;
  @Output() greetEvent= new EventEmitter();
  name = 'Test1';
  constructor() { }

  

  ngOnInit(): void {
  }

  callParentGreet(){
    this.greetEvent.emit(this.name);
  }

}
