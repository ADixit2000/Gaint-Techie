import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { HttpClient } from '@angular/common/http';
import { CompetitionModel, Project } from '../model/competition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient) {}

  createCompetition(competitionObj: CompetitionModel) {
    return this.http.post(Constant.API_Url + '/competitionAPI', competitionObj);
  }

  getCompetition(): Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>(
      Constant.API_Url + '/competitionAPI'
    );
  }

  getCompetitionById(id: number): Observable<CompetitionModel> {
    return this.http.get<CompetitionModel>(
      Constant.API_Url + '/competitionAPI?' + 'competitionId=' + id
    );
  }

  submitProject(obj: Project) {
    return this.http.post(Constant.API_Url + '/projectAPI', obj);
  }
}
