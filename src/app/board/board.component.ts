import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lists: ListComponent[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addList() {
    var newList = new ListComponent();
    this.lists.push(newList);
  }
}
