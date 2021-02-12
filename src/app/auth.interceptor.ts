import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intersept request', req);

    const cloned = req.clone({
      headers: req.headers.append('Auth', 'SOME RANDOM TOKEN'),
    });

    return next.handle(cloned).pipe(
      // является стримом
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Interseptor response', event);
        }
      })
    );
  }
}
