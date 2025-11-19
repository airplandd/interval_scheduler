const topicModel = require("../models/topicModel")

const getHomepage = async (req, res) => {
  let data = {
    title: "Homepage",
    rows: []
  }

  const local = new Date()
  const date = `${local.getDate()}-${local.getMonth()}-${local.getFullYear()}`
  await topicModel.findAll({
    where: {
      date: date,
    }
  }).then((value) => {
    data.rows = value
  })

  console.log(data)

  res.render("index", data)
}

module.exports = {
  getHomepage
};