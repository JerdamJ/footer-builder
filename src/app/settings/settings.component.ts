import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Module} from '../model/module';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @Output() updated = new EventEmitter<string>();
  @Input() module: Module;
  public editor = ClassicEditor;
  public editorConfig = {
    toolbar: ['heading', 'bold', 'italic', 'link']
  };

  alignSelect = ['left', 'center', 'right'];

  apply() {
    this.updated.emit('updated');
  }
}
