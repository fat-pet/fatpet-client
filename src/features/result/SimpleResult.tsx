interface Props {
  name: string;
  value: string;
  comment?: string;
}

export default function SimpleResult({ name, value, comment }: Props) {
  return (
    <div className="w-40 flex justify-between">
      <div className="w-full aspect-[1/1] border-2 rounded-xl p-3 flex flex-col justify-between">
        <div className="text-lg font-medium flex justify-between items-center">
          <p className="text-xl">{name}</p>
        </div>
        <div className="text-2xl font-medium">{value}</div>
        <div className="text-gray-400 w-full text-center ">
          <p className="text-sm whitespace-pre-line">{comment}</p>
        </div>
      </div>
    </div>
  );
}
