import { Inject, Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { API_KEY, BASE_URL } from '@tokens/environment.token';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(@Inject(API_KEY) private apiKey: string, @Inject(BASE_URL) private baseUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!req.url.startsWith('http')) {
      const modifiedUrl = `${this.baseUrl}${req.url}?api_key=${this.apiKey}`;
      const modifiedReq = req.clone({ url: modifiedUrl });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }
}
