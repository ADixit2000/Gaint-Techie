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

  createCompetition(competitionObj: any) {
    return this.http.post(
      Constant.API_Url + '/Competition/Create',
      competitionObj
    );
  }

  getCompetition(): Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>(
      Constant.API_Url + '/Competition/GetAll'
    );
  }

  getCompetitionById(id: number): Observable<CompetitionModel> {
    return this.http.get<CompetitionModel>(
      Constant.API_Url + '/Competition/GetById?' + 'id=' + id
    );
  }

  submitProject(obj: Project) {
    return this.http.post(Constant.API_Url + '/projectAPI', obj);
  }
}
