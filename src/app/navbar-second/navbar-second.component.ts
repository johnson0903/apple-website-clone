import { Component, OnInit, Input } from '@angular/core';
import { ModelService } from "../model.service";
@Component({
  selector: 'app-navbar-second',
  templateUrl: './navbar-second.component.html',
  styleUrls: ['./navbar-second.component.scss']
})
export class NavbarSecondComponent implements OnInit {
  @Input() category;
  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.modelService.getModels(this.category);
  }

}
