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
    ]

Vue.component('quiz', {
    props:['title'],
    template: '<div><h1>{{title}}</h1></div>'
})

new Vue({
    el:'#quiz',
    data: {
        title: quizTitle
    }
});



Vue.component('question', {
    props:['question'],
    template: '<div>Question: <p>{{question}}</p></div>'
})


new Vue({
    el:'#question',
    data: {
        question: questions[questionNumber].question
    }
});

Vue.component('answers', {
    props:['answer-list', 'next-answer'],
   //  template: '<ul><li v-for="answer in answersData" v-bind:key="answer.Id" v-bind:answer-list="answersData" v-bind:next-answer="answer.answer"</li></ul>'
    template: '<li>{{ nextAnswer }}</li>'
    
    })

// Vue.component('answers'), {
//     template: '<ul id="answer"><answer v-for="answer in answersData" v-bind:key="answer.Id" v-bind:answer-list="answersData" v-bind:next-answer="answer.answer"></answer></ul>'
// }


new Vue({
    el:'#answers',
    data: {
        answersData: questions[questionNumber].answers
    }
});


