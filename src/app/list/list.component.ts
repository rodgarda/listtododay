import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any[] = [];
  justClicked = false;
  doubleClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  onSubmit(newItemForm: NgForm) {
    this.items.push(newItemForm.value.newItem);
    newItemForm.reset();
  }

  viola() {
    if (this.justClicked === true) {
      this.doubleClicked = true;
      this.doubleClick();
    } else {
      this.justClicked = true;
      setTimeout(() => {
        this.justClicked = false;
        if (this.doubleClicked === false) {
          this.singleClick();
        }
        this.doubleClicked = false;
      }, 500);
    }
  }

  singleClick() {
    console.log('single');
  }

  doubleClick() {
    console.log('double');
  }

}
