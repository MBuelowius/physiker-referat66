import  React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';
import Answer from '../../model/answer';
import Question from '../../model/question';
import Container from '../../shared/container';
import AnswerTile from './answer_tile';
import QuestionTile from './question_tile';

function DialogView(props: any) {

    const quest : Question = {
        text: "Welche Situation wählst du?",
        answers: [
            {
                text: "Ein Gespräch mit Einstein",
                effect: null,
                following_question: {
                    text: "Einstein will wissen, ob Möbius seine Entdeckung öffentlich machen will.",
                    answers: [{
                            text: "Nein sie muss vernichtet werden dieses war der größte Fehler überhaupt.",
                            effect: null,
                            following_question: {
                                text: "Wäre der Ruhm es nicht Wert, dass man sich sie doch der Allgemeinheit mitteilt.",
                                answers: [{
                                        text: "Ja ein Nobelpreis hätte etwas für sich.",
                                        effect: null,
                                        following_question: {
                                            text: "Die Allgemeinnis erfährt alles und wer weiß was noch kommen wird. Die Soviets und Amis bitten eine Stelle an.",
                                            answers: [{
                                                    text: "Ich finde das Angebot der Soviets besser.",
                                                    effect: "BadEnding1",
                                                    following_question: null
                                                },
                                                {
                                                    text: "Ich finde das Angebot der Amis besser.",
                                                    effect: "BadEnding2",
                                                    following_question: null
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        text: "Nein kein Ruhm es dieses Leid wert.",
                                        effect: null,
                                        following_question: {
                                            text: "Du hütest dein Geheimnis für den Moment doch was wird als nächstes passieren… es stellt sich heraus, dass die Leiterin alles wusste und immer alles wusste. Wir tuen alles, um sie zu stoppen.",
                                            answers: [{
                                                text: "Es gibt kein Entkommen mehr",
                                                following_question : null,
                                                effect: "CanonEnding"
                                            }]
                                        }
                                    },
                                    {
                                        text: "Vielleicht nicht die Anerkennung aller aber mancher.",
                                        effect: null,
                                        following_question: {
                                            text: "Einstein hatte recht ich muss mich für ein System entscheiden.",
                                            answers: [{
                                                    text: "Der Kommunismus ist der richtige Weg. Ich vertraue ihm mehr. Einsteins Argumente über zeugen mich!",
                                                    effect: "BadEnding1",
                                                    following_question: null,
                                                },
                                                {
                                                    text: "Der Kaptialismus ist der einizge Weg unter dem das Geheimnis niemand kiregt, weil es zu teuer ist. Ich vertraue ihm mehr. Newtons Argumente über zeugen mich!",
                                                    effect: "BadEnding2",
                                                    following_question: null,
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            text: "Ja natürlich, sie sollen der Allgemeinheit gehören. ",
                            effect: null,
                            following_question: {
                                text: "Die Erkenntnis wird missbraucht! Wem gelingt es sie als erster sie um zu setzten ",
                                answers: [{
                                        text: "Der UDSSR",
                                        effect: "BadEnding1",
                                        following_question: null,
                                        
                                    },
                                    {
                                        text: "Den USA",
                                        effect: "BadEnding2",
                                        following_question: null,
                                    },
                                    {
                                        text: "Die Verrückte Heimleiterin",
                                        effect: "CanonEnding",
                                        following_question: null,
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                text: "Ein Gespräch mit Monika ",
                effect: null,
                following_question: {
                    text: "Die Krankenschwester Monika Stettler gesteht ihre Liebe und blickt durch den gespielten Wahnsinn durch.",
                    answers: [{
                            text: "Ich muss sie töten nicht dass mein Geheimnis herauskommt.",
                            effect: null,
                            following_question: {
                                text: "Du tötest Monika und der Kommissar Richard Voß ermittelt im Mord, doch ohne Erfolg. Du hast dich selbst in der Anstalt permanent festgesetzt dadurch da du eine Gefahr bist genau wie Newton und Einstein.",
                                answers: [{
                                        text: "Alles war um sonst...",
                                        effect: "CanonEnding",
                                        following_question: null,
                                    },
                                    {
                                        text: "Jetzt kann nie jemand an mein Geheimnis kommen.",
                                        effect: "GoodEnding1",
                                        following_question: null,
                                    }
                                ]
                            }
                        },
                        {
                            text: "Alles ist so perfekt mit ihr ich bin auf Wolke 7! Was soll schon passieren mit ihr ist mein Geheimnis bestimmt sicher.",
                            effect: "GoodEnding2",
                            following_question: null,
                        },
                        {
                            text: "Ich liebe sie auch ich brenne mit ihr durch!",
                            effect: null,
                            following_question: {
                                text: "Du verlässt die Irrenanstalt und du lässt dich motivieren deine Ergebnisse zu veröffentlichen die ganze Welt will dich nun anstellen und du hast die Wahl zwischen den beiden Großmächten. Doch musst du das Angebot von einer annehmen, weil sonst der Schutz eurer Liebe nicht mehr möglich ist. Wen wählst du.",
                                answers: [{
                                        text: "Der American Dream wäre besser für unser Glück",
                                        effect: "BadEnding1",
                                        following_question: null,
                                    },
                                    {
                                        text: "Ich will Gleichheit",
                                        effect: "BadEnding2",
                                        following_question: null,
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    };

    const history = useHistory()

    const [question, setQuestion] = useState<Question>(quest);

    const updateQuestion = (answer: Answer | null) => {
        
        if(answer?.following_question!=null) {
            setQuestion(answer.following_question);
            
        }
        switch(answer?.effect) {
            case "CanonEnding": 
             history.push("/ending/1");
             break;
             case "BadEnding1": 
             history.push("/ending/2");
             break;
             case "BadEnding2": 
             history.push("/ending/3");
             break;
             case "GoodEnding1": 
             history.push("/ending/4");
             break;
             case "GoodEnding2": 
             history.push("/ending/5");
             break;
             default:
                 break;
        }
        
    }

    return (
        <Container>
            <QuestionTile title={question.text}/>
            {question?.answers.map(
                answer =>
                    <AnswerTile answer={answer.text} updateQuestions={(e : any) => updateQuestion(answer) } />
            )}
        </Container>

    );
}

export default DialogView;