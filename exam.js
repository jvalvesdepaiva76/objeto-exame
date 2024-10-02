export class Exam {
  constructor(professorAnswer, weight) {
    this.professorAnswer = professorAnswer.values;
    this.weight = weight;
    this.students = [];
  }

  add(studentAnswer) {
    const score = this.calculateScore(studentAnswer.values);
    this.students.push({ student: studentAnswer.student, score });
  }

  calculateScore(studentAnswers) {
    let totalScore = 0;
    for (const question in this.professorAnswer) {
      if (this.professorAnswer[question] === studentAnswers[question]) {
        totalScore += this.weight[question];
      }
    }
    return totalScore;
  }

  avg() {
    const total = this.students.reduce((sum, student) => sum + student.score, 0);
    return total / this.students.length;
  }

  min() {
    const minScore = Math.min(...this.students.map(student => student.score));
    return this.students.filter(student => student.score === minScore).map(student => student.score);
  }

  max() {
    const maxScore = Math.max(...this.students.map(student => student.score));
    return this.students.filter(student => student.score === maxScore).map(student => student.score);
  }

  lt(value) {
    return this.students.filter(student => student.score < value).map(student => student.score);
  }

  gt(value) {
    return this.students.filter(student => student.score > value).map(student => student.score);
  }
}
