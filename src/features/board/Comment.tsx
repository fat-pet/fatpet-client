import { deleteComment } from '@/api/axios';
import { CommentProps } from '@/types/types';
import { FaUser, FaRegTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: CommentProps;
}

export default function Comment({ data }: Props) {
    const navigate = useNavigate();
    const handleClick = () => {
        deleteComment(data.id).then(() => navigate(0));
    };
    return (
        <div className="px-4 py-3 tracking-tighter border-b-2">
            <header className="w-full flex items-center justify-between mb-1 font-bold">
                <div className="flex items-center">
                    <FaUser className="text-2xl text-gray-400 mr-2" />
                    <p>{data.member.nickname}</p>
                </div>
                <button onClick={handleClick}>
                    <FaRegTrashAlt />
                </button>
            </header>
            <p>{data.content}</p>
            <p className="text-sm text-gray-500">{`${data.createdDate[0]}/0${data.createdDate[1]}/0${data.createdDate[2]}`}</p>
        </div>
    );
}
