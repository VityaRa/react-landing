import { birthdayYear } from "./constants"

export const getYear = () => {
    return (new Date().getFullYear() - birthdayYear)
}