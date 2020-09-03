const express = require("express");
const app = express();

const productRouter = express.Router();

productRouter.use("/create", function (request, response) {
    response.send("Добавление notes");
});
productRouter.use("/update", function (request, response) {
    response.send("Обновление notes");
});
productRouter.use("/delete", function (request, response) {
    response.send("Удаление notes");
});
productRouter.use("/:id", function (request, response) {
    response.send(`notes ${request.params.id}`);
});
productRouter.use("/", function (request, response) {
    response.send("Список notes");
});

app.use("/notes", productRouter);
app.use("/", function (request, response) {
    response.send("Главная страница");
});
app.listen(3000);