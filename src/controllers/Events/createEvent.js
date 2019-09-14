import { EventModel } from '../../models/eventModel';

export const createEvent = async event => {
  const eventToSave = new EventModel({
    name: event.name,
    description: event.description,
    date: event.date
  });
  try {
    return await eventToSave.save();
  } catch (err) {
    console.log(err);
    return err;
  }
};
