import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-home',
  providers: [NgbCarouselConfig],
  styleUrls: ['./home.component.css'],
  template: `
    <div class="home">
      <div class="home-header">
        <header>
          <a [routerLink]="['/']">
            <img class="brand-logo" src="/assets/logo.png" alt="logo" />
          </a>
          <div class="brand-name">
            <h1>El Colibrí</h1>
            <h4>Mexican Street Food</h4>
          </div>
        </header>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid justify-content-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <button class="btn btn-outline-warning" type="button" [routerLink]="['/menu']">
              MENU
            </button>
            <button class="btn btn-outline-warning" type="button" [routerLink]="['/locations']" >
              LOCATIONS
            </button>
            <button class="btn btn-outline-warning" type="button" [routerLink]="['/aboutus']">
              ABOUT US
            </button>
            <button class="btn btn-outline-warning" type="button" href="#">
              CONTACT
            </button>
            <button class="btn btn-outline-warning" type="button" href="#">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </nav>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner" id="carousel-fade">
          <div class="carousel-item active">
            <img
              src="/assets/tacos-order.jpg"
              class="d-block w-100"
              alt="order tacos"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/huarache.jpg"
              class="d-block w-100"
              alt="cactus huarache"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/quesabirrias-prep.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="/assets/gordita.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/birria-beef.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/birria-tacos.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/quesabirrias.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/el-colibri-sign.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="aboutus">
        <app-aboutus></app-aboutus>
      </div>
      <div class="locations">
        <app-locations></app-locations>
      </div>
      <div class="contact">
      <app-contact></app-contact>
      </div>

    </div>
  `,
})
export class HomeComponent {

}
