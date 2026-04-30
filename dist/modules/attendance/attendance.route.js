import express from "express";
import { validateRequest } from "../../middlewares/validate.middleware.js";
import { AttendanceValidation } from "./attendance.validation.js";
import { AttendanceController } from "./attendance.controller.js";
const router = express.Router();
router.post("/take-attendance", validateRequest(AttendanceValidation.createAttendanceZodSchema), AttendanceController.createAttendance);
router.get("/", AttendanceController.getAllStudentAttendance);
router.get("/:studentId", AttendanceController.getStudentAttendanceId);
export const AttendanceRoutes = router;
//# sourceMappingURL=attendance.route.js.map