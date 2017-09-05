import 'angular';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import 'animate.css/animate.min.css';
import rpmDirectives from './js/directives/index.js';
import rpmControllers from './js/controllers/index.js';
import rpmServices from './js/services/index.js';


angular.module('rpm', []);

rpmServices();
rpmControllers();
rpmDirectives();
