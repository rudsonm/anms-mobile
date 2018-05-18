import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimalsPage,
    AnimalPage,
    AgePipe
  ],
  entryComponents: [
    MyApp,
    HomePage,
    AnimalsPage,
    AnimalPage
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadingService,
    ToastService,
    RestService,
    AuthService,
    UsuarioService    
  ]
})
export class AppModule {}
