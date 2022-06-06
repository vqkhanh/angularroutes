import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowerService } from 'src/app/services/github-follower.service';
import { NotFoundError } from '../../common/not-found-error';
import { AppError } from '../../common/app-error';


@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowerService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {

      });

      this.route.queryParamMap.
      subscribe(params => {

      });


    this.service.getAll('https://api.github.com/users/mosh-hamedani/followers')
      .subscribe({
        next: (res: any) => {
          // this.display(res);
          console.log("followers:",res);
          this.followers = res;
        }, // success path
        error:(error: AppError) => {
          if (error instanceof NotFoundError){
            alert("Not found.");
          }
        }, // error path
      });
  }

}
