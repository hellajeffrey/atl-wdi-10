https://github.com/hellajeffrey/atl-wdi-10/tree/master/homework/unit_03/angular/budget-app/budget_app_solution
const controller = require('./home.controller.js');
const template = require('./home.html');

const component = {
  controller: controller,
  template: template
};

angular
  .module('RonSwansonApp')
  .component('home', component);
