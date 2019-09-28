import { EventModel } from '../../models/eventModel';

const deleteId = async id => {
  try {
    await EventModel.deleteOne({ '_id': id});
    return { message: 'deleted'};
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const deleteEvent = async data => {
  if (!data.id) {
    try {
      const result = await EventModel.findOne({ '_id': data});
      return deleteId(result);
    } catch (err) {
      console.log(err);
      return { message: 'id not found'};
    }
  } else {
    try {
      const result = await EventModel.findOne({ '_id': data.id});
      return deleteId(result);
    } catch (err) {
      console.log(err);
      return { message: 'id not found'};
    }
  }
};
