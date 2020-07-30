import { Injectable } from '@angular/core';
import {MjmlService} from './mjml.service';
import {Module} from '../model/module';
import {Property} from '../model/property';
import * as Handlebars from 'handlebars';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  constructor(private mjmlService: MjmlService) { }

  refresh(selectedModules: Module[]) {
    const mjml = this.generateMjml(selectedModules);
    return this.mjmlService.render(mjml);
  }

  generateMjml(selectedModules: Module[]) {
    let tmpMjml = '<mjml>' +
      '<mj-body>';
    selectedModules.forEach(module => {
      tmpMjml = tmpMjml + this.compile(module.template, module.properties);
    });

    tmpMjml = tmpMjml +
      '</mj-body>' +
      '</mjml>';

    return tmpMjml;
  }

  /**
   * Handlebars template compiler
   */
  compile(template: string, context: Property[]): string {
    const compiledTemplate = Handlebars.compile(template, {noEscape: true});
    console.log(compiledTemplate);
    const parameters = [];
    context.forEach((element: Property) => {
      parameters[element.key] = element.value;
    });

    return compiledTemplate(parameters);
  }
}
