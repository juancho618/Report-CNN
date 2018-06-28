app.controller('dataIntroController', function ($http, $mdDialog, $scope) {
    let self = this;

    self.faceBox = self.robeBox = self.backgroundBox = self.archBox = false;
    self.openImage = (url) => {
        const h = screen.height;
        const w = screen.width;
        window.open(url, '_blank', 'width=' + w + '', 'height=' + h + '');
    }

    self.overIn = (name) => {
        switch (name) {
            case 'Face':
                self.faceBox = true;
                break;
            case 'Robe':
                self.robeBox = true;
                break;
            case 'Background':
                self.backgroundBox = true;
                break;
            case 'Arch':
                self.archBox = true;
                break;
        }
    }

    self.overOut = (name) => {
        console.log('trying to leave');
        switch (name) {
            case 'Face':
                self.faceBox = false;
                break;
            case 'Robe':
                self.robeBox = false;
                break;
            case 'Background':
                self.backgroundBox = false;
                break;
            case 'Arch':
                self.archBox = false;
                break;
        }
    }

    self.trainSet = [
        {
            name: 'Robe',
            urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/robeVis.jpg',
            urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/robeIR.jpg',
            width: '5000',
            height: '5000'
        },
        {
            name: 'Face',
            urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/faceVis.jpg',
            urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/faceIr.jpg',
            width: '7967',
            height: '7967'
        },
        {
            name: 'Background',
            urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/VIS_background.jpg',
            urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/IR_background.jpg',
            width: '6000',
            height: '6000'
        },
        {
            name: 'Arch',
            urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/arch-VIS.jpg',
            urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/arch-IR.jpg',
            width: '4000',
            height: '5000'
        }
    ];

});