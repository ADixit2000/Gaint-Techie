import { Component, inject } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { Observable } from 'rxjs';
import { CompetitionModel } from '../../model/competition.model';
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  NgClass,
  NgIf,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe, RouterLink, CarouselModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  src = inject(CompetitionService);

  competitionList$: Observable<CompetitionModel[]> = new Observable<
    CompetitionModel[]
  >();

  constructor() {
    this.competitionList$ = this.src.getCompetition();
  }
  carouselOptions = {
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
