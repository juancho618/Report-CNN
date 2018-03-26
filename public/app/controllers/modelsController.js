app.controller('modelsController', function($http,  $mdDialog, $scope, $window){
    
    let self = this;

    self.modelsList =[
        {
            title: 'Fully Covolutional VGG-16 1x Deconvolution',
            imageName: '1xdev.png',
            codeFile: 'VGG1xDev.py',
            samplePath: 'hourglass',
            port: "6001"
        },
        {
            title: 'Fully Convolutional VGG-16 Hourglass',
            imageName: 'hourglass.png',
            codeFile: 'fcnVGGhourglass.py',
            samplePath: '1xDev18b',
            port: "6002"
        },
        {
            title: 'Without Pooling layer 1ch',
            imageName: 'noPooling.png',
            codeFile: 'noPooling.py',
            samplePath: 'imageNoPooling',
            port: "6003"
        },
        {
            title: 'Without Pooling layer 3ch',
            imageName: 'noPooling3.png',
            codeFile: 'noPoolingRefator.py',
            samplePath: 'imageNoPoolingx3',
            port: "6004"
        }
    ]

    self.openTensorboard = (port) => $window.open(`http://desktop-pjib8ns:${port}`, '_blank');

    self.openImage = (name) =>{
        const h= screen.height;
        const w= screen.width;
        window.open('/public/img/' + name, '_blank' , 'width='+w+', height='+h+'');
    }
    self.addCode = async (path) => {
        let code = angular.element( document.querySelector( '#toBeAppened' ) );
        return $http({
            method: 'POST',
            url: '/fileCode',   
            data: {route: path},
        }).then(res => {
            self.myCode = res.data;
        }, error => console.log(error));
    }
    function DialogController($scope, $mdDialog) {
        $scope.myCode = self.myCode;
        $scope.samples = self.samples;
        $scope.hide = function() {
          $mdDialog.hide();
        };
    }
    self.showCode = (ev, fileName) => {
        const path = '../Art-CNN/' + fileName;
        console.log(path);
       self.addCode(path).then(()=>{
        $mdDialog.show({
            controller: DialogController,
            template:'<md-dialog style="overflow-y: hidden;" aria-label="Mango (Fruit)">'+
                          '<md-toolbar>'+
                          '<div class="md-toolbar-tools">'+
                            '<h2>results for '+ 'Code' +'</h2>'+
                            '<span flex></span>'+
                            '<md-button class="md-icon-button" ng-click="cancel()">'+
                              '<md-icon  aria-label="Close dialog"></md-icon>'+
                           '</md-button>'+
                          '</div>'+
                        '</md-toolbar>'+
                        '<md-dialog-content layout-fill layout-align="center center" flex layout="column">'+
                        '<div class="md-dialog-content" style="padding: 0px" flex><div ><div hljs hljs-source="myCode"></div></div></div>'+
                        '</md-dialog-content>'+
                      '</md-dialog>',
            // templateUrl: 'dialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            fullscreen: true,
            clickOutsideToClose:true
          })
       })
    }
    self.samples = [];
    for (var i = 0; i <= 9; i++) {
      self.samples.push(i);
    }

    self.showSamples = function(ev, path) {
     
        $mdDialog.show({
          controller: DialogController,
          template:'<md-dialog style="height:500px; width:500px;"  aria-label="Mango (Fruit)">'+
                        '<md-toolbar>'+
                        '<div class="md-toolbar-tools">'+
                          '<h2>resultus for samples</h2>'+
                          '<span flex></span>'+
                          '<md-button class="md-icon-button" ng-click="cancel()">'+
                            '<md-icon  aria-label="Close dialog"></md-icon>'+
                         '</md-button>'+
                        '</div>'+
                      '</md-toolbar>'+
                      '<md-dialog-content >'+
                          '<div class="md-dialog-content"  layout-align="center center" layout="row" ng-repeat="i in samples">'+
                            '<div  style="margin-right:10px" layout-align="center center" layout="row">'  +
                              '<img   ng-src="/'+path+'?num='+'{{i}}'+'">'+
                            '</div>'+   
                            '<div  style="margin-right:10px" layout-align="center center" layout="row">'  +
                              '<img   ng-src="/imageVIS?num='+'{{i}}'+'">'+
                            '</div>'+                            
                          '</div>'+
                      '</md-dialog-content>'+
                    '</md-dialog>',
          // templateUrl: 'dialog',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
      };
});