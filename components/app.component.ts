import { Component } from '@angular/core';
import { SaveScore } from "../services/saveScore.service";
import { GetIconsScores } from "../services/getIconsScores.service";
import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
	selector: 'main-icons',
	templateUrl : "components/icons.html",
	providers : [SaveScore]
})

export class MainIcons {
	numberOfUsers : number = 142;
	icons = [];
	selectedIndex : number; 
	iconSelected : boolean = false;
	selectedIconName : string = "";
	programmingLanguagesToVote = [];
	iconName = {};
	iconsData = {};
	disabledButtonIndex : number;
	disabledButtons : number = [];


	constructor (private saveScore : SaveScore, private getIconsScores : GetIconsScores, private http: Http) {

	}

	ngOnInit(){

		this.http.get('/icons').subscribe(result => {
			let res = JSON.parse(result._body);
			for(let i = 0; i < res.icons.length; i++){
				this.icons.push(res.icons[i]);
			}
		});
		this.disabledButtonIndex = -1;
	}

	showProgrammingLanguages(index: number){
		this.selectedIndex = index;
	}

	buttonDisabled(event, i){
		// this.disabledButtonIndex = index;
		event.target.setAttribute("disabled", "disabled")
		
	}

	increaseScore(iconName){
		let iconOrientation = this.iconName;
		let c = {};
		
		this.programmingLanguagesToVote.forEach((val) => {
			if(iconName === val.iconName){
				val.value.positive++;
			}
		});

		this.saveScore.saveScore({[iconOrientation] : this.programmingLanguagesToVote}).subscribe( data => {
			this.ngOnInit();
			return true;
		},
		error => {
			
		}
		);
	}

	decreaseScore(iconName){
		let iconOrientation = this.iconName;
		let c = {};

		this.programmingLanguagesToVote.forEach((val) => {
			if(iconName === val.iconName){
				val.value.negative--;
			}
		});

		this.saveScore.saveScore({[iconOrientation] : this.programmingLanguagesToVote}).subscribe( data => {
			this.ngOnInit();
			return true;
		},
		error => {
			
		}
		);
	}

	showCorrectIconsBasedOnSelectedLanguage(iconName){
			this.iconSelected = true;
			this.programmingLanguagesToVote = [];
			setTimeout(() => {
				let iconsArrayData = this.iconsData[iconName];
				for(let i = 0; i < iconsArrayData.length; i++){
					this.programmingLanguagesToVote.push(iconsArrayData[i])
				}
			}, 500)
			
	}

	showProgrammingLanguageIcons(iconName){
		this.selectedIconName = iconName;
		this.iconName = iconName;

		this.getIconsScores.http.get("/icons_score").subscribe(result => {
			this.iconsData = JSON.parse(result._body)
		});

		if(iconName === "C"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);
		}else if(iconName === "C++"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);
		}else if(iconName === "C#"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);
		}else if(iconName === "Clojure"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);
		}else if(iconName === "Go"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);
		}else if(iconName === "Haskell"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Java"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "JavaScript"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Objective C"){
			this.iconSelected = true;
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Perl"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Php"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Python"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Ruby"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Scala"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else if(iconName === "Swift"){
			this.showCorrectIconsBasedOnSelectedLanguage(iconName);

		}else{
			this.iconSelected = false;
	}

}

