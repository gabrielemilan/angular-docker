import { Component } from '@angular/core';
import { ConfigService } from 'src/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config$ = this.configService.config$;

  constructor(private configService: ConfigService) {
    configService.loadConfig().subscribe();
  }
  title = 'angular-docker';
}
