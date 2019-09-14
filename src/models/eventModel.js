import mongoose from 'mongoose';

export const EventModel = mongoose.model('Events', {
    name: String,
    description: String,
    date: String
});
