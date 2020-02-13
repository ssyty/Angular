import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//引入AppModule模快
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
//指定AppModule模快为项目的根模快，指定启动模快
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map