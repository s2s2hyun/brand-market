import { atom } from "recoil";

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

// export const isInfo = atom({
//     key: "isInfo",
//     default: false,
// });

export const visitedPageState = atom({
    key: "visitedPageState",
    default: "/",
});

export const basketsState = atom({
    key: "basketsState",
    default: [],
});
