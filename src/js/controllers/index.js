import RpmHeaderController from './rpm-header-controller';
import RpmSurveyController from './rpm-survey-controller';

export default () => {
  angular.module('rpm').controller('rpmHeaderController', RpmHeaderController);
  angular.module('rpm').controller('rpmSurveyController',  RpmSurveyController);
}
