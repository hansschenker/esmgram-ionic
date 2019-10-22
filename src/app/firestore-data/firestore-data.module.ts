import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//  fire module firestore module, Storage module
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../../environments/environment";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ]
})
export class FirestoreDataModule {}
