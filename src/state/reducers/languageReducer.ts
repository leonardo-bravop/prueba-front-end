import { languageAction, SET_LANGUAGE } from "state/actions/actionTypes"

const languageReducer = (
    state: string = "",
    action: languageAction
): string => {
    switch (action.type) {
        case SET_LANGUAGE:
            const { language } = action
            return language.value
    }
    return state
}

export default languageReducer