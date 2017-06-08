angular
  .module('quotes')
  .service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {
  const self = this;

  // WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
  self.create = create;
  self.loadAll = loadAll;
  self.loadCurrent = loadCurrent;


  // HOW IT DOES STUFF
  function create(quoteData) {
    return $http
      .post('/api/quotes', quoteData);
  }

  function loadAll() {
    return $http.get('/api/quotes');
  }

  function loadCurrent(id) {
    return $http.get('/api/quotes/' + id);
  }
}
