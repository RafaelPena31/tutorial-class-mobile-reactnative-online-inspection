import { PhotoFile } from 'react-native-vision-camera';
import { create } from 'zustand';

interface HomeStore {
  photo: PhotoFile | null;

  updatePhoto(photo: PhotoFile): void;
}

export const useHomeStore = create<HomeStore>(set => ({
  photo: null,

  updatePhoto: (photo: PhotoFile) => set({ photo })
}));
