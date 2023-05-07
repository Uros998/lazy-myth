import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss']
})
export class NewCollectionComponent implements OnInit {

  collectionList = [
    {
      id: 1,
      title: 'Mythology',
      subtitle: 'Lazy Myth',
      link: '#',
      image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80",
    },
    {
      id: 2,
      title: 'Disney',
      subtitle: 'Lazy Myth',
      link: '#',
      image: "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      title: 'Mythology',
      subtitle: 'Lazy Myth',
      link: '#',
      image: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
