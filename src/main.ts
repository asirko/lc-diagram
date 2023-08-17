import { bootstrapApplication } from '@angular/platform-browser';
import { coreConfig } from './app/core/core.config';
import { CoreComponent } from './app/core/core.component';

bootstrapApplication(CoreComponent, coreConfig)
  .catch((err) => console.error(err));
