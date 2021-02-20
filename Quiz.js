class Quiz {
    constructor(){}
  
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }

      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      play(){
      this.title.hide();
      this.button.hide();
      this.input1.hide();  
      contestant.getContestantInfo();
      background("yellow");
      if(allPlayers !== undefined){
        for(var plr in allContestant){
          var correctAns = "2";
          if(correctAns === allContestans[plr].answer)
          fill("Green")
          else
          fill("red");
        
        
      }
    }
      }

      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount =contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question();
          question.display();
        }
      }
}