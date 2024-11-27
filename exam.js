export class Exam {
  constructor(answer, weight) {
    this.professorAnswer = answer.values;
    this.weight = weight;
    this.exams = [];
  }

  add(exam) {
    const { values } = exam;
    const score = Object.keys(this.weight).reduce((total, question) => {
      return total + (this.professorAnswer[question] === values[question] ? this.weight[question] : 0);
    }, 0);
    this.exams.push({ ...exam, score });
  }

  avg() {
    const totalScore = this.exams.reduce((sum, exam) => sum + exam.score, 0);
    return this.exams.length > 0 ? totalScore / this.exams.length : 0;
  }

  min(count = 1) {
    const sortedScores = this.exams.map(e => e.score).sort((a, b) => a - b);
    return sortedScores.slice(0, count);
  }

  max(count = 1) {
    const sortedScores = this.exams.map(e => e.score).sort((a, b) => b - a);
    return sortedScores.slice(0, count);
  }

  lt(limit) {
    return this.exams.map(e => e.score).filter(score => score < limit);
  }

  gt(limit) {
    return this.exams.map(e => e.score).filter(score => score > limit);
  }
}
