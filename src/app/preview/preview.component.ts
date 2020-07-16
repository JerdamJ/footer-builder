import {Component, Input, OnInit} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Module } from '../model/module';
import { BuilderService } from '../service/builder.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  html: SafeHtml = '';
  maxWidth: number;
  previewMaxWidth: number = null;
  selectedModules: Module[];

  constructor(private builderService: BuilderService) { }

  ngOnInit() {
    this.builderService.htmlChanged.subscribe((html) => {
      this.html = html;
    });

  }

  changePreviewWidth(width = null) {
    this.previewMaxWidth = width;
  }

  get() {
    const html: any = this.html;
    const jszip = new JSZip();
    jszip.file('template.html', html);
    jszip.generateAsync({ type: 'blob' })
      .then((content) => {
        saveAs(content, 'template.zip');
    });
  }
}
