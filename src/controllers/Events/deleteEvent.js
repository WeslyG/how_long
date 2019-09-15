import { EventModel } from '../../models/eventModel';

export const deleteEvent = async data => {
  if (!data.id) {
    const result = await EventModel.findOne({ '_id': data});
    console.log(result);
  } else {
    const result = await EventModel.findOne({ '_id': data.id});
    console.log(result);
  }
  // try {
  //   return await EventModel.deleteOne({ '_id': id});
  // } catch (err) {
  //   console.log(err);
  //   return err;
  // }
};
