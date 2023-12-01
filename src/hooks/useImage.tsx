import { InputChangeHandler, UseImage } from '@/interface/useImage.interface';
import { useCallback, useState } from 'react';

const useImage: UseImage = () => {
  const [image, setImage] = useState<string | null>(null);
  const imageChangeHandler: InputChangeHandler = useCallback((e) => {
    const {
      target: { files },
    } = e;
    const file = files![0];
    const reader = new FileReader();

    reader.onloadend = (loadendEvent: ProgressEvent<FileReader>) => {
      const currenTarget = loadendEvent.currentTarget as FileReader;
      const result = currenTarget.result as string;
      setImage(result);
    };
    reader.readAsDataURL(file);
  }, []);
  const cancelHandler = () => {
    setImage(null);
  };
  return [image, imageChangeHandler, cancelHandler];
};

export default useImage;
