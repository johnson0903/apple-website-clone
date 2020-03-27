import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-navbar-top",
  templateUrl: "./navbar-top.component.html",
  styleUrls: ["./navbar-top.component.scss"]
})
export class NavbarTopComponent implements OnInit {
  categories = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music"];
  faApple = faApple;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  constructor(public _router: Router) {
    console.log(_router.url);
  }

  ngOnInit(): void {}
}
