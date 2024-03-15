import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeConstructService } from '../../../service/nodeConstruct/nodeConstruct.service';
import { retry } from 'rxjs';
import { INodeConstruct } from '../../../models/interfaces/INodeConstruct.interface';

@Component({
  selector: 'app-dash-construct',
  templateUrl: './dash-construct.component.html',
  styleUrl: './dash-construct.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DashConstructComponent implements OnInit {
  nodeConstruct!: TreeNode[];

  selectedFile!: TreeNode;

  constructor(private nodeConstructService: NodeConstructService, private messageService: MessageService) { }

  ngOnInit() {
    this.getNodeConstructData();
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

  getNodeConstructData(): void {
    this.nodeConstructService.getNodeConstruct()
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
