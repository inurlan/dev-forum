import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  //@Input() icons;

  tr = 'fa';

  icons = [
    { selector: 'facebook',
      url: 'https://facebook.com',
      active: true
    },
    { selector: 'linkedin',
      url: 'https://linkedin.com',
      active: true
    },
    { selector: 'twitter',
      url: 'https://twitter.com',
      active: true
    },
    { selector: 'slack',
      url: 'https://slack.com',
      active: true
    },
    // { selector: 'youtube',
    //   url: 'https://youtube.com',
    //   active: true
    // },
    { selector: 'google-plus',
      url: 'https://gmail.com',
      active: true
    },
    { selector: 'github',
      url: 'https://github.com',
      active: true
    }
  ];

  sh() {
    this.tr = (this.tr === 'fa') ? 'ta' : 'fa';
  }

  constructor() {
  }

  ngOnInit() {
  }

}
