interface HighlightTextProps {
  containerClassName?: string;
  textClassName?: string;
  text: string;
}

export default function HighlightText(props: HighlightTextProps) {
  const { containerClassName, textClassName, text } = props;
  // 달러 표시 또는 샵 표시로 감싼 부분을 식별하는 정규식
  const regex = /(\$.*?\$)|(#.*?#)/g;

  // 텍스트를 달러 또는 샵 표시로 감싼 부분 기준으로 분리
  const parts = text.split(regex).filter((part) => part);

  return (
    <p className={containerClassName + ' ' + textClassName}>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          // 달러 표시로 감싼 부분을 강조 (볼드 처리)
          return (
            <span
              className={textClassName}
              style={{ fontWeight: 'bold' }}
              key={index}
            >
              {part.slice(1, -1)}
            </span>
          );
        } else if (part.startsWith('#') && part.endsWith('#')) {
          // 샵 표시로 감싼 부분에 밑줄 처리
          return (
            <u
              className={textClassName}
              style={{ textDecoration: 'underline' }}
              key={index}
            >
              {part.slice(1, -1)}
            </u>
          );
        }
        return part; // 나머지 텍스트 부분
      })}
    </p>
  );
}
