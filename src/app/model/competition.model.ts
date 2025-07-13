export class CompetitionModel {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.description = '';
    this.startDate = new Date(new Date().toISOString());
    this.endDate = new Date(new Date().toISOString());
    this.status = '';
  }
}

export class Project {
  submissionId: number;
  id: number;
  userId: number;
  projectTitle: string;
  description: string;
  githubLink: string;
  submissionDate: string;
  status: string;
  rank: number;

  constructor() {
    this.submissionId = 0;
    this.id = 0;
    this.userId = 0;
    this.projectTitle = '';
    this.description = '';
    this.githubLink = '';
    this.submissionDate = '';
    this.status = '';
    this.rank = 0;
  }
}
