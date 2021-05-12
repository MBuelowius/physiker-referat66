import Question from "./question";

type Answer = {
    text: String,
    following_question : Question | null,
    effect: String | null
};

export default Answer;