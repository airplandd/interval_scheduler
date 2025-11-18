const getTopicForm = (req, res) => {
  const data = {
    title: "Topic Form",
  }

  res.render("topic_form", data)
}

const createTopic = (req, res) => {

  console.log("The topic name is " + req.body.topic_name)
  res.redirect("/")
}

module.exports = {
  getTopicForm,
  createTopic
}