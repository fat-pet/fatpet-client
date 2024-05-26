interface Props {
  bcs: string;
  setColor?: (color: string) => void;
}

function formatBSC({ bcs, setColor }: Props) {
  if (bcs === 'UNDER') {
    setColor && setColor('#60a5fa');
    return '저체중';
  } else if (bcs === 'IDEAL') {
    setColor && setColor('#22C55E');
    return '정상';
  } else {
    setColor && setColor('#DD4141');
    return '과체중';
  }
}
