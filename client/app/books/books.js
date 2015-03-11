'use strict';

angular.module('bookcoachApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('books', {
        url: '/',
        templateUrl: 'app/books/books.html',
        controller: 'BooksCtrl'
      });
  });