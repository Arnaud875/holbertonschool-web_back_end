import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return (await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]))
    .map((res) => ({ status: res.status, value: res.status === 'fulfilled' ? res.value : `Error: ${res.reason.message}` }));
}
