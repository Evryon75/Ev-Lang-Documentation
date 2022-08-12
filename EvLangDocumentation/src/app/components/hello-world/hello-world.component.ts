import { Component } from "@angular/core";
import { debug } from "console";

@Component({
    selector: "hello",
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.scss']
})

export class HelloWorldComponent {
    title = "Hello world!"
}