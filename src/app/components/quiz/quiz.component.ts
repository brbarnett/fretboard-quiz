import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  noteToQuiz: string = '';
  message: string = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.messageUpdated.subscribe(message => {
      this.message = message;
      setTimeout(() => {
        this.message = '';
      }, 1000);
    })
    this.quizService.noteToQuizUpdated.subscribe(note => this.noteToQuiz = note);
  }

}
