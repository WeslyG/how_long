import { EventModel } from '../../models/eventModel';

export const getEvents = async () => {
  try {
    return await EventModel.find({});
  } catch (err) {
    console.log(err);
    return err;
  }
};
