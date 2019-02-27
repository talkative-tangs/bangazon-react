import APIManager from "./APIManager"

class ProductTypesManager extends APIManager {
  getProductType(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  addAndList(newProductType) {
    return this.post(newProductType).then(() => this.all())
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  putAndListProductTypes(payload, url) {
    return this.put(payload, url).then(() => this.all())
  }
}

export default new ProductTypesManager("product_type")