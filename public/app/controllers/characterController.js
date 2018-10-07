app.controller('characterController', function ($scope, $http) {
    
    let self = this;

    self.character = {
        'name': 'noob master',
        'race': '',
        'class': '',
        'strength': '',
        'dexterity': '',
        'constitution': '',
        'intelligence': '',
        'wisdom': '',
        'charisma': ''

    };

    self.characters = [];

    self.races = [
        {
            name: "Goblin"
        }
    ]

    self.classes = [
        {
            name: "Mage"
        },
        {
            name: 'Warlock'
        }
    ]

    self.sendCharacter = () => {
        return $http({
            method: 'POST',
            url: '/newCharacter',
            data: { character: self.character },
        }).then(res => {
            console.log('done');
            self.getAllCharacters();
            swal("Done!", "changes are saved!", "success", {
                timer: 2000
            })
        }, error => console.log(error));
    }

    self.getAllCharacters = () => {
        return $http({
            method: 'GET',
            url: '/allCharacters',
        }).then(res => {
            console.log('done', res.data);
            self.characters = res.data;
            
        }, error => console.log(error));

    }

    self.setCharacter= (character) => {
        self.character =  character;
    }
});