// import { inject, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClientModule, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
// import { FavouriteService } from './favourite.service';


// describe('FavouriteService', () => {
//     const httpOptions ={
//         headers : new HttpHeaders({
//         token : sessionStorage['token']
//         })
//       }
//     beforeEach(() => TestBed.configureTestingModule({
//         imports: [HttpClientModule],
//         providers:[
//             FavouriteService,
//             HttpTestingController
//         ]
//     }));
// //   
//       it(
//         'should get favourite list by username',
//         inject(
//           [HttpTestingController, FavouriteService],
//           (httpMock: HttpTestingController,  favouriteService:  FavouriteService) => {
//             const mockFavData =[
//                 {favid:1,quizname:'Brain Teaser',username:'vaishali'},
//                 {favid:2,quizname:'General Knowledge',username:'vaishali'}
//             ]

//             favouriteService.getFavourite('vaishali').subscribe( (res: any)=> {
//                 expect(res).toEqual(mockFavData);
//             });

//             const mockReq = httpMock.expectOne("http://localhost:8080/api/fav/username/vaishali");
//             expect(mockReq.cancelled).toBeFalsy();
//             expect(mockReq.request.responseType).toEqual('json');
//             mockReq.flush(mockFavData);
//             httpMock.verify();
//           }
//         )
//       );
//   });


//----------------------------------------------------

// Http testing module and mocking controller
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// // Other imports
// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// describe('HttpClient testing', () => {
//     let httpClient: HttpClient;
//     let httpTestingController: HttpTestingController;

//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [ HttpClientTestingModule ]
//       });

//       // Inject the http service and test controller for each test
//       httpClient = TestBed.inject(HttpClient);
//       httpTestingController = TestBed.inject(HttpTestingController);
//     });
//     /// Tests begin ///

//     it('can test HttpClient.get', () => {
//         const mockFavData:any =[
//                             {favid:1,quizname:'Brain Teaser',username:'vaishali'},
//                             {favid:2,quizname:'General Knowledge',username:'vaishali'}
//                         ]

//         // Make an HTTP GET request
//         httpClient.get<any>('http://localhost:8080/api/fav/username/vaishali')
//           .subscribe(data =>
//             // When observable resolves, result should match test data
//             expect(data).toEqual(mockFavData)
//           );

//         // The following `expectOne()` will match the request's URL.
//         // If no requests or multiple requests matched that URL
//         // `expectOne()` would throw.
//         const req = httpTestingController.expectOne('http://localhost:8080/api/fav/username/vaishali');

//         // Assert that the request is a GET.
//         expect(req.request.method).toEqual('GET');

//         // Respond with mock data, causing Observable to resolve.
//         // Subscribe callback asserts that correct data was returned.
//         req.flush(mockFavData);

//         // Finally, assert that there are no outstanding requests.
//         httpTestingController.verify();

//       });
//   });

//----------------------------------
//Http testing module and mocking controller
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// // Other imports
// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { FavouriteService } from './favourite.service';

// describe('Show-Fav-list', () => {

//     let favouriteService: FavouriteService
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         imports: [ HttpClientTestingModule ],
//         providers:[ FavouriteService ]
//       });

//       favouriteService = TestBed.get(favouriteService)

//     });
//     /// Tests begin ///

//     it('can test HttpClient.get', () => {
//         const mockFavData:any =[
//                             {favid:1,quizname:'Brain Teaser',username:'vaishali'},
//                             {favid:2,quizname:'General Knowledge',username:'vaishali'}
//                         ]

//         // Make an HTTP GET request
//         favouriteService.getFavourite('vaishali')
//           .subscribe(data =>
//             // When observable resolves, result should match test data
//             expect(data).toEqual(mockFavData)
//           );

//         // The following `expectOne()` will match the request's URL.
//         // If no requests or multiple requests matched that URL
//         // `expectOne()` would throw.
//         const req = httpTestingController.expectOne('http://localhost:8080/api/fav/username/vaishali');

//         // Assert that the request is a GET.
//         expect(req.request.method).toEqual('GET');

//         // Respond with mock data, causing Observable to resolve.
//         // Subscribe callback asserts that correct data was returned.
//         req.flush(mockFavData);

//         // Finally, assert that there are no outstanding requests.
//         httpTestingController.verify();

//       });
//   });
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { HtmlParser } from '@angular/compiler';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FavouriteService } from './favourite.service';

describe('FavouriteService', () => {
    let service: FavouriteService;
    let httpMockk: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [HttpTestingController]
        });
        service = TestBed.inject(FavouriteService);
        httpMockk = TestBed.inject(HttpTestingController);
        //service = TestBed.get(FavouriteService);
    });

    it('should be created favourite service', () => {
        expect(service).toBeTruthy();
    });


    // it('be able to retrieve posts from the API bia GET', () => {
    //     const mockFavData = [
    //         { favid: 1, quizname: 'Brain Teaser', username: 'vaishali', imgUrl: 'xyz' },
    //         { favid: 2, quizname: 'General Knowledge', username: 'vaishali', imgUrl: 'abc' }
    //     ];
    //     service.getFavourite('vaishali').subscribe(res => {
    //         expect(res).toEqual(mockFavData);
    //     });
    // });
});
