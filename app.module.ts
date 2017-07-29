import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MainIcons } from './components/app.component';
import { GetIcons} from "getIcons.service"
import { SaveScore } from "./services/saveScore.service"
import { GetIconsScores } from "./services/getIconsScores.service";
import { FormsModule } from '@angular/forms';

@NgModule({

	imports: [BrowserModule, HttpModule, FormsModule],
	providers : [GetIcons, SaveScore, GetIconsScores, HttpModule]
	declarations: [MainIcons],
	bootstrap: [MainIcons]
})

export class AppModule {
	
}
