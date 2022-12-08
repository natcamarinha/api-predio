import { Request, Response, NextFunction } from "express";
import { StatusCode } from "../utils/statusCode";
import ResidentService from "../services/ResidentService";

export default class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  async createResidentController(req: Request, res: Response, next: NextFunction) {
    try {
      const resident = await this.residentService.createResidentService(req.body);
      return res.status(StatusCode.CREATED).json(resident);
    } catch (error) {
      next(error);
    }
  }

  async getAllResidentsController(req: Request, res: Response, next: NextFunction) {
    try {
      const residents = await this.residentService.getAllResidentsService();
      return res.status(StatusCode.OK).json(residents);
    } catch (error) {
      next(error);
    }
  }

  async updateResidentController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updateResident = await this.residentService.updateResidentService(id, req.body);
      return res.status(StatusCode.OK).json(updateResident);
    } catch (error) {
      next(error);
    }
  }

  async deleteResidentController(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deleteResident = await this.residentService.deleteResidentService(id);
      return res.status(StatusCode.OK).json(deleteResident);
    } catch (error) {
      next(error);
    }
  }
}