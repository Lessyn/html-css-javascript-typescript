import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";
import { PhotoComment} from "./photo-comment"



const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })

export class PhotoService {

    constructor(private _http: HttpClient) { }

    listFromUser(userName: string) {

        return this._http
            .get<Photo[]>(API + '/' + userName + '/photos');

    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
        .append('page', page.toString());
        return this._http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });

    }

    upload(description: string, allowComments: boolean, file: File){

        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments? 'true' : 'false');
        formData.append('imageFile', file);

        return this._http.post(API+ '/photos/upload', formData);
    }

    findById(photoId: number){
        return this._http.get<Photo>(API + '/photos/' +photoId);
    }

    getComments(photoId: number) {
        return this._http.get<PhotoComment[]>(API +'/photos' + photoId + 'comments');
    }
}
