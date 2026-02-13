import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '@avocado/backend-api-angular';

@Component({
  selector: 'app-hello-api',
  imports: [CommonModule],
  templateUrl: './hello-api.html',
  styleUrl: './hello-api.scss',
})
export class HelloApi implements OnInit {
  private appService = inject(AppService);

  data = signal<object>({});

  ngOnInit() {
    this.appService.appControllerGetData().subscribe((response) => {
      this.data.set(response);
    });
  }
}
