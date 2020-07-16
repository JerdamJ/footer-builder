import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import * as cloneDeep from 'lodash/cloneDeep';


@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  htmlChanged = new Subject<SafeHtml>();

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(cloneDeep(event.previousContainer.data),
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
