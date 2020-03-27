import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { FeatureProduct } from './feature-product';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss']
})
export class FeatureProductComponent implements OnInit {

  featureProducts: FeatureProduct[] = [
    {name: "iPhone 11 Pro", imageUrl: "iPhone11Pro.jpg", slogan: "相機、顯示器、效能，一切Pro如其名"},
    {name: "iPad Pro", imageUrl: "ipadPro.jpg", slogan: "你的下一部電腦，非電腦"}
    
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
}
