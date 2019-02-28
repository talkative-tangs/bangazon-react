import APIManager from "./APIManager"

class OrdersManager extends APIManager {
  getOrder(id) {
    return this.get(id)
  }
  getAll() {
    return this.all()
  }
  addAndList(newOrder) {
    return this.post(newOrder).then(() => this.all())
  }
  removeAndList(id) {
    return this.delete(id).then(() => this.all())
  }
  putAndListOrders(payload, url) {
    return this.put(payload, url).then(() => this.all())
  }
}

export default new OrdersManager("orders")