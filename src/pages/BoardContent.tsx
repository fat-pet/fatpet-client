import { deletePost, getPostContent, postComment } from '@/api/axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaEdit, FaRegTrashAlt, FaUser } from 'react-icons/fa';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { CommentProps } from '@/types/types';
import Comment from '@/features/board/Comment';

interface BoardContent {
    id: number;
    createdDate: string;
    nickname: string;
    title: string;
    content: string;
    comments: CommentProps[];
}

export default function BoardContent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const commentRef = useRef<HTMLInputElement>(null);
    const [data, setData] = useState<BoardContent>();
    useEffect(() => {
        if (id) {
            getPostContent(Number(id)).then((res) => {
                console.log(res.data.body);
                setData(res.data.body);
            });
        } else {
            navigate(-1);
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const content = commentRef.current!.value;
        postComment(Number(id), content).then(() => navigate(0));
    };

    const handleDelete = () => {
        deletePost(data!.id).then(() => navigate('/board'));
    };

    const handleEdit = () => {
        navigate(`/board/edit/${id}`, { state: data });
    };

    return (
        <div className="relative">
            <header>
                <p className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaUser className="text-4xl rounded-lg border-gray-500 border-2" />
                        <p className="flex flex-col ml-2">
                            <p className="font-bold text-lg">
                                {data?.nickname}
                            </p>
                            <p className="text-gray-400">{`${data?.createdDate[0]}/${data?.createdDate[1]}/${data?.createdDate[2]}`}</p>
                        </p>
                    </div>
                    <div>
                        <button onClick={handleEdit}>
                            <FaEdit className="text-2xl mr-3" />
                        </button>
                        <button onClick={handleDelete}>
                            <FaRegTrashAlt className="text-2xl" />
                        </button>
                    </div>
                </p>

                <p className="text-xl font-bold tracking-tighter mt-3">
                    {data?.title}
                </p>
            </header>

            {/* 게시글 내용 */}
            <div className="mt-3 w-full">{data?.content}</div>

            {/* 댓글 */}
            <div className="border-t-2 mt-10">
                <p className="font-bold">{`댓글 ${data?.comments.length}`}</p>

                <div className="mt-5 mb-10">
                    {data?.comments.map((item) => {
                        return <Comment data={item} />;
                    })}
                </div>

                <form
                    className="w-full flex justify-between items-center absolute -bottom-10 border-t-2 h-10"
                    onSubmit={handleSubmit}
                >
                    <input
                        placeholder="댓글을 입력해주세요"
                        className="w-full"
                        ref={commentRef}
                    />
                    <button>
                        <HiOutlinePaperAirplane className="text-3xl" />
                    </button>
                </form>
            </div>
        </div>
    );
}
