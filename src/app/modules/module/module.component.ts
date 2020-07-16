import { Component, Input } from '@angular/core';
import { Module } from 'src/app/model/module';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {

  @Input() module: Module;

  getIcons(module: Module) {
    return this.module.icon.split(',');
  }
}
