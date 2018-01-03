import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-pool',
  templateUrl: './question-pool.component.html',
  styleUrls: ['./question-pool.component.scss']
})
export class QuestionPoolComponent implements OnInit {


  questions = [
    {
      title: 'Do you know how can I install eclipse?',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Nurlan Ilyas',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'Thank you. before I begin, I\'d like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it\'ll get an A. That\'s a tip kids. Write it down.',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg',
      author: 'Adam Shultz',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I\'ll accept any responsibility for my actions.',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
      author: 'Max Conversion',
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
      title: 'Thank you. before I begin, I\'d like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it\'ll get an A. That\'s a tip kids. Write it down.',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg',
      author: 'Adam Shultz',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
    {
      title: 'My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I\'ll accept any responsibility for my actions.',
      profile_image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
      author: 'Max Conversion',
      content: 'Lorem impulsum is the dumpiest text ever.'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }


}
