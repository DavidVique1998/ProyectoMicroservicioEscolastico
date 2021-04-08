import { SubjectNrc } from "./subject-nrc";

export class Subject {
  id: number;
  name: string;
  credits: number;
  uniqueCode: number;
  subjectNrcs: SubjectNrc[];
}
