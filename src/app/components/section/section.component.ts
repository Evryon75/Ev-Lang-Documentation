import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() sectionName: string = "UNINITIALIZED";
  constructor() {
  }
  ngOnInit(): void {
    
  }

  update(): void {
    let src = "../../assets/iframes/introduction.html";
    switch (this.sectionName) {
      case "Extras": src = "../../assets/details.html"; break;
      case "Strings": src = "../../assets/strings.html"; break;
      case "Abort": src = "../../assets/abort.html"; break;
      case "Memory": src = "../../assets/memory.html"; break;
      case "Input and Output": src = "../../assets/io.html"; break;
      case "Scope": src = "../../assets/scope.html"; break;
      case "Random": src = "../../assets/random.html"; break;
      case "Functions": src = "../../assets/functions.html"; break;
      case "Variables": src = "../../assets/variables.html"; break;
      case "While Statement": src = "../../assets/while.html"; break;
      case "If Statement": src = "../../assets/if.html"; break;
      case "Introduction": src = "../../assets/introduction.html"; break;
    }
    (document.getElementById("ifr") as HTMLIFrameElement).src = src;
  }

}