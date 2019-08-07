import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-book-slide',
  templateUrl: './book-slide.component.html',
  styleUrls: ['./book-slide.component.css']
})
export class BookSlideComponent implements OnInit {
  @Input() book: BookSlideComponent;
  constructor() { }

  ngOnInit() {
  }

  

  async ngAfterContentInit() {
    await this.sleep(300); // TODO: Find a more effitient way
    document.getElementById('book-slide').style.backgroundColor = String(this.getAverageColourAsRGB(document.getElementById('book-cover')));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getAverageColourAsRGB(img: any) {
    img.crossOrigin = "Anonymous";
    var canvas = document.createElement('canvas'),
      context = canvas.getContext && canvas.getContext('2d'),
      rgb = { r: 102, g: 102, b: 102 }, // Set a base colour as a fallback for non-compliant browsers
      pixelInterval = 5, // Rather than inspect every single pixel in the image inspect every 5th pixel
      count = 0,
      i = -4,
      data: any, length: any;

    // return the base colour for non-compliant browsers
    if (!context) { return rgb; }

    // set the height and width of the canvas element to that of the image
    var height = canvas.height = img.naturalHeight || img.offsetHeight || img.height,
      width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;

    context.drawImage(img, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      // catch errors - usually due to cross domain security issues
      console.error(e);
      
      const r = rgb.r.toString();
      const g = rgb.g.toString();
      const b = rgb.b.toString();
  
      const output = String(`rgb(${r}, ${g}, ${b})`);
      return output;
    }

    data = data.data;
    length = data.length;
    while ((i += pixelInterval * 4) < length) {
      count++;
      rgb.r += data[i];
      rgb.g += data[i + 1];
      rgb.b += data[i + 2];
    }

    // floor the average values to give correct rgb values (ie: round number values)
    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);

    const r = rgb.r.toString();
    const g = rgb.g.toString();
    const b = rgb.b.toString(); // Todo: Fix this geto

    const output = String(`rgb(${r}, ${g}, ${b})`);
    return output;
  }
}
