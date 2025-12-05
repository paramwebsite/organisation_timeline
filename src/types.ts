export interface Organization {
  id: string;
  name: string;
  year: number;
  mission: string;
  milestones: string[];
  image?: string; // Optional image URL
}

export interface TimelinePeriod {
  id: string;
  range: string;
  startYear: number;
  endYear: number;
  organizations: Organization[];
}