class RpmSurveyDirective {
    constructor(){
      this.restrict = 'E';
      this.templateUrl = '/views/rpm-survey.html';
      this.scope = {};
      this.controller = 'rpmSurveyController';
      this.controllerAs = 'vm';
    }
  }
  
  export default RpmSurveyDirective;
  