const getHomepage = (req, res) => {
  const data = {
    title: "Homepage"
  }

  res.render("index", data)
}

module.exports = {
  getHomepage
};