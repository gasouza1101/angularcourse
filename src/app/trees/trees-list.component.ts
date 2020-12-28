import { Component, OnInit } from "@angular/core";
import { Trees } from "./trees";

@Component({
    selector: 'app-trees-list',
    templateUrl: './trees-list.component.html'
})

export class TreesListComponent implements OnInit {
        
    trees: Trees[] = [];
    
    ngOnInit(): void{
        this.trees = [
            {
                id: 0,
                name: "Pinheiro",
                imgUrl: null,
                code: "A01"
            },
            {
                id: 1,
                name: "Salgueiro",
                imgUrl: null,
                code: "A02"
            }
        ]    
    }
}