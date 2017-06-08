console.log("Quotes Controller Works!")

//Your QUOTES CONTROLLER HERE!
QuotesNewController.$inject = ['$state', 'QuotesService'];

function QuotesNewController($state, QuotesService) {
  const vm = this;

  vm.createQuotes = createQuotes;
  vm.newQuote = {};

  activate();

  function activate() {}

  function createQuote() {
    QuotesService
      .create(vm.newQuote)
      .then(function resolve(response) {
        const id = response.data.quote._id;
        $state.go('quotesShow', { quoteId: id });
      });
  }
}

module.exports = QuotesNewController;
