import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts.component";

const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
    children: [
      {
        path: "post-add",
        loadChildren: "./posts/post-add/post-add.module#PostAddPageModule"
      },
      {
        path: "post-list",
        loadChildren: "./posts/post-list/post-list.module#PostListPageModule"
      },
      {
        path: "post-details",
        loadChildren:
          "./posts/post-details/post-details.module#PostDetailsPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
