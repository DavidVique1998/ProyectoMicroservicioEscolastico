import { Campus } from "./campus";
import { Enrollment } from "./enrollment";
import { Payment } from "./payment";

export class Student {
  id: number;
  level: string;
  type: string;
  name: String;
  lastName: String;
  phone: String;
  targetId: String;
  enrollments: Enrollment[];
  paymetn: Payment[];
}
