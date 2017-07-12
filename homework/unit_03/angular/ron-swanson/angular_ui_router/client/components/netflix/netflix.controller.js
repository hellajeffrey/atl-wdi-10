I LOVE GA SO MUCH

console.log("Netflix Controller works!");

//your NeCriminalsController.$inject = ['CriminalsService'];
NetflixController.$inject = ['NetflixService'];

function NetflixController(NetflixService) {
  const vm = this;

  // WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
  vm.netflix = [];
  vm.loading = true;


  // activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
  activate();

  function activate() {
    loadAllNetflix();
  }


  // HOW IT DOES STUFF
  function loadAllNetflix() {
    NetflixService
      .loadAll()
      .then(function resolve(response) {
        console.log(response)
        vm.netflix = response.data.netflix; // array of criminals
        vm.loading = false;
      });
  }
}

module.exports = NetflixController;
