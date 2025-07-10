import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CompetitionModel } from '../../model/competition.model';
import { FormsModule } from '@angular/forms';
import { CompetitionService } from '../../services/competition.service';
import { CommonModule, DatePipe, NgStyle } from '@angular/common';
import { User } from '../../services/user';

@Component({
  selector: 'app-competition',
  imports: [FormsModule, NgStyle, CommonModule],
  templateUrl: './competition.html',
  styleUrl: './competition.css',
  providers: [DatePipe],
})
export class Competition implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getData();
  }
  competitionObj: CompetitionModel = new CompetitionModel();
  gridList: CompetitionModel[] = [];

  competitionService = inject(CompetitionService);
  userService = inject(User);

  autoIdGenerator() {
    this.competitionObj.competitionId++;
    return this.competitionObj.competitionId;
  }

  getData() {
    this.competitionService.getCompetition().subscribe({
      next: (result) => {
        if (result) {
          this.gridList = result;
          this.cdRef.detectChanges();
        }
      },
      error: () => {
        alert('Error in Data Getting OR Data is empty');
      },
    });
  }

  onSave() {
    if (this.competitionObj != null) {
      this.autoIdGenerator();
    }
    this.competitionService.createCompetition(this.competitionObj).subscribe({
      next: (res: any) => {
        alert('save Data');
        this.getData();
      },
      error: () => {
        alert('error');
      },
    });
  }
}
