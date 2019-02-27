import APIManager from "./APIManager"

class CustomersManager extends APIManager {
  getCustomer(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  addAndList(newCustomer) {
    return this.post(newCustomer).then(() => this.all())
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  putAndListCustomers(payload, url) {
    return this.put(payload, url).then(() => this.all())
  }
}

export default new CustomersManager("customers")