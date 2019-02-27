import APIManager from "./APIManager"

class PaymentTypesManager extends APIManager {
  getPaymentType(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  addAndList(newPaymentType) {
    return this.post(newPaymentType).then(() => this.all())
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  putAndListPaymentType(payload, url) {
    return this.put(payload, url).then(() => this.all())
  }
}

// matches the api
export default new PaymentTypesManager("payment_type")