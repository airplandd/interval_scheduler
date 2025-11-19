const topicModel = require("../models/topicModel")

const getHomepage = async (req, res) => {


  const local = new Date()
  const date = `${local.getDate()}-${local.getMonth()}-${local.getFullYear()}`
  await topicModel.findAll({
    where: {
      date: date,
    }
  }).then((value) => {
    const data = {
      title: "Homepage",
      rows: value
    }
    res.render("index", data)
  })

  res.status(500)
}

module.exports = {
  getHomepage
};