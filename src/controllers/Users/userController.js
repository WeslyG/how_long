import { UserModel } from '../../models/userModel';
// import { isNumeric } from 'validator';

export const createUser = async user => {
  if (user.name && user.password && user.age) {

    const userOnSave = new UserModel({
      name: user.name,
      password: user.password,
      age: user.age
    });
    try {
      const result = await userOnSave.save();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  } else {

  }
};

// const kitty = new Cat({
//   name: 'Zildjian'
// });

// kitty.save().then(() => console.log('meow'));


