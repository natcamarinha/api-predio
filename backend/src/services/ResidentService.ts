import ResidentRepo from "../repo/ResidentRepo";
import { errorHandler } from "../utils/errorHandler";
import { StatusCode } from "../utils/statusCode";
import Joi from 'joi';

const residentSchema = Joi.object({
  nome: Joi.string().required(),
  telefone: Joi.string().required(),
  modelo_carro: Joi.string().required(),
  cor_carro: Joi.string().required(),
  placa: Joi.string().required(),
  bloco_apto: Joi.string().required(),
});

export default class ResidentService {
  constructor(private readonly residentRepo: ResidentRepo) {}

  async createResidentService(body: any) {
    console.log('-->', body);
    
    const { error } = residentSchema.validate(body);
    if (error) throw errorHandler(StatusCode.BAD_REQUEST, 'missing required params');
    return this.residentRepo.createResidentRepo(body);
  }

  async getAllResidentsService() {
    return this.residentRepo.getAllResidentsRepo();
  }

  async updateResidentService(id: any, body: any) {
    const resident = await this.residentRepo.getResidentById(id);
    if (!resident) throw errorHandler(StatusCode.NOT_FOUND,  'resident not found');
    return this.residentRepo.updateResidentRepo(id, body);
  }

  async deleteResidentService(id: any) {
    const resident = await this.residentRepo.getResidentById(id);
    if (!resident) throw errorHandler(StatusCode.NOT_FOUND,  'resident not found');
    return this.residentRepo.deleteResidentRepo(id);
  }
}