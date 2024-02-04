// 서류 접수 시작일, 마감일, 최종 합격자 발표일
const RECRUIT_DOCUMENT_SUBMISSION_START_DATE = new Date(
  '2024-01-22T00:00:00+09:00'
);
const RECRUIT_DOCUMENT_SUBMISSION_END_DATE = new Date(
  '2024-02-04T23:59:59+09:00'
);
const RECRUIT_END_DATE = new Date('2024-02-26T23:59:59+09:00');

// 현 기수 정보
const CURRENT_YEAR = 12;

export type RecruitTimeStatus =
  | 'BEFORE_DOCUMENT_SUBMISSION'
  | 'DOCUMENT_SUBMISSION'
  | 'INTERVIEW'
  | 'RECRUITING_FINISHED';

export const getRecruitInfo = (): {
  currentYear: number;
  remainingDays: number;
  status: RecruitTimeStatus;
} => {
  const now = new Date();

  if (now < RECRUIT_DOCUMENT_SUBMISSION_START_DATE) {
    return {
      currentYear: CURRENT_YEAR,
      remainingDays: Math.floor(
        (RECRUIT_DOCUMENT_SUBMISSION_START_DATE.getTime() - now.getTime()) /
          (1000 * 3600 * 24)
      ),
      status: 'BEFORE_DOCUMENT_SUBMISSION',
    };
  }

  if (now < RECRUIT_DOCUMENT_SUBMISSION_END_DATE) {
    return {
      currentYear: CURRENT_YEAR,
      remainingDays: Math.floor(
        (RECRUIT_DOCUMENT_SUBMISSION_END_DATE.getTime() - now.getTime()) /
          (1000 * 3600 * 24)
      ),
      status: 'DOCUMENT_SUBMISSION',
    };
  }

  if (now < RECRUIT_END_DATE) {
    return {
      currentYear: CURRENT_YEAR,
      remainingDays: Math.floor(
        (RECRUIT_END_DATE.getTime() - now.getTime()) / (1000 * 3600 * 24)
      ),
      status: 'INTERVIEW',
    };
  }

  return {
    currentYear: CURRENT_YEAR,
    remainingDays: 0,
    status: 'RECRUITING_FINISHED',
  };
};
