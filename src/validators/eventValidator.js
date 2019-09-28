
// Struct
// {
//   status: true,
//   statusCode: 400,
//   message: { message: 'some text'}
// }
import { dataValidator } from '../libs/dataValidator';

export const eventValidator = data => {
  if (Object.prototype.hasOwnProperty.call(data, 'name') &&
      Object.prototype.hasOwnProperty.call(data, 'description') &&
      Object.prototype.hasOwnProperty.call(data, 'date')) {
    if (typeof(data.name) === 'string' &&
        typeof(data.description) === 'string' &&
        dataValidator(data.date)) {
      return {
        status: true
      };
    } else {
      return {
        status: false,
        statusCode: 400,
        message: 'Body have not valid field, check your data'
      };
    }
  } else {
    return {
      status: false,
      statusCode: 400,
      message: 'Name, description and date require'
    };
  }
};
