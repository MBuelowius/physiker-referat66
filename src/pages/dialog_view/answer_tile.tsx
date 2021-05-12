
function AnswerTile(props: any) {

    const { answer, updateQuestions } = props

    return (
        <button onClick={updateQuestions}>
            {answer}
        </button>
    );
}

export default AnswerTile;