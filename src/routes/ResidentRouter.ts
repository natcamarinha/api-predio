import { Router } from "express";
import ResidentRepo from "../repo/ResidentRepo";
import ResidentService from "../services/ResidentService";
import ResidentController from "../controllers/ResidentController";
import db from '../models';

const residentRepo = new ResidentRepo(db.Residents);
const residentService = new ResidentService(residentRepo);
const residentController = new ResidentController(residentService);
const residentRouter = Router();

residentRouter.post('/residents', residentController.createResidentController.bind(residentController));
residentRouter.get('/residents', residentController.getAllResidentsController.bind(residentController));
residentRouter.put('/residents/:id', residentController.updateResidentController.bind(residentController))
residentRouter.delete('/residents/:id', residentController.deleteResidentController.bind(residentController))

export default residentRouter;

