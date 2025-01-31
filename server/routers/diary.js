const { Router } = require("express");

const diaryController = require("../controllers/diary");
const diaryRouter = Router();

diaryRouter.get("/", diaryController.index)
diaryRouter.post("/new", diaryController.create)
diaryRouter.get("/:id", diaryController.show);
diaryRouter.delete("/:id", diaryController.destroy);

module.exports = diaryRouter;