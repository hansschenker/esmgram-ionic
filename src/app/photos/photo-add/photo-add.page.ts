import { Component, OnInit } from "@angular/core";

import { PhotoService } from "../photo.service";

@Component({
  selector: "app-photo-add",
  templateUrl: "./photo-add.page.html",
  styleUrls: ["./photo-add.page.scss"]
})
export class PhotoAddPage implements OnInit {
  currentImage: any;

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }
}
