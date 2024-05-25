import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function withAuthAdmin<T extends object>(
  WrappedComponent: React.ComponentType<T>,
) {
  return function AuthenticatedComponent(props: T) {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    useEffect(() => {
      if (role !== 'ADMIN') {
        navigate('/signin'); // 리다이렉션 후에는 컴포넌트를 렌더링하지 않음
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <WrappedComponent {...props} />;
  };
}
