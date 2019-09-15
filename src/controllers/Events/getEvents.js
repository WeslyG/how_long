import { EventModel } from '../../models/eventModel';

export const getEvents = async id => {
  if (!id) {
    try {
      return await EventModel.find({});
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    try {
      return await EventModel.findById(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

};
