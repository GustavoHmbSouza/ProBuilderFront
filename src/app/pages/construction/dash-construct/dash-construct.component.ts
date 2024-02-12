import { Component } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { ConstructService } from '../../../service/construct/construct.service';
import { retry } from 'rxjs';
import { IConstruct } from '../../../models/interfaces/construct.interface';

@Component({
  selector: 'app-dash-construct',
  templateUrl: './dash-construct.component.html',
  styleUrl: './dash-construct.component.css'
})
export class DashConstructComponent {
  construct!: TreeNode[];

  selectedFile!: TreeNode;

  constructor(private constructService: ConstructService, private messageService: MessageService) { }

  ngOnInit() {
    this.getConstructData();
  }

  nodeSelect(event: any) {
    if (event.node.id_residence) {
      this.messageService.add({ severity: 'info', summary: event.node.label, detail: event.node.id_residence });
    }
  }

  nodeUnselect(event: any) {
    if (event.node.id_residence) {
      console.log("teste")
      this.messageService.add({ severity: 'info', summary: event.node.label, detail: event.node.id_residence });
    }
  }

  getConstructData(): void {
    this.constructService.getConstruct()
      .pipe(
        retry(1)
      )
      .subscribe(
        (construct: IConstruct[]) => {
          this.construct = construct;
        },
        error => {
          console.error('Erro ao obter dados do backend:', error);
        }
      );
  }
}
