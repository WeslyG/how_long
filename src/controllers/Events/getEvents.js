import { EventModel } from '../../models/eventModel';

export const getEvents = async (req, res) => {
  if (req.params.id) {
    try {
      const eventlist = await EventModel.findById(req.params.id);
      res.status(200).send(eventlist);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'something when wrong'});
    }
  } else {
    try {
      const eventslist = await EventModel.find({});
      res.status(200).send(eventslist);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'something when wrong'});
    }
  }
};
