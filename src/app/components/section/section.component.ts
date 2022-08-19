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
      case "Extras": src = "../../assets/iframes/details.html"; break;
      case "Strings": src = "../../assets/iframes/strings.html"; break;
      case "Abort": src = "../../assets/iframes/abort.html"; break;
      case "Memory": src = "../../assets/iframes/memory.html"; break;
      case "Input and Output": src = "../../assets/iframes/io.html"; break;
      case "Scope": src = "../../assets/iframes/scope.html"; break;
      case "Random": src = "../../assets/iframes/random.html"; break;
      case "Functions": src = "../../assets/iframes/functions.html"; break;
      case "Variables": src = "../../assets/iframes/variables.html"; break;
      case "While Statement": src = "../../assets/iframes/while.html"; break;
      case "If Statement": src = "../../assets/iframes/if.html"; break;
      case "Introduction": src = "../../assets/iframes/introduction.html"; break;
    }
    (document.getElementById("ifr") as HTMLIFrameElement).src = src;
  }

}