import { atom } from "recoil";

export const DongilAtom = atom(
    {
        key: "Dongil",
        default: {
            age: "23",
            props: "handsome"
        }
    }
);