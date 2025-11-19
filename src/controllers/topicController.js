const topicModel = require("../models/topicModel")

const getTopicForm = (req, res) => {
  const data = {
    title: "Topic Form",
  }

  res.render("topic_form", data)
}

const createTopic = (req, res) => {
  const topicName = req.body.topic_name
  const local = new Date();
  const date = `${local.getDate()}-${local.getMonth()}-${local.getFullYear()}`
  topicModel.create({ name: topicName, date, level: 1 })
  res.redirect("/")

}


module.exports = {
  getTopicForm,
  createTopic
}