import { IArtist } from '../types/types';
import instance from './axios';

export const getArtists = async () => {
  const { data } = await instance.get<{Address: string, Name: string, Avatar: string}[]>(`/artists`);
  return data.map((item, index) => ({
    id: index,
    name: item.Name.startsWith('0x')
      ? `${item.Name.substring(0, 6)}...${item.Name.substring(item.Name.length - 4)}`
      : item.Name,
    address: item.Address,
    avatar: item.Avatar.length === 0
      ? `https://i.pravatar.cc/300?img=${index}`
      : item.Avatar,
    followers: 0,
    following: 1,
  }))
};

export const artists: IArtist[] = [
  {
    id: '1',
    name: '@mike',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=1',
    followers: 0,
    following: 1,
  },
  {
    id: '2',
    name: '@kate',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=2',
    followers: 0,
    following: 1,
  },
  {
    id: '3',
    name: '@olly',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=3',
    followers: 0,
    following: 1,
  },
  {
    id: '4',
    name: '@meggy',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=4',
    followers: 0,
    following: 1,
  },
  {
    id: '5',
    name: '@rick',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=5',
    followers: 0,
    following: 1,
  },
  {
    id: '6',
    name: '@perl',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=6',
    followers: 0,
    following: 1,
  },
  {
    id: '7',
    name: '@morty',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=7',
    followers: 0,
    following: 1,
  },
  {
    id: '8',
    name: '@angela',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=8',
    followers: 0,
    following: 1,
  },
  {
    id: '9',
    name: '@colly',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=9',
    followers: 0,
    following: 1,
  },
  {
    id: '10',
    name: '@martisha',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=10',
    followers: 0,
    following: 1,
  },
  {
    id: '11',
    name: '@sol',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=11',
    followers: 0,
    following: 1,
  },
  {
    id: '12',
    name: '@agnes',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=12',
    followers: 0,
    following: 1,
  },
  {
    id: '13',
    name: '@john',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=13',
    followers: 0,
    following: 1,
  },
  {
    id: '14',
    name: '@petr',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=14',
    followers: 0,
    following: 1,
  },
  {
    id: '15',
    name: '@elena',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=15',
    followers: 0,
    following: 1,
  },
  {
    id: '16',
    name: '@pasha',
    address: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
    avatar: 'https://i.pravatar.cc/300?img=16',
    followers: 0,
    following: 1,
  },
];
