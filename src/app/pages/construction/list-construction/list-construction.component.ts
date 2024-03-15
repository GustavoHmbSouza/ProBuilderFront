import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConstructService } from '../../../service/construct/construct.service';
import { MessageService } from 'primeng/api';
import { retry } from 'rxjs';
import { IConstruct } from '../../../models/interfaces/IConstruct.terface';

@Component({
  selector: 'app-list-construction',
  templateUrl: './list-construction.component.html',
  styleUrl: './list-construction.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ListConstructionComponent implements OnInit {

  constructs: IConstruct[] = [];

  constructor(private constructService: ConstructService, private messageService: MessageService) { }

  ngOnInit() {
    this.getConstructData();
  }

  getConstructData(): void {
    this.constructService.getConstruct()
      .pipe(
        retry(1)
      )
      .subscribe(
        (nodeConstruct: IConstruct[]) => {
          this.constructs = nodeConstruct;
        },
        error => {
          console.error('Erro ao obter dados do backend:', error);
        }
      );
  }

}
