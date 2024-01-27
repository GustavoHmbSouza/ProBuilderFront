import { Component, OnInit } from '@angular/core';
import { ConstructService } from '../../../service/construct/construct.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrl: './list-activity.component.css'
})
export class ListActivityComponent implements OnInit {

  constructor(private constructService: ConstructService) { }

  sceneEnumSelected: string = '';
  activities: any;

  ngOnInit() {
    this.constructService.getActivity().subscribe(users => {
      this.activities = users;
      console.log(this.activities)
    });
  }

}
