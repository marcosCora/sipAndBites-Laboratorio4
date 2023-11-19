import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carouselImage } from 'src/app/models/carouselImage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  
  @Input() images : carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000; //default to 3 s

  selectedIndex = 0;

  constructor(private router : Router){}
  
  ngOnInit() : void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  //changes slide every 3 s
  autoSlideImages() : void {
    setInterval( () => {
      this.onNextClick();
    }, this.slideInterval);
  }


  //sets index of image on dot/indicator click
  selectImage(index : number) : void{
      this.selectedIndex = index;
  }

  onPrevClick() : void {
      if(this.selectedIndex === 0){
        this.selectedIndex = this.images.length - 1;
      }else{
        this.selectedIndex--;
      }
  }

  onNextClick() : void {
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

  goToProduct(type: string, id : string) : void {
    this.router.navigate([`${type}/${id}`]);
    console.log("entra??")
  }

}
