import { Component } from "@angular/core";



@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})
export class Product{
    productnames = ["Angular","Javascript","HTML","CSS"];
}