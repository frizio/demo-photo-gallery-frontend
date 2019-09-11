import { IPhoto } from './../../interfaces/Photo';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  photoId: string;
  photo: IPhoto;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(
      params => {
        this.photoId = params.id;
        this.photoService.getPhoto(this.photoId).subscribe(
          res => {
            this.photo = res;
          },
          err => {
            console.log(err);
          }
        );
      }
    );

  }

  deletePhoto(id: string) {
    this.photoService.deletePhoto(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/photos']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
