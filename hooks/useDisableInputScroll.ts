import { useEffect } from 'react';

export const useDisableInputScroll = () => {
  useEffect(() => {
    const disableInputScroll = () => {
      //@ts-ignore
      if (document?.activeElement?.type === 'number') {
        //@ts-ignore
        document.activeElement?.blur();
      }
    };

    document.addEventListener('wheel', disableInputScroll);

    () => {
      document.removeEventListener('wheel', disableInputScroll);
    };
  }, []);
};
