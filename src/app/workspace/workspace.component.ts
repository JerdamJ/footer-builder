import { Component } from '@angular/core';
import { Module } from '../model/module';
import { PreviewService } from '../service/preview.service';
import { BuilderService } from '../service/builder.service';


@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {

  selectedModules: Module[] = [];
  moduleSettings: Module = null;

  constructor(
    private builderService: BuilderService,
    private previewService: PreviewService) { }

  drop(event) {
    this.builderService.drop(event);
    this.refreshPreview();
  }

  openSettings($event, module) {
    $event.stopPropagation();
    this.moduleSettings = this.moduleSettings === module ? null : module;
  }

  removeModule(index: number) {
    this.selectedModules.splice(index, 1);
    this.refreshPreview();
  }

  refreshPreview() {
    this.previewService.refresh(this.selectedModules)
      .subscribe((data: any) => {
        this.builderService.htmlChanged.next(data.html);
    });
  }

  closeSettings() {
    this.moduleSettings = null;
  }

}
