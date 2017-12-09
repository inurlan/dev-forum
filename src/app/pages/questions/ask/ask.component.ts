import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {QuillEditorComponent} from 'ngx-quill';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['']
    });
  }

  @ViewChild('editor') editor: QuillEditorComponent;

  ngOnInit() {
  }

}
