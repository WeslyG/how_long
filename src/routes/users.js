module.export = app => {

  app.get('/user/', (req, res) => {
    res.send({ message: "work"})
  })
};