export class RestAdapter {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetchData(endpoint) {
    const response = await fetch(`${this.baseURL}/${endpoint}`);
    return response.json();
  }
}
