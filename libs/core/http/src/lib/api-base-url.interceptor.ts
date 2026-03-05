import { inject } from '@angular/core';

import { API_BASE_URL } from './api-base-url.token';

import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Prefija requests relativas ("/api/...") con un baseUrl si se provee.
 * En dev lo dejaremos vacío (proxy). En prod podrías setearlo.
 */
export const apiBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
    const baseUrl = inject(API_BASE_URL, { optional: true }) ?? '';
    if (!baseUrl) return next(req);

    // Solo prefijar URLs relativas (no tocar http/https)
    if (/^https?:\/\//i.test(req.url)) return next(req);

    const url =
        req.url.startsWith('/') ? `${baseUrl}${req.url}` : `${baseUrl}/${req.url}`;

    return next(req.clone({ url }));
};