import {feedbacks} from "../feedbacks.config";

export const getFeedback = (result, id) => {
   return feedbacks[result].find(feedback=> feedback.id===id)
}