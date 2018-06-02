app.controller('latestController', function(){
    self =  this;

    self.tabs =[
        {
            label: "Color Histograms",
            title: "Histograms",
            description: "",
        },
        {
            label: "Visual Images",
            title: "Visual Images",
            description: "",
            loadImages :  true,
            type: 'dataset',
            images:[
                {
                    name:'arch-VIS_png',
                    buttonText:'VIS Arch',
                    tooltip:'VIS Arch' 
                },
                {
                    name:'00-17-VIS-HI-AT-robe1_png',
                    buttonText:'VIS Robe',
                    tooltip:'VIS Robe' 
                },
                {
                    name:'00-17-VIS-HI-AT-face_png',
                    buttonText:'VIS Face',
                    tooltip:'VIS Face' 
                }
            ]
        },
        {
            label: "IR Images",
            title: "IR Images",
            description: "",
            loadImages :  true,
            type: 'dataset',
            images:[
                {
                    name:'arch-IR_png',
                    buttonText:'IR Arch',
                    tooltip:'IR Arch' 
                },
                {
                    name:'00-17-IR-HI-AT-robe1_png',
                    buttonText:'IR Robe',
                    tooltip:'IR Robe' 
                },
                {
                    name:'00-17-IR-HI-AT-face_png',
                    buttonText:'IR Face',
                    tooltip:'IR Face' 
                }
            ]
        },
        {
            label: "Inferred Images",
            title: "Inferred Images",
            description: "Inferred image using the Face and the Robe as training data.",
            loadImages :  true,
            type: 'inferred',
            images : [
                {
                    name:'complete_arch_infered',
                    buttonText:'Inferred Arch',
                    tooltip:'Inferred Arch' 
                },
                {
                    name:'complete_robe_infered',
                    buttonText:'Inferred Face',
                    tooltip:'Inferred Face' 
                },
                {
                    name:'complete_face_infered',
                    buttonText:'Inferred Robe',
                    tooltip:'Inferred Robe' 
                }
            ]
        },
        {
            label: "Crack Removal",
            title: "Crack Removal",
            description: "Tried to remove the cracks using different filling and inpainting methods",
            loadImages :  true,
            type: 'fill',
            images : [
                {
                    name:'arch_patch',
                    buttonText:'Arch',
                    tooltip:'Arch filled' 
                },
                {
                    name:'face_patch2',
                    buttonText:'Face',
                    tooltip:'Face filled' 
                }
            ]
        },
        {
            label: "Mask Generation",
            title: "Mask Generation",
            description: "Treshold used to highlight the underdrawings",
            loadImages :  true,
            type: 'masks',
            images : [
                {
                    name:'arch_mask',
                    buttonText:'Arch',
                    tooltip:'Arch mask' 
                },
                {
                    name:'face_mask',
                    buttonText:'Face',
                    tooltip:'Face mask' 
                },
                {
                    name:'robe_mask',
                    buttonText:'Robe',
                    tooltip:'Robe mask' 
                },
            ]
        }
        
    ];
    self.histograms = [
        {
            name: 'Arch VIS',
            img: 'arch-VIS_128'
        },
        {
            name: 'Arch IR',
            img: 'arch-IR_128'
        },
        {
            name: 'Face VIS',
            img: '00-17-VIS-HI-AT-face1'
        },
        {
            name: 'Face IR',
            img: 'face-IR-histogram'
        },
        {
            name: 'Robe VIS',
            img: '00-17-VIS-HI-AT-robe1'
        },
        {
            name: 'Robe IR',
            img: '00-17-IR-HI-AT-robe1-Histogram'
        }
    ];

    self.openImage = (name) =>{
        const h= 400;
        const w= 400;
        window.open(`/histograms?name=${name}`,`_blank` , 'width='+w+', height='+h+'');
    }

    self.btnAction = (name) => {
        console.log(name);
        self.imgType = name;
        self[name] = true;
      }  
})