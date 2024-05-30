interface Props {
  IsLoading: boolean;
}

export default function Loading({ IsLoading }: Props) {
  return (
    <div
      className={`${IsLoading ? ' bg-white w-full h-full absolute z-20 bg-opacity-40 flex flex-col justify-center items-center' : 'hidden'}`}
    >
      <div className="flex items-center justify-center space-x-2">
        <div className="h-1 w-1 animate-ping rounded-full bg-black"></div>
        <div className="h-1 w-1 animate-ping rounded-full bg-black delay-150 "></div>
        <div className="h-1 w-1 animate-ping rounded-full bg-black delay-300"></div>
      </div>
      <div className="mt-5">검사중 입니다</div>
    </div>
  );
}
