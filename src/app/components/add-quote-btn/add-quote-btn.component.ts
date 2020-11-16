import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quote-btn',
  templateUrl: './add-quote-btn.component.html',
  styleUrls: ['./add-quote-btn.component.css']
})
export class AddQuoteBtnComponent implements OnInit {
  url = "quote/add"
  constructor() { }

  ngOnInit(): void {
  }

  

}
