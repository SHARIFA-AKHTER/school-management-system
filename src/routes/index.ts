import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { StudentRoutes } from "../modules/student/student.route";
import { ClassRoutes } from "../modules/class/class.route";
import { TeacherRoutes } from "../modules/teacher/teacher.route";
import { SubjectRoutes } from "../modules/subject/subject.route";
import { AttendanceRoutes } from "../modules/attendance/attendance.route";
import { ResultRoutes } from "../modules/result/result.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/class",
    route: ClassRoutes,
  },
  {
    path: "/teachers",
    route: TeacherRoutes,
  },
  {
    path: "/subjects",
    route: SubjectRoutes,
  },

  {
    path: "/attendance",
    route: AttendanceRoutes,
  },

  {
    path: "/results",
    route: ResultRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
