import promptSync from "prompt-sync";
const prompt = promptSync();

const QUESTION_NUMBERS = 20;
const STUDENT_NUMBERS = 50;
const MEAN = 12;

function examAnswers() {
  const answerKey = [];
  for (let i = 0; i < QUESTION_NUMBERS; i++) {
    answerKey.push(Math.floor(Math.random() * 5) + 1);
  }
  return answerKey;
}

export function examScoreAnalysis() {
  const answerKey = examAnswers();
  let correctQuestions = 0;

  for (let studentIndex = 0; studentIndex < STUDENT_NUMBERS; studentIndex++) {
    const studentAnswerKey = [];
    console.log(`Student (${studentIndex + 1}). Insert your answers, use just numbers (1-5).`);

    for (let questionIndex = 0; questionIndex < QUESTION_NUMBERS; questionIndex++) {
      console.log(`Question number ${questionIndex + 1}.`);
      const studentAnswer = parseInt(prompt(">"));
      studentAnswerKey.push(studentAnswer);

      if (studentAnswerKey[questionIndex] === answerKey[questionIndex]) {
        correctQuestions++;
      }
    }

    console.log(`That's the answer key: ${answerKey}`);
    console.log(`These're your rigth answers: ${correctQuestions}`);

    if (correctQuestions.length >= MEAN) {
      console.log("APPROVED");
    } else {
      console.log("FAILED");
    }
  }
}
examScoreAnalysis();
