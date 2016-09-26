(() => {
    'use strict';

    var app = window.app = angular.module('LingApp',['pascalprecht.translate']);

    app.config(function ($translateProvider) {
      $translateProvider.useStaticFilesLoader({
        prefix: 'static/languages/',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('tr');

    });

})();
