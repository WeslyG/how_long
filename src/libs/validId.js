import { EventModel } from '../models/eventModel';

export const validId = async id => {
  const answer = await EventModel.findById(id);
  console.log(answer);

};
