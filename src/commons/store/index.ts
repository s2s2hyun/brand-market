import { atom } from "recoil";

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

export const isInfo = atom({
    key: "isInfo",
    default: false,
});

export const visitedPageState = atom({
    key: "visitedPageState",
    default: "/",
});

export const userInfoState = atom({
    key: "userInfoState",
    default: {
        email: "",
        name: "",
    },
});

export const gpsInfo = atom({
    key: "gpsInfo",
    default: { La: 0, Ma: 0 },
});

export const Address = atom({
    key: "Address",
    default: "",
});

export const TodayItemList = atom({
    key: "TodayItemList",
    default: false,
});

// 데이피커 startDate
export const fromValues = atom({
    key: "fromValue",
    default: "",
});

// 데이피커 endDate
export const toValues = atom({
    key: "toValue",
    default: "",
});

export const triger = atom({
    key: "triger",
    default: false,
});

export const fetchTriger = atom({
    key: "fetchTriger",
    default: false,
});

// 결제내역 인덱스
export const indexNum = atom({
    key: "index",
    default: 0,
});

export const sessionTriger = atom({
    key: "sessionTriger",
    default: false,
});
