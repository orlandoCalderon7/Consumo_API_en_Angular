import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit {

  // Inyectamos el servicio correctamente
  constructor(public servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.servicesService.getPosts().subscribe({
      next: (data) => {
        this.servicesService.posts = data;
        console.log(data);
      },
      error: (e) => {
        console.error(e);
      }
    });
  }
}
