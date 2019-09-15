import { EventModel } from '../../models/eventModel';

export const updateEvent = async (id, event) => {
  // find id and replase
  const updateModel = new EventModel({
    name: event.name,
    description: event.description,
    date: event.date
  });
  try {
    return await updateModel.updateOne({ '_id': id});
  } catch (err) {
    console.log(err);
    return err;
  }
};
