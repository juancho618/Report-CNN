app.controller('denoisedController', function(){

    let self = this;
    self.size = 128;
    self.images = [
        { name: 'acrh_ir_128',
          width:'3264',
          height:'2330',
          buttonText:'Arch_128'
        },
        { name: 'denoised',
          width:'3264',
          height:'2330',
          buttonText:'Arch_denoised_128'
        },
    ]
    self.btnAction = (name) => {
        console.log(name);
        self.imgType = name;
        self[name] = true;
      }    
})