import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { localStore } from '../constants/localStore';

export const coreGuard: CanActivateFn = (route, state) => {
  return true;
};

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = JSON.parse(localStorage.getItem(localStore.token) || '{}');
  if (token) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
