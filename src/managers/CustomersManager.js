import APIManager from "./APIManager"

class CustomersManager extends APIManager {
  getCustomer(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
}

export default new CustomersManager("customers")