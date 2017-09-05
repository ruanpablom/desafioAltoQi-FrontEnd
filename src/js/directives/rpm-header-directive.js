class RpmHeaderDirective {
  constructor(){
    this.restrict = 'E';
    this.templateUrl = '/views/rpm-header.html';
    this.scope = {};
    this.controller = 'rpmHeaderController';
    this.controllerAs = 'vm';
  }
}

export default RpmHeaderDirective;
