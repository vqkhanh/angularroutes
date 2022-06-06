import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorHandler, Component } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostsComponent},
      {path: '**', component: NotFoundComponent}
      
    ])
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }