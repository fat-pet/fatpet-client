import { FaClipboardList, FaStethoscope } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
export default function Diagnose() {
    const buttonStyle =
        'w-1/3 h-12 border-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center mr-2 text-xs xsm:text-sm sm:text-base';
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-around h-16 items-center">
            <button
                className={buttonStyle}
                onClick={() => navigate('/inputData/detail')}
            >
                <FaStethoscope className="w-5 h-5 mr-2 " />
                BCS 검사하기
            </button>
            <button
                className={buttonStyle}
                onClick={() => navigate('./resultList')}
            >
                <FaClipboardList className="w-5 h-5 mr-2 " />
                검사 기록보기
            </button>
        </div>
    );
=======
interface Props {
  id: number;
>>>>>>> ca73cb4d08e20b282fed2c024a5b571bdb83f5bf
}

const Diagnose: React.FC<Props> = ({ id }) => {
  const buttonStyle =
    'w-1/3 h-12 border-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center mr-2 text-xs xsm:text-sm sm:text-base shadow:sm';
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-around font-bold my-5">
      <button
        className={buttonStyle}
        onClick={() => navigate(`/pet/diagnose/${id}`)}
      >
        <FaStethoscope className="w-5 h-5 mr-2 " />
        BCS 검사하기
      </button>
      <button
        className={buttonStyle}
        onClick={() => navigate('/pet/resultlist')}
      >
        <FaClipboardList className="w-5 h-5 mr-2 " />
        검사 기록보기
      </button>
    </div>
  );
};

export default Diagnose;
