export default class ResidentRepo {
  constructor(private residentModel: any) {}

  public async createResidentRepo(body: any) {
    return this.residentModel.create(body);
  }

  public async getAllResidentsRepo() {
    return this.residentModel.findAll();
  }

  public async getResidentById(id: any) {
    return this.residentModel.findByPk(id);
  }

  public async updateResidentRepo(id: any, body: any) {
    const updateResident = await this.residentModel.update(
      { ...body },
      { where: { id } },
    );
   
    return {
      ...body,
    };
  }

  public async deleteResidentRepo(id: any) {
    return this.residentModel.destroy(
      { where: { id } },
    );
  }
}