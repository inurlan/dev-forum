import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.scss']
})
export class QuestionsAnswersComponent implements OnInit {


  questions = [
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
