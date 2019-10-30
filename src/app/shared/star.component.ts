import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { createInput } from "@angular/compiler/src/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  constructor() {}

  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(` Has Rating Of ${this.rating}`);
  }
}
