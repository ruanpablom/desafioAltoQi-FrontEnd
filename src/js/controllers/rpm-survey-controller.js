class RpmSurveyController {
    constructor(rpmSurveyApiService){
      this.email = "";
      this.api = rpmSurveyApiService;
      this.surveys = [];
      this.surveySelectedIndex = null;
      this.surveyDataLoaded = false;
      this.userAnswerTopic = [];
    }

    init(){
      let vm = this;

      vm.api.getAllSurveys().then(function(success){
        vm.surveys = success.data;
      }, function(error){
        console.log(error);
      });
    }

    showSurvey(surveyIndex){
      let vm = this;
      
      vm.api.getSurvey(surveyIndex).then(function(success){
        vm.surveySelected = success.data;
        vm.surveyDataLoaded = true;
      }, function(error){
        console.log(error);
      });
    }

    submit(userAnswer, email){
      let vm = this;
      let userAnswerFormated = [];

      for(let i = 1 ; i < userAnswer.length ; i++){
        
        if(userAnswer[i]){
          let userAnswerJson = JSON.parse(userAnswer[i]);
          userAnswerFormated.push({"question_topic_id":userAnswerJson.question_topic.id, "question_answer_id":userAnswerJson.question_answer.answer_id});
        }
        
      }

      vm.api.addUserAnswer({"data":{"answers":userAnswerFormated,"e-mail":email}}).then(
        function(success){
          console.log(success);
        }, function(error){
          console.log(error);
        }
      );
    }
}

RpmSurveyController.$inject = ['rpmSurveyApiService'];

export default RpmSurveyController;
  