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
  const date = `${local.getDate()}-${local.getMonth() + 1}-${local.getFullYear()}`
  topicModel.create({ name: topicName, date, level: 1 })
  res.redirect("/")

}

const getTopicPage = async (req, res) => {
  const id = req.params.topicid
  const data = {
    title: "Topic" + id,
    topicid: id
  }
  res.render("topic_page", data)
}

const scheduleNewTopic = async (req, res) => {
  const id = req.params.topicid
  const quality = req.body.quality
  await topicModel.findByPk(id).then((value) => {
    switch (quality) {
      case "perfect":
        createNewTopicBasedOnLevel(3, value)
        break;

      case "good":
        createNewTopicBasedOnLevel(Math.round(1.5), value)
        break;

      case "bad":
        const newDate = addDate(value.date, 1)
        const level = 1
        topicModel.create({
          name: value.name,
          date: `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`,
          level
        })
        break;
    }
  })
  res.redirect("/")
}

const addDate = (topicDate, numofdays) => {
  const dataArr = topicDate.split("-").map((el) => Number(el))
  const date = new Date(dataArr[2], dataArr[1] - 1, dataArr[0])

  date.setDate(date.getDate() + numofdays)
  return date
}

const createNewTopicBasedOnLevel = (power, value) => {
  const newDate = addDate(value.date, Math.pow(power, value.level))
  const level = value.level + 1 >= 7 ? 7 : value.level + 1
  topicModel.create({
    name: value.name,
    date: `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`,
    level
  })
}

module.exports = {
  getTopicForm,
  createTopic,
  getTopicPage,
  scheduleNewTopic
}