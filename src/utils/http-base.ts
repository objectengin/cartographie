import { Response } from '@angular/http';
import { Observable } from 'rxjs';

export class HttpBase {
  protected extractHeaders(res:Response) {
    let headers = res.headers;
    return headers || { }; 
  }
  
  protected extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  protected handleError (error: Response | any) {
    console.log('caught error ', error);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}