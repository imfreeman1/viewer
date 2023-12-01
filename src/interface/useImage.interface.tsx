type UseImageResult = [
  image: string | null,
  imageChangeHandler: InputChangeHandler,
  cancelHandler: () => void,
];

export type InputChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
) => void;
export type UseImage = () => UseImageResult;
