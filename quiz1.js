"use strict";

var quizTitle = 'Quiz 1';
var questionNumber = 0;

var questions = [
    {
    questionId: 1,
    question: 'What is my favorite soccer team in MLS?',
     type: 'Multi',
     answers: [{answer: 'NY FC',
                id: 1},
                {answer: 'DC United',
                id: 2},
                {answer: 'Atlanta United FC',
                id: 3},
                {answer: 'Minnesota United',
                id: 4}],
     answerId: 3
    },
     {
        questionId: 2,
        question: 'Which is better on French Fries?',
         type: 'Multi',
         answers: [{answer: 'Ketchup',
                    id: 1},
                    {answer: 'Mustard',
                    id: 2},
                    {answer: 'Mayo',
                    id: 3},
                    {answer: 'Pickle Juice',
                    id: 4}],
         answerId: 1

     },

     {
        questionId: 3,
        question: 'What goes best with Mexican Food?',
         type: 'Multi',
         answers: [{answer: 'Ketchup',
                    id: 1},
                    {answer: 'Margarita',
                    id: 2},
                    {answer: 'Orange Juice',
                    id: 3},
                    {answer: 'Pickle Juice',
                    id: 4}],
         answerId: 2

     }
    ];





    Vue.component('question', {
        props: ['question'],
        template: `
                <div>Question: {{question}} </div>
        
        `,
        data() {
            return{
                questions: []
            }
        }
    })


    Vue.component('answer',{
        props: ['next'],
        template: `
                    <li>{{ next }}</li>
        
        `,
        data() {
            return{
                answers: []
            }
        }


    })

    new Vue({
        el: '#quiz',
        data: { 
            question: questions[questionNumber].question,
            answers: questions[questionNumber].answers        
        },
        methods: {
            nextQuestion(){
                if (questionNumber <= 1) {
                questionNumber++;
                this.question = questions[questionNumber].question;
                this.answers = questions[questionNumber].answers;
                }
            }
        }
    })
