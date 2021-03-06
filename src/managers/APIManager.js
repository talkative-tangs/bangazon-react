const remoteURL = "http://localhost:8000/api/v1"

class APIManager {
    constructor(route) {
        this.route = route
    }

  get(id) {
   return fetch(`${remoteURL}/${this.route}/${id}`).then(e => e.json())
  }

  all() {
    return fetch(`${remoteURL}/${this.route}`).then(data => data.json())
  }

  delete(id) {
    return fetch(`${remoteURL}/${this.route}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`${remoteURL}/${this.route}`))
        .then(e => e.json())
  }

  put(payload, url) {
    console.log("payload", JSON.stringify(payload))
    return fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())
  }


  post(payload) {
    return fetch(`${remoteURL}/${this.route}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(data => data.json())
  }
}

export default APIManager