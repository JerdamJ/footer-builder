import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipe/safe.pipe';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { MatIconModule } from '@angular/material/icon';
import { ModulesComponent } from './modules/modules.component';
import { HeaderComponent } from './header/header.component';
import { ModuleComponent } from './modules/module/module.component';
import { WorkspaceComponent } from './workspace/workspace.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ColorPickerModule } from 'ngx-color-picker';
import { SeparatePipe } from './pipe/separate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    PreviewComponent,
    SettingsComponent,
    ModulesComponent,
    HeaderComponent,
    ModuleComponent,
    WorkspaceComponent,
    SeparatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MatIconModule,
    CKEditorModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
