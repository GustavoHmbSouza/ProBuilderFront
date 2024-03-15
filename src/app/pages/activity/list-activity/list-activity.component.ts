import { Component } from '@angular/core';
import { ConstructService } from '../../../service/nodeConstruct/nodeConstruct.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrl: './list-activity.component.css'
})
export class ListActivityComponent {

  constructor(private constructService: ConstructService) { }

  sceneEnumSelected: string = '';
  activities: any;

}
