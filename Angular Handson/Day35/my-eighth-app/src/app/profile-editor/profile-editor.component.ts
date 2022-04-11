import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname = new FormControl('');
  lastname = new FormControl('');

  
}
