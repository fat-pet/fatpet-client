// import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <p className="text-sm font-extrabold tracking-tighter">
                반려동물 비만도 검사
            </p>
            <Link
                to="/"
                className="font-['Rastanty'] text-8xl font-extrabold text-green-600"
            >
                Fatpet
            </Link>
        </header>
    );
}
