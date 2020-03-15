import { BTN_CLICKED } from "./constants";

export function btnClicked(input) {
    return {
        type: BTN_CLICKED,
        input,
    }
}