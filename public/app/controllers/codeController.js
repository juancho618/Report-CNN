app.controller('codeController', function($http,  $mdDialog, $scope){
    
    let self = this;


    self.addCode = (path) => {
        let code = angular.element( document.querySelector( '#toBeAppened' ) );
        return $http({
            method: 'POST',
            url: '/fileCode',   
            data: {route: path},
        }).then(res => {
            self.myCode = res.data;
        }, error => console.log(error));
    }

});