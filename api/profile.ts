import instance from './axios';

export async function getBothProfilePictures(address: string) {
  let avatarUrl = `/static/avatars/${address}`;
  const response = await instance.get(avatarUrl);
  if (response.status === 200) {
    avatarUrl = `${instance.defaults.baseURL}${avatarUrl}`;
  } else {
    avatarUrl = '/images/profile-avatar.png';
  }

  return { avatar: avatarUrl, cover: 'bbb.jpg' }
}
