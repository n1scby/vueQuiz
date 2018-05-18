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
                   
                    <answer v-for="answer in answers" v-bind:key="answer.id" v-bind:next="answer.answer" v-bind:answerid="answer.id" v-bind:check="checked" v-on:select-answer="onSelectAnswer"></answer>
                    
                </div>
                    <div>
                    <button v-on:click="checkAnswer()">Submit Answer</button>
                    </div>
                    <button v-on:click="nextQuestion()">next Question</button>
                    <div> <h3>{{answerMessage}} </h3></div>
                </div>
                `,
                data() {
                    return{
                        title: "Quiz 4",
                        question: questions[questionNumber].question,
                        answers: questions[questionNumber].answers,
                        correctAnswer: questions[questionNumber].answerId,
                        answerMessage: "",
                        selectedAnswer: 0 ,
                        checked: false 
                    }
                },
                methods:  {
                    nextQuestion(){
                        if (questionNumber <= 1) {
                        questionNumber++;
                        this.question = questions[questionNumber].question;
                        this.answers = questions[questionNumber].answers;
                        this.correctAnswer = questions[questionNumber].answerId;
                        this.checked = false;
                        }
                    },
                    checkAnswer(){
                        if (this.selectedAnswer == this.correctAnswer){
                            this.answerMessage = "Correct!";
                        } 
                        else{
                            this.answerMessage = "Wrong!";
                        }
                    },
                    onSelectAnswer: function(selected){
                        this.selectedAnswer = selected;
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
        props: ['next', 'answerid', 'check'],
        template: `
                   <div>
                        <input type="radio" :checked=check  :value=answerid :id="'answer' + answerid" name='questionAnswer' v-on:click="$emit('select-answer', answerid)">
                        <label :for="'answer' + answerid">{{next}}</label>
                  </div>
        
        `,
        data() {
            return{
                selectedAnswer: ''
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
