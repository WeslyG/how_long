import {Schema, model} from 'mongoose';

const eventShema = new Schema({
  name: { type: String, default: ''},
  description: {type: String, default: ''},
  date: {type: String, default: ''}
}, {
  timestamps: true
});

eventShema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

export const EventModel = model('Events', eventShema);
