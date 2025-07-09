import { Component, inject } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { ActivatedRoute } from '@angular/router';
import { CompetitionModel, Project } from '../../model/competition.model';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';

@Component({
  selector: 'app-submit-project',
  imports: [FormsModule],
  templateUrl: './submit-project.html',
  styleUrl: './submit-project.css',
})
export class SubmitProject {
  currentCompetitionId: number = 0;
  src = inject(CompetitionService);
  userService = inject(User);
  competitionData: CompetitionModel = new CompetitionModel();
  projectObj: Project = new Project();

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((result: any) => {
      this.currentCompetitionId = result.id;
      this.getDataById();
    });
  }

  getDataById() {
    this.src.getCompetitionById(this.currentCompetitionId).subscribe({
      next: (result: any) => {
        if (result) {
          debugger;
          this.competitionData = result[0];
        }
      },
      error: () => {
        alert('Error in Data Getting OR Data is empty');
      },
    });
  }

  onSave() {
    this.projectObj.userId = Number(this.userService.loggedUserId);
    this.projectObj.competitionId = this.currentCompetitionId;
    this.src.submitProject(this.projectObj).subscribe({
      next:()=>{

      },
      error:()=>{
        
      }
    })
  }
}
