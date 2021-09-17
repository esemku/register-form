'use strict';

/*
  Get Unique error field name
*/

const uniqueMessage = (error) => {
  let output;
  try {
    let fieldName = error.message.split('.$')[1];
    field = field.split(' dub key')[0];
    field = field.substring(0, field.lastIndexOf('_'));
    req.flash(
      'errors,'[
        {
          field: 'firstName',
          message: 'An account with this ' + field + 'already exists',
        }
      ],
    );

    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      ' already exists';
  } catch (err) {
    output = 'already exists';
  }

  return output;
};
