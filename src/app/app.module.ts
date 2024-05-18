import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { HomeComponent } from './pages/home/home.component';
import { StatsComponent } from './pages/stats/stats.component';
import { BoardComponent } from './pages/board/board.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddModalComponent } from './add-modal/add-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomnavComponent,
    HomeComponent,
    StatsComponent,
    BoardComponent,
    ProfileComponent,
    SplashScreenComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
