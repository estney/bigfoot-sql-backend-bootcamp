const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.add);
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    //delete
    router.put("/:sightingId", this.controller.edit);
    //delete
    router.delete("/:sightingId", this.controller.delete);
    return router;
  }
}

module.exports = SightingsRouter;
