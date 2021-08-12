import { graduateYear } from "./constants";
import { getYear } from "./getYear"

export const getOrder = () => {
    const currentYearsCount = getYear() - graduateYear;
    switch (currentYearsCount) {
        case 0:
            return 'first'
        case 1:
            return 'second'
        case 2:
            return 'third'
        case 3:
            return 'fourth'
    }
}