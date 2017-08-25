"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var saveScore_service_1 = require("../services/saveScore.service");
var MainIcons = (function () {
    function MainIcons(saveScore, getIconsScores, http) {
        this.saveScore = saveScore;
        this.getIconsScores = getIconsScores;
        this.http = http;
        this.numberOfUsers = 142;
        this.icons = [];
        this.iconSelected = false;
        this.selectedIconName = "";
        this.programmingLanguagesToVote = [];
        this.iconName = {};
        this.iconsData = {};
        this.disabledButtons = [];
    }
    MainIcons.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/icons').subscribe(function (result) {
            var res = JSON.parse(result._body);
            for (var i = 0; i < res.icons.length; i++) {
                _this.icons.push(res.icons[i]);
            }
        });
        this.disabledButtonIndex = -1;
    };
    MainIcons.prototype.showProgrammingLanguages = function (index) {
        this.selectedIndex = index;
    };
    MainIcons.prototype.buttonDisabled = function (event, i) {
        // this.disabledButtonIndex = index;
        event.target.setAttribute("disabled", "disabled");
    };
    MainIcons.prototype.increaseScore = function (iconName) {
        var _this = this;
        var iconOrientation = this.iconName;
        var c = {};
        this.programmingLanguagesToVote.forEach(function (val) {
            if (iconName === val.iconName) {
                val.value.positive++;
            }
        });
        this.saveScore.saveScore((_a = {}, _a[iconOrientation] = this.programmingLanguagesToVote, _a)).subscribe(function (data) {
            _this.ngOnInit();
            return true;
        }, function (error) {
        });
        var _a;
    };
    MainIcons.prototype.decreaseScore = function (iconName) {
        var _this = this;
        var iconOrientation = this.iconName;
        var c = {};
        this.programmingLanguagesToVote.forEach(function (val) {
            if (iconName === val.iconName) {
                val.value.negative--;
            }
        });
        this.saveScore.saveScore((_a = {}, _a[iconOrientation] = this.programmingLanguagesToVote, _a)).subscribe(function (data) {
            _this.ngOnInit();
            return true;
        }, function (error) {
        });
        var _a;
    };
    MainIcons.prototype.showCorrectIconsBasedOnSelectedLanguage = function (iconName) {
        var _this = this;
        this.iconSelected = true;
        this.programmingLanguagesToVote = [];
        setTimeout(function () {
            var iconsArrayData = _this.iconsData[iconName];
            for (var i = 0; i < iconsArrayData.length; i++) {
                _this.programmingLanguagesToVote.push(iconsArrayData[i]);
            }
        }, 2000);
    };
    MainIcons.prototype.showProgrammingLanguageIcons = function (iconName) {
        var _this = this;
        this.selectedIconName = iconName;
        this.iconName = iconName;
        this.getIconsScores.http.get("/icons_score").subscribe(function (result) {
            _this.iconsData = JSON.parse(result._body);
        });
        if (iconName === "C") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "C++") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "C#") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Clojure") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Go") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Haskell") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Java") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "JavaScript") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Objective C") {
            this.iconSelected = true;
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Perl") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Php") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Python") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Ruby") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Scala") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else if (iconName === "Swift") {
            this.showCorrectIconsBasedOnSelectedLanguage(iconName);
        }
        else {
            this.iconSelected = false;
        }
    };
    MainIcons = __decorate([
        core_1.Component({
            selector: 'main-icons',
            templateUrl: "components/icons.html",
            providers: [saveScore_service_1.SaveScore]
        })
    ], MainIcons);
    return MainIcons;
}());
exports.MainIcons = MainIcons;
