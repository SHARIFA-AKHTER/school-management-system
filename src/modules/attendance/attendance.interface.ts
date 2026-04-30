export interface IAttendance {
  studentId: string;
  date: string | Date;
  status: 'PRESENT' | 'ABSENT' | 'LATE'; 
}