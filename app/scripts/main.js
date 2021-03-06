(function() {
  'use strict';

  var app = angular.module('fccportfolio', []);

  app.controller('ContentsController', [
    '$scope', function($scope) {
      $scope.title = "dtings fcc projects";
      $scope.brand = "dtings";
      $scope.copyright = "dtings.com";
      $scope.headerBg = "images/header-bg.jpg";

      // Social media urls
      $scope.twitter = 'www.twitter.com/d_ting';
      $scope.codepen = 'www.codepen.io/dting';
      $scope.github = 'www.github.com/dting';

      $scope.categories = [
        {
          type: 'Ziplines',
          tag: 'Front End Development Projects',
          bgColor: 'bg-light-gray',
          projects: [
            {
              name: 'Local Weather',
              tag: 'Zipline: Show the Local Weather',
              fccurl: 'zipline-show-the-local-weather',
              previewImg: 'images/Ziplines/weather.png',
              url: 'http://weather.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fccweather'
            }, {
              name: 'Pomodoro',
              tag: 'Zipline: Build a Pomodoro Clock',
              fccurl: 'zipline-build-a-pomodoro-clock',
              previewImg: 'images/Ziplines/pomodoro.png',
              url: 'http://timer.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fcctimer'
            }, {
              name: 'Simple Calculator',
              tag: 'Zipline: Build a JavaScript Calculator',
              fccurl: 'zipline-build-a-javascript-calculator',
              previewImg: 'images/Ziplines/calculator.png',
              url: 'http://calculator.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fcccalculator'
            }, {
              name: 'TicTacToe',
              tag: 'Zipline: Build a Tic Tac Toe Game',
              fccurl: 'zipline-build-a-tic-tac-toe-game',
              previewImg: 'images/Ziplines/tictactoe.png',
              url: 'http://tictactoe.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fcctictactoe'
            }
          ]
        }, {
          type: 'Basejumps',
          tag: 'Full Stack JavaScript Projects',
          projects: [
            {
              name: 'Voting',
              tag: 'Basejump: Build a Voting App',
              fccurl: 'basejump-build-a-voting-app',
              previewImg: 'images/Basejumps/voting.png',
              url: 'http://voteplex.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fccvotingapp'
            }, {
              name: 'Nightlife',
              tag: 'Basejump: Build a Nightlife Coordination App',
              fccurl: 'basejump-build-a-nightlife-coordination-app',
              previewImg: 'images/Basejumps/nightlife.png',
              url: 'http://nightlife.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fccnightlife'
            }, {
              name: 'Stock Market',
              tag: 'Basejump: Chart the Stock Market',
              fccurl: 'basejump-chart-the-stock-market',
              previewImg: 'images/Basejumps/stockmarket.png',
              url: 'http://stockjump.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fccstockjump'
            }, {
              name: 'Book Trading Club',
              tag: 'Basejump: Manage a Book Trading Club',
              fccurl: 'basejump-manage-a-book-trading-club',
              previewImg: 'images/Basejumps/bookoutpost.png',
              url: 'http://bookoutpost.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fccbookoutpost'
            }, {
              name: 'Pinterest Clone',
              tag: 'Basejump: Build a Pinterest Clone',
              fccurl: 'basejump-build-a-pinterest-clone',
              previewImg: 'images/Basejumps/pinterest.png',
              url: 'http://linkterest.dokku.dtings.com/',
              sourcecode: 'https://github.com/dting/fcclinkterest'
            }
          ]
        }
      ];
    }
  ]);
})();
