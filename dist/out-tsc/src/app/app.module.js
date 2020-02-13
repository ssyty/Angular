import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//引入AppComponet
import { AppComponent } from './app.component';
//@符号在后端叫做注解，作用就是创建指定类型的对象
//声明模块资源：组件、指令、服务
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        //声明app依赖的模块
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        //指定应用程序打的根级别需要用的service
        providers: [],
        //把Appcomponet作为项目的根组件
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map