app.controller('reportController', function($http, $mdDialog){
    let self = this;
    self.originalImages = [];
    
    //width and heigth of the images
    self.w_list = [];
    self.h_list = [];
    for (var i = 0; i <= 50; i++) {
      self.w_list.push(i);
    }

    for (var x = 0; x < 36; x++) {
      self.h_list.push(x);
    }

    $http.get('/data').then(res => {
        self.originalImages =  res.data;
    });

    self.showDialog = function(ev, name) {
      self.loadImage();
      console.log(name);
        $mdDialog.show({
          controller: DialogController,
          template:'<md-dialog aria-label="Mango (Fruit)">'+
                        '<md-toolbar>'+
                        '<div class="md-toolbar-tools">'+
                          '<h2>resultus for '+ name +'</h2>'+
                          '<span flex></span>'+
                          '<md-button class="md-icon-button" ng-click="cancel()">'+
                            '<md-icon  aria-label="Close dialog"></md-icon>'+
                         '</md-button>'+
                        '</div>'+
                      '</md-toolbar>'+
                      '<md-dialog-content>'+
                          '<div class="md-dialog-content">'+
                            '<object width=128 height=128 '+
                                    'data="C:\\Users\\juanc\\Documents\\CNN\\Art-CNN\\original_train\\'+name+'" type="image/tiff">'+
                                    '<param name="src" value="tiffdocument.tif">'+
                                    '<param name="negative" value="yes">'+
                              '</object>'+
                             '<object width=128 height=128 '+
                                  'data="C:\\Users\\juanc\\Documents\\CNN\\Art-CNN\\irr_train\\'+name+'" type="image/tiff">'+
                                  '<param name="src" value="tiffdocument.tif">'+
                                  '<param name="negative" value="yes">'+
                             '</object>'+
                          '</div>'+
                      '</md-dialog-content>'+
                    '</md-dialog>',
          // templateUrl: 'dialog',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
        .then(function(answer) {
          self.status = 'You said the information was "' + answer + '".';
        }, function() {
          self.status = 'You cancelled the dialog.';
        });
      };

    
      // self.loadImage = () => {
      //     $http.get('/image').then(res => {
      //       console.log(res.data);
      //   });
      // };
      function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
    
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
    
        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }
});
