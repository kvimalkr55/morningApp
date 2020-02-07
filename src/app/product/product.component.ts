import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    {
          brand: 'Nokia',
          Model: 'X2',
          price: 2000,
          desc: "Some small description goes here",
          reviews: 100,
          orders: 50,
          offerprice: 1000,
          img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
    },
    {
      brand: 'Samsung',
      Model: 'guru',
      price: 2000,
      desc: "Some small description goes here",
      reviews: 100,
      orders: 50,
      offerprice: 1000,
      img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
},
{
  brand: 'Samsung',
  Model: 'guru',
  price: 2000,
  desc: "Some small description goes here",
  reviews: 100,
  orders: 50,
  offerprice: 1000,
  img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
},
{
  brand: 'Samsung',
  Model: 'guru',
  price: 2000,
  desc: "Some small description goes here",
  reviews: 100,
  orders: 50,
  offerprice: 1000,
  img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
},
{
  brand: 'Samsung',
  Model: 'guru',
  price: 2000,
  desc: "Some small description goes here",
  reviews: 100,
  orders: 50,
  offerprice: 1000,
  img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
},
{
  brand: 'Samsung',
  Model: 'guru',
  price: 2000,
  desc: "Some small description goes here",
  reviews: 100,
  orders: 50,
  offerprice: 1000,
  img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
},
{
  brand: 'Samsung',
  Model: 'guru',
  price: 2000,
  desc: "Some small description goes here",
  reviews: 100,
  orders: 50,
  offerprice: 1000,
  img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
},
{
  brand: 'Samsung',
  Model: 'guru',
  price: 2000,
  desc: "Some small description goes here",
  reviews: 100,
  orders: 50,
  offerprice: 1000,
  img: 'https://www.91-img.com/gallery_images_uploads/5/b/5b9330d505af87301addc5e5b7743e30e2f95731.jpeg?tr=h-550,w-0,c-at_max'
}

  ]
  constructor() { 

    
  }

  ngOnInit() {
  }

}
