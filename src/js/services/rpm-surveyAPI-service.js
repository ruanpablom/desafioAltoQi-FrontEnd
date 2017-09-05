class RpmSurveyApi{
    constructor($http){
        this.$http = $http;
        this.apiBaseUrl = 'http://localhost/dev/desafioAltoQi/api/v1/public/index.php';
    }

    getSurvey(surveyIndex){
       return this.$http.get(this.apiBaseUrl+'/survey/'+surveyIndex);
    }

    getAllSurveys(){
        return this.$http.get(this.apiBaseUrl+'/survey');
    }

    addUserAnswer(data){
        return this.$http.post(this.apiBaseUrl+'/survey/userAnswerAdd', data);
    }
}

export default RpmSurveyApi;