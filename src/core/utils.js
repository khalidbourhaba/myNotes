export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const confirmCodeValidator = confirmCode => {
  if (!confirmCode || confirmCode.length <= 0) return 'code cannot be empty.';

  return '';
};

export const noteValidator = note => {
  if (!note || note.length <= 0) return 'note cannot be empty.';

  return '';
};