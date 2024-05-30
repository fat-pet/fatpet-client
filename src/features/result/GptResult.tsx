// import { LiaDumbbellSolid } from 'react-icons/lia';

interface Props {
  gptAnswer: string[];
}

export default function GptResult({ gptAnswer }: Props) {
  return (
    <div className="w-full">
      <header className="text-lg font-medium ml-2 mb-2 mt-5 flex items-center">
        {gptAnswer[0]}
      </header>
      <div className="border-[1px] bg-gray-50 rounded-xl border-gray-300 p-5 whitespace-pre-line">
        {gptAnswer.length > 1 ? (
          <>
            <p>{gptAnswer[1]}</p>
            <p>{gptAnswer[2]}</p>
            <p>{gptAnswer[3]}</p>
          </>
        ) : (
          gptAnswer[1]
        )}
      </div>
    </div>
  );
}
