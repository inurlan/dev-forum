import {Component, OnInit, ViewChild} from '@angular/core';
import {QuillEditorComponent} from 'ngx-quill';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      editor: ['']
    });
  }

  emptyArray: any[] = [];

  configurations = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'align': this.emptyArray.slice() }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code', 'code-block'],
      [{ 'header': [/*1,*/ 2, 3, 4, 5, 6, false] }],
      ['link', 'image', 'video'],                         // link and image, video
      ['clean'],                                         // remove formatting button
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'color': this.emptyArray.slice() }, { 'background': this.emptyArray.slice() }],          // dropdown with defaults from theme
      // [{ 'font': this.emptyArray.slice() }],
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      // [{ 'direction': 'rtl' }],                         // text direction
      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    ]
  };

  @ViewChild('editor') editor: QuillEditorComponent;

  ngOnInit() {
  }

}
