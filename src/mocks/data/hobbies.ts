import { THobby } from '@/lib/types/refs';

export const hobbies: THobby[] = [
  'Watching TV/Movies',
  'Music Listening',
  'Video Gaming',
  'Fitness/Exercise',
  'Reading',
  'Social Networking',
  'Cooking/Baking',
  'Traveling',
  'Photography',
  'Sports (Playing or Watching)',
  'Learning Languages',
  'Outdoor Activities (Hiking, Camping)',
  'Podcast Listening',
  'Board Games',
  'DIY/Crafts',
  'Dancing',
  'Playing Musical Instruments',
  'Writing/Blogging',
  'Programming',
  'Art/Drawing/Painting',
  'Yoga/Meditation',
  'Cycling',
  'Coffee/Tea Tasting',
  'Wine/Beer Tasting',
  'Fashion/Styling',
  'Creative Writing',
  'Gardening',
  'Astronomy',
  'Birdwatching',
  'Stand-up Comedy',
];

export const getRandomHobby = (): THobby => {
  const randomIndex = Math.floor(Math.random() * hobbies.length);
  return hobbies[randomIndex];
};

export const getRandomHobbies = (count: number = 5): THobby[] => {
  const randomCount = Math.floor(Math.random() * count) + 1;
  const shuffled = [...hobbies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, randomCount);
};
