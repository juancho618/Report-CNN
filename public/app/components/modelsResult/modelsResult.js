app.component("modelsResults", {
    templateUrl: '/public/app/components/modelsResult/template.html',
    bindings: {
        modelName: '@'    
    },
    controller: function($http){
        let self = this;
        self.openImage = (url) => {
            const h = screen.height;
            const w = screen.width;
            window.open(url, '_blank', 'width=' + w + '', 'height=' + h + '');
        }
        self.tabs = [];
        self.$onInit = function(){
            console.log(self.modelName)
            $http({
                method: 'GET',
                url: `/public/results/${self.modelName}.json`,   
            }).then(res => {
                self.tabs =  res.data.tabs;
            }, error => console.log(error));
        }
          
       
          

       
    },
    controllerAs: 'vm'

}); 