import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    currentPage = 0;

    images = [

      {
        title : "Mountain",
        url : "https://wallpapers.ispazio.net/wp-content/uploads/2022/04/ispazio-27-400x866.jpg"
        },
      {
        title : "Forest",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/03/iSpazio-119-400x866.jpg"
      },
      {
        title : "Sky",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/09/ispazio-63-400x866.jpg"
      },
      {
        title : "City",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/01/@maxloew-400x866.jpg"
      },
      {
        title : "Ocean",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2022/11/marmeladze-1-400x866.jpeg"
      },
      {
        title : "Mountain",
        url : "https://wallpapers.ispazio.net/wp-content/uploads/2022/04/ispazio-27-400x866.jpg"
        },
      {
        title : "Forest",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/03/iSpazio-119-400x866.jpg"
      },
      {
        title : "Sky",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/09/ispazio-63-400x866.jpg"
      },
      {
        title : "City",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/01/@maxloew-400x866.jpg"
      },
      {
        title : "Ocean",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2022/11/marmeladze-1-400x866.jpeg"
      },
      {
        title : "Mountain",
        url : "https://wallpapers.ispazio.net/wp-content/uploads/2022/04/ispazio-27-400x866.jpg"
        },
      {
        title : "Forest",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/03/iSpazio-119-400x866.jpg"
      },
      {
        title : "Sky",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/09/ispazio-63-400x866.jpg"
      },
      {
        title : "City",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/01/@maxloew-400x866.jpg"
      },
      {
        title : "Ocean",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2022/11/marmeladze-1-400x866.jpeg"
      },
      {
        title : "Mountain",
        url : "https://wallpapers.ispazio.net/wp-content/uploads/2022/04/ispazio-27-400x866.jpg"
        },
      {
        title : "Forest",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/03/iSpazio-119-400x866.jpg"
      },
      {
        title : "Sky",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/09/ispazio-63-400x866.jpg"
      },
      {
        title : "City",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/01/@maxloew-400x866.jpg"
      },
      {
        title : "Ocean",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2022/11/marmeladze-1-400x866.jpeg"
      },
      {
        title : "Mountain",
        url : "https://wallpapers.ispazio.net/wp-content/uploads/2022/04/ispazio-27-400x866.jpg"
        },
      {
        title : "Forest",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/03/iSpazio-119-400x866.jpg"
      },
      {
        title : "Sky",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/09/ispazio-63-400x866.jpg"
      },
      {
        title : "City",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2021/01/@maxloew-400x866.jpg"
      },
      {
        title : "Ocean",
        url:"https://wallpapers.ispazio.net/wp-content/uploads/2022/11/marmeladze-1-400x866.jpeg"
      }
   ] 

   pageSlider(index  :number){
      return Math.abs(this.currentPage - index) <3;
   }
}
