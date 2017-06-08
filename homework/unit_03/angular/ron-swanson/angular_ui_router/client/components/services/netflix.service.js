angular
  .module('netflix')
  .service('NetflixService', NetflixService);

NetflixService.$inject = ['$http'];

function NetflixService($http) {
  const self = this;

  // WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
  self.create = create;
  self.loadAll = loadAll;
  self.loadCurrent = loadCurrent;


  // HOW IT DOES STUFF
  function create(netflixData) {
    return $http
      .post('/api/netflix', netflixData);
  }

  function loadAll() {
    return $http.get('/api/netflix');
  }

  function loadCurrent(id) {
    return $http.get('/api/netflix/' + id);
  }
}
