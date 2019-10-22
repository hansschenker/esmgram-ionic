import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
// ionic
import { IonicModule } from "@ionic/angular";
// app
import { PhotoAddPage } from "./photo-add.page";

const routes: Routes = [
  {
    path: "",
    component: PhotoAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhotoAddPage],
  exports: [PhotoAddPage]
})
export class PhotoAddPageModule {}
