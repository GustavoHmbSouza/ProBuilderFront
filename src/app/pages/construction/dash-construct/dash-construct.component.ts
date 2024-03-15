import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { ConstructService } from '../../../service/nodeConstruct/nodeConstruct.service';
import { retry } from 'rxjs';
import { INodeConstruct } from '../../../models/interfaces/INodeConstruct.interface';

@Component({
  selector: 'app-dash-construct',
  templateUrl: './dash-construct.component.html',
  styleUrl: './dash-construct.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DashConstructComponent {
  nodeConstruct!: TreeNode[];

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
      this.messageService.add({ severity: 'info', summary: event.node.label, detail: event.node.id_residence });
    }
  }

  getConstructData(): void {
    this.constructService.getNodeConstruct()
      .pipe(
        retry(1)
      )
      .subscribe(
        (nodeConstruct: INodeConstruct[]) => {
          this.nodeConstruct = nodeConstruct;
        },
        error => {
          console.error('Erro ao obter dados do backend:', error);
        }
      );
  }
}
