interface Props {
  name: string;
  dupName: string | boolean;
  dupId: string | boolean;
}

export default function InputError({ name, dupName, dupId }: Props) {
  const red = 'text-red-500 text-sm font-medium';
  const green = 'text-green-500 text-sm font-medium';

  if (name === 'nickName') {
    if (dupName === 'null') {
      return <></>;
    } else if (dupName === true) {
      return <p className={green}>사용 가능한 닉네임입니다.</p>;
    } else if (dupName === false) {
      return <p className={red}>중복된 닉네임입니다.</p>;
    } else if (dupName === 'error') {
      return <p className={red}>2글자 이상, 10글자 이하이어야 합니다.</p>;
    }
  } else if (name === 'id') {
    if (dupId === 'null') {
      return <></>;
    } else if (dupId === true) {
      return <p className={green}>사용 가능한 아이디입니다.</p>;
    } else if (dupId === false) {
      return <p className={red}>중복된 아이디입니다.</p>;
    } else if (dupId === 'error') {
      return <p className={red}>4글자 이상, 12글자 이하이어야 합니다.</p>;
    }
  }
}
