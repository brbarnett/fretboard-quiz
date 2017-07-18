import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  noteToQuiz: string = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.noteToQuiz.subscribe(note => this.noteToQuiz = note);
  }

}
