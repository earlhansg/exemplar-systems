import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { modules } from '@app/shared/dependencies/shared-module';
import { components } from '@app/shared/dependencies/shared-components';

@NgModule({
  declarations: [...components],
  imports: [...modules ],
  exports: [...modules, ...components],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    ...components
  ]
})
export class SharedModule {}
