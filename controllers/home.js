const Message = require(`../models/message`);

// GET: /
module.exports.getHome = (req, res) => {
  res.render(`home`, {
    data: Message.fetchAll(),
  });
};

// POST: /
module.exports.postHome = (req, res) => {
  const message = new Message(req.body.id, req.body.message);
  message.save();
  res.redirect(`/`);
};

// GET: /:messageId
module.exports.getMessage = (req, res) => {
  res.render(`message`, {
    title: req.params.messageId,
    message: Message.fetchAll().find(
      (element) => element.mid === parseInt(req.params.messageId)
    ),
  });
};
