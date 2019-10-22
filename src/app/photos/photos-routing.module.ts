import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhotoAddPage } from "./photo-add/photo-add.page";
import { PhotoAddPageModule } from "./photo-add/photo-add.module";

const routes: Routes = [{ path: "", component: PhotoAddPage }];

@NgModule({
  imports: [PhotoAddPageModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {}
