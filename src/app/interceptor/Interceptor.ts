import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable(
  {
    providedIn: 'root'
  }
)
export class Intercepteur implements HttpInterceptor{
  constructor() {}  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        "Access-Control-Allow-Origin": "*"
      }
    });    return next.handle(request);
  }

}
