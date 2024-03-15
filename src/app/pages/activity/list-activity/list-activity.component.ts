import { Component } from '@angular/core';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrl: './list-activity.component.css'
})
export class ListActivityComponent {


  sceneEnumSelected: string = '';
  activities: any;

}
