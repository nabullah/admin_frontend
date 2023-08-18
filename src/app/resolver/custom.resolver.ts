import { ResolveFn } from '@angular/router';

export const customResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
