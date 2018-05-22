import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnimalsPage } from '../pages/animals/animals';
import { AnimalPage } from '../pages/animals/animal/animal';
import { HttpModule } from '@angular/http';
import { AgePipe } from './pipes/age.pipe';
import { UsuarioService } from './services/usuario.service';
import { AuthService } from './services/auth.service';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from './services/loading.service';
import { ToastService } from './services/toast.service';
import { DonatePage } from '../pages/animals/donate/donate';
import { CandidateModal } from '../pages/animals/candidate/candidate';
import { SignUpModal } from '../pages/home/signup/signup.modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimalsPage,
    AnimalPage,
    DonatePage,
    AgePipe,
    CandidateModal,
    SignUpModal
  ],
  entryComponents: [
    MyApp,
    HomePage,
    AnimalsPage,
    AnimalPage,
    DonatePage,
    CandidateModal,
    SignUpModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingService,
    ToastService,
    RestService,
    AuthService,
    UsuarioService
  ]
})
export class AppModule {}
