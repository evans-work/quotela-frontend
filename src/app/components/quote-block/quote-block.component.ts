import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.css']
})
export class QuoteBlockComponent implements OnInit {
  @Input() backgroundColor
  @Input() textColor
  @Input() quoteText
  @Input() by
  constructor() { }

  ngOnInit(): void {
  }

}
