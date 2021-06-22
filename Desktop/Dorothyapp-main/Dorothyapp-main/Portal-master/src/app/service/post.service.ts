import { PostModel, PostModelSend } from '../models/model/post.model';

import { Injectable, EventEmitter, Pipe } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap, take, tap, } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse,} from '@angular/common/http';

// interface PostData {
//   availableFrom: string;
//   availableTo: string;
//   description: string;
//   imageUrl: string;
//   name: string;
//   userId: string;
// }

@Pipe({
  name: 'sortgrid'
})

@Injectable({
  providedIn: 'root'
})
export class PostService {

  response: any = {};
  postUrl: string = ""
  apikey: string = ""

  constructor(private http: HttpClient) { }
  
  
  getPosts() {
    // return this._posts.asObservable(); //gives us a subscribable object - but will not allow us to emmit new events
    this.response = this.http.get<PostModel[]>(this.postUrl, 
                      {"headers": {"x-apikey": this.apikey,
                       "cache-control": "no-cache",
                       },
                       })
          return this.response
  }


  postChildInfo(post: PostModelSend): Observable<PostModelSend>{
        console.log("we made it to the service!")
        return this.http.post<PostModelSend>(this.postUrl, post, 
                      {"headers": {"x-apikey":this.apikey,
                        "cache-control": "no-cache",
                      },
                      })
                      .pipe(
                        catchError(this.handleError)
                      )
      }
    
      handleError(error: HttpErrorResponse) {
        console.log("were in the handleerror func")
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.message}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }


}



// @Injectable({
//   providedIn: 'root'
// })
// export class ChildInfoService {

//   response: any = {};
//   childUrl: string = "https://seventeenminds-47e7.restdb.io/rest/children"
//   apikey: string = "5f51380bc5e01c1e033b8c07"

//   constructor(private http: HttpClient) { }


//   getAllChildInfo() {
//     this.response = this.http.get<Child[]>(this.childUrl, 
//                 {"headers": {"x-apikey": this.apikey,
//                  "cache-control": "no-cache",
//                  },
//                  })
//     return this.response
//   }

//   postChildInfo(child: PostChild): Observable<PostChild>{
//     console.log("we made it to the service!")
//     return this.http.post<PostChild>(this.childUrl, child, 
//                   {"headers": {"x-apikey":this.apikey,
//                     "cache-control": "no-cache",
//                   },
//                   })
//                   .pipe(
//                     catchError(this.handleError)
//                   )
//   }

//   handleError(error: HttpErrorResponse) {
//     console.log("were in the handleerror func")
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong.
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.message}`);
//     }
//     // Return an observable with a user-facing error message.
//     return throwError(
//       'Something bad happened; please try again later.');
//   }
// }