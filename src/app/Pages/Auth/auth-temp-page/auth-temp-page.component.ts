import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-auth-temp-page',
  templateUrl: './auth-temp-page.component.html',
  styleUrl: './auth-temp-page.component.css',
})
export class AuthTempPageComponent implements OnInit {
  
  show: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private JWTService: JwtHelperService,

  ) {}
  ngOnInit(): void {
    const hashFragment = window.location.hash.substring(1); // Remove the # symbol
    const params = new URLSearchParams(hashFragment);

    if (window.location.href.includes('github'))
      this.route.queryParams.subscribe((params2) => {
        console.log(JSON.parse(params2['tokenization'])['user']); // { order: "popular" }
      });

    const authUser = params.get('id_token');

    console.log(this.JWTService.decodeToken(authUser!));


      
        this.show = this.router.url.toLowerCase().includes('google') ? true : false;

  }
}
