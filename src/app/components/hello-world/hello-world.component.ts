import { Component, OnDestroy, OnInit } from "@angular/core";
@Component({
    selector: "hello",
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.scss']

})
export class HelloWorldComponent implements OnInit, OnDestroy {
    title = "Hello world!";
    thing = 0;
    ngOnInit(): void {
        document.querySelectorAll("#but")!.forEach(but => {
            but.addEventListener("click", () => {
                this.thing++;
                document.querySelectorAll("#but")!.forEach((element: { innerHTML: string; }) => {
                    element.innerHTML = this.thing as unknown as string;
                });
            });
        });
    }
    ngOnDestroy(): void {
    }
}