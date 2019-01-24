import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from "@angular/forms";

import { CommonModule as COMMON } from '@angular/common';

const modules = [
  COMMON
  // FormsModule
];

import { NavHeaderComponent } from "./nav-header.component";
export { NavHeaderComponent } from "./nav-header.component";
// import { DefaultToolbarComponent } from "./default-toolbar.component";
// export { DefaultToolbarComponent } from "./default-toolbar.component";
// import { DefaultContentToolbarComponent } from "./default-content.component";
// export { DefaultContentToolbarComponent } from "./default-content.component";

const components = [
  NavHeaderComponent,
  // DefaultToolbarComponent,
  // DefaultContentToolbarComponent,
];


@NgModule({
  imports: [
    modules
  ],
  declarations: [
    components
  ],
  exports: [
    components
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class CommonModule {
}
