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



    Vue.component('quiz', {
        props: [],
        template: `
                <div>
                    <h2>{{ title }}</h2>
                    <div>
                        <question v-bind:thisquestion="question"> </question>
                    </div>
                    <div>
                   
                    <answer v-for="answer in answers" v-bind:key="answer.id" v-bind:next="answer.answer" v-bind:answerid="answer.id"></answer>
                    
                </div>
                    <button v-on:click="nextQuestion()">next Question</button>
                </div>
                `,
                data() {
                    return{
                        title: "Quiz 3",
                        question: questions[questionNumber].question,
                        answers: questions[questionNumber].answers   
                    }
                },
                methods:  {
                    nextQuestion(){
                        if (questionNumber <= 1) {
                        questionNumber++;
                        this.question = questions[questionNumber].question;
                        this.answers = questions[questionNumber].answers;
                        }
                    }
                }
    })


    Vue.component('question', {
        props: ['thisquestion'],
        template: `
                <div>
                    <div>Question: {{thisquestion}} </div>
                </div>
        
        `
        
    })


    Vue.component('answer',{
        props: ['next', 'answerid'],
        template: `
                   <div>
                        <input type="radio"  v-model="selectedanswer" :value=answerid :id="'answer' + answerid" name='questionAnswer'>
                        <label for="answerid">{{next}}</label>
                  </div>
        
        `,
        data() {
            return{
                selectedanswer: ''
            }
        }


    })

   

    new Vue({
        el: '#quiz',
        data: { 
                
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
