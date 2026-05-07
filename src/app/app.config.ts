import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import{provideMomentDateAdapter} from '@angular/material-moment-adapter';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withComponentInputBinding()),{provide:MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue:{subscriptSizing: 'dynamic'}},
    provideHttpClient(withFetch()),
    provideMomentDateAdapter({
      parse:{
        dateInput:['DD-MM-YYYY']
      },
      display:{
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MM-YYYY',
        dateA11yLabel:'LL',
        monthYearA11yLabel:'MMMM-YYYY'
      }

    }),
    provideHttpClient(withFetch()),
  ]
};
