class Question {
    constructor(){
    this.input1 = createInput("Enter your name here");
    this.button = createButton("Submit");
    //this.title = createElement("h2")
    }

    hide(){
        this.button.hide();
        this.title.hide();
        this.input.hide();
      }

      display(){
          
          this.title.html("MyQuiz Game");
          this.title.position(350,0);

          this.question.html("Question:- What starts with the letter 'E', but has onlyone letter? ");
          this.question.position(150,80);
          this.option1.html("1: Everyone");
          this.option1.position(150,100);
          this.option2.html("2: Envelope")
          this.option2.position(150,120);

          this.input1.position(150,230);

          
          this.button.position(450, 400);

          this.button.mousePressed(() =>{
          this.titel.hide();
          this.input1.hide();
          this.button.hide();
          contestant.name = this.input1.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update()
          contestant.updateCount(contestanCount);
          });
    }
}
