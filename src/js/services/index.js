import RpmSurveyApi from './rpm-surveyAPI-service.js';

export default () => {
    angular.module('rpm').factory('rpmSurveyApiService', ['$http', ($http) => new RpmSurveyApi($http)]);
}