import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = 
//导出AppComponent组件，可以在html中引用在ts中声明的变量
class AppComponent {
    constructor() {
        this.title = '姜铭媛';
        this.count = 0;
        //声明一个方法
        this.increment = () => {
            this.count++;
        };
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.less'] //使用哪一个样式文件
    })
    //导出AppComponent组件，可以在html中引用在ts中声明的变量
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map