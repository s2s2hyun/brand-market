export const getDate = (value: Date) => {
    const today = new Date();
    const timeValue = new Date(value);

    const gapTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (gapTime < 1) return "방금 전";
    if (gapTime < 60) {
        return `${gapTime}분 전`;
    }

    const gapTimeHour = Math.floor(gapTime / 60);
    if (gapTimeHour < 24) {
        return `${gapTimeHour}시간 전`;
    }

    const gapTimeDay = Math.floor(gapTime / 60 / 24);
    if (gapTimeDay < 365) {
        return `${gapTimeDay}일 전`;
    }

    return `${Math.floor(gapTimeDay / 365)}년 전`;
};
