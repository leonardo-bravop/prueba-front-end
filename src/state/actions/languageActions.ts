import { DispatchType, Language, languageAction, SET_LANGUAGE } from "./actionTypes"

export const SetLanguage = (language: Language) => {
    const action: languageAction = {
        type: SET_LANGUAGE,
        language,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}