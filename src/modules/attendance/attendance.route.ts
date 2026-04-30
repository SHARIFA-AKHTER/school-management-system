import express from "express";
import { AttendanceController } from "./attendance.controller.js";
import { validateRequest } from "../../middlewares/validate.middleware.js";
import { AttendanceValidation } from "./attendance.validation.js";

const router = express.Router();

router.post(
  "/take-attendance",
  validateRequest(AttendanceValidation.createAttendanceZodSchema),
  AttendanceController.createAttendance,
);
router.get("/", AttendanceController.getAllStudentAttendance);
router.get("/:studentId", AttendanceController.getStudentAttendanceId);

export const AttendanceRoutes = router;
