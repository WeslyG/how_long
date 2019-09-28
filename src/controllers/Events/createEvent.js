import { EventModel } from '../../models/eventModel';
import { eventValidator } from '../../validators/eventValidator';

export const createEvent = async (req, res) => {
  const event = req.body;
  const valid = eventValidator(req.body);
  if (valid.status === true) {
    const eventToSave = new EventModel({
      name: event.name,
      description: event.description,
      date: event.date
    });
    try {
      const data = await eventToSave.save();
      res.status(201).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  } else if (valid.status === false) {
    res.status(valid.statusCode).send({message: valid.message});
  } else {
    res.status(500).send({ message: 'something when wrong'});
  }
};
