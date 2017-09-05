import RpmHeaderDirective from './rpm-header-directive';
import RpmSurveyDirective from './rpm-survey-directive';

export default () => {
  angular.module('rpm').directive('rpmHeader', () => new RpmHeaderDirective());
  angular.module('rpm').directive('rpmSurvey', () => new RpmSurveyDirective());
}
