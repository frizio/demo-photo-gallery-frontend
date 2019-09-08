import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos';

  constructor(
    private http: HttpClient
  ) { }

  createPhoto(title: string, description: string, photo: File) {
    // Send FormData instead of JSON
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', photo);
    return this.http.post(this.URI, formData);
  }

}
