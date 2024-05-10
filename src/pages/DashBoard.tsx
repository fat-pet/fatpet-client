import { Link, useNavigate } from 'react-router-dom';
import { FaGear } from 'react-icons/fa6';
import { deletePet, getPetList } from '@/api/axios';
import { useEffect, useState } from 'react';
import { PetProps } from '@/types/types';
import PetStatus from '@/features/dashBoard/PetStatus';
import PetNotStatus from '@/features/dashBoard/PetNotStatus';
import Diagnose from '@/features/dashBoard/Diagnose';
import { ColumnBar } from '@/features/chart/ColumnBar';

export default function DashBoard() {
    const [pet, setPet] = useState<PetProps | null>(null);
    const LSData: string | null = localStorage.getItem('petData');
    const petData = LSData ? JSON.parse(LSData) : '';
    const navigate = useNavigate();

    useEffect(() => {
        petData
            ? setPet(petData)
            : getPetList().then((data) => setPet(data.data.body[0]));
    }, []);

    function handleDelete() {
        deletePet(pet!.id).then(() => {
            localStorage.removeItem('petData');
            getPetList().then((data) => {
                data.data.body ? setPet(data.data.body[0]) : setPet(null);
            });
            navigate('/dashboard');
        });
    }

    return (
        <div className="flex flex-col items-center font-bold tracking-tighter h-full ">
            <header className="flex justify-between w-full items-center">
                <p className="text-lg">대시보드</p>
                <Link to="./editMember">
                    <FaGear className="text-2xl" />
                </Link>
            </header>

            <div className="w-full h-1/3 flex items-center">
                {/* 펫 status */}
                {pet ? (
                    <PetStatus
                        pet={pet as PetProps}
                        handleDelete={handleDelete}
                    />
                ) : (
                    //등록된 펫이 없습니다 status
                    <PetNotStatus />
                )}
                {/* 검사하기 &  검사 기록보기 버튼 */}
            </div>
            {pet && <Diagnose />}

            {pet && (
                <div className="w-full h-1/2 flex flex-col justify-center">
                    <span>펫 변화 추이</span>
                    <span className="text-sm text-gray-400">(최근 3회)</span>
                    <ColumnBar
                        name1="kg"
                        data1={datas.map((item) => item.kg)}
                        name2="BCS"
                        data2={datas.map((item) => item.BCS)}
                    />
                    <p className="text-sm text-gray-500">
                        *BCS(Body Condition Score) 펫의 비만도를 1~9만큼 측정한
                        값
                    </p>
                </div>
            )}
        </div>
    );
}

export const datas = [
    {
        name: '4/17',
        kg: 35,
        BCS: 8,
    },
    {
        name: '4/25',
        kg: 25,
        BCS: 6,
    },
    {
        name: '5/6',
        kg: 23,
        BCS: 5,
    },
];
