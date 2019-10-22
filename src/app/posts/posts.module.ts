import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
// ionic routing
import { IonicModule } from "@ionic/angular";
import { PostsComponent } from "./posts.component";

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, IonicModule, PostsRoutingModule],
  exports: [PostsComponent]
})
export class PostsModule {}
