import { Component } from "@angular/core";
@Component({
    selector: "hello",
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.scss']

})
export class HelloWorldComponent {
    title = "Hello world!";
    thing = 0;
    constructor() {
        
        console.log("hi");
        
    }
}