import { Component, OnInit } from '@angular/core';
import { Module } from '../model/module';
import { FlotiqService } from '../service/flotiq.service';
import { Response } from '../model/response';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  modules: Module[];
  pending = true;
  moduleIcons = [];

  constructor(private flotiqService: FlotiqService) { }

  ngOnInit() {
    this.flotiqService.getModules()
    .subscribe((data: Response) => {
      this.modules = data.data;
      this.pending = false;
    });
  }
}
