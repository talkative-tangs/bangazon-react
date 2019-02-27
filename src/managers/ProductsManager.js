import APIManager from "./APIManager"

class ProductsManager extends APIManager {
  getCustomer(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  addAndList(newProduct) {
    return this.post(newProduct).then(() => this.all())
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  putAndListProducts(payload, url) {
    return this.put(payload, url).then(() => this.all())
  }
}

export default new ProductsManager("products")