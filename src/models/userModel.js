import mongoose from 'mongoose';

export const UserModel = mongoose.model('User', {
  name: String,
  password: String,
  age: Number
});
