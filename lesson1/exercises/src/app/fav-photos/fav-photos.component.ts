import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Bunny's Photos";
  image1 = 'https://i.scdn.co/image/ab6761610000e5eb9e3acf1eaf3b8846e836f441';
  image2 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1236509239.jpg?crop=1xw:1xh;center,top&resize=480:*';
  image3 = 'https://img.buzzfeed.com/buzzfeed-static/static/2020-12/11/16/campaign_images/bae355bd64c3/with-folklore-taylor-swift-has-completed-her-tran-2-3190-1607702418-5_dblbig.jpg';

  constructor() { }

  ngOnInit() {
  }

}