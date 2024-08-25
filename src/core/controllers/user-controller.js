export class UserController {
  constructor(adapter) {
    this.adapter = adapter;
  }

  async getUserInfo(userId) {
    return await this.adapter.fetchData(`users/${userId}`);
  }
}
