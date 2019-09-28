import { EventModel } from '../../models/eventModel';
import { eventValidator } from '../../validators/eventValidator';
import { validId } from './../../libs/validId';

export const updateEvent = async (req, res) => {
  // find id and replase
  const event = req.body;
  // const valid = eventValidator(req.body);
  const valid = eventValidatorUpdate(req.body);


  if (valid.status === true) {
    if (validId(event.id) === true) {
      const updateModel = new EventModel({
        name: event.name,
        description: event.description,
        date: event.date
      });
      try {
        const new_model =  await updateModel.updateOne({
          '_id': event.id
        });
        res.status(200).send(new_model);
      } catch (err) {
        console.log(err);
        res.status(500).send({
          message: 'something when wrong'
        });
      }
    } else {
      res.status(400).send({
        message: 'id is not valid'
      });
    }
  } else if (valid.status === false) {
    res.status(valid.statusCode).send({ message: valid.message });
  } else {
    res.status(500).send({
      message: 'something when wrong'
    });
  }
};
