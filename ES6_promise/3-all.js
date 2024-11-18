import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser().then((user) => {
    uploadPhoto().then((response) => {
      console.log(response.body, user.firstName, user.lastName);
    });
  });
}
