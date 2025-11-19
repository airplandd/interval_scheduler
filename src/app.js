const express = require("express")
const homepageController = require("./controllers/homepageController");
const topicController = require("./controllers/topicController");
const bodyParser = require("body-parser");
const sequelize = require("./database");

const PORT = 3000

const app = express()

app.set("view engine", "ejs")
app.set("views", "./src/views")
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

const router = express.Router()

router.get("/", homepageController.getHomepage);
router.get("/topic_form", topicController.getTopicForm)
router.post("/topics", topicController.createTopic)

app.use(router)
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port 3000")
  })
})
