app.controller('dndController', function ($scope) {

    let self = this;

    self.tabs = [
        {
            'label': 'Stats'
        },
        {
            'label': 'Features'
        },
        {
            'label': 'inventory'
        }
    ];

    self.attributes = [
        {
            'name': 'Strength',
            'value': 15,
            'bonus': 0

        },
        {
            'name': 'Dexterity',
            'value': 15,
            'bonus': 0

        },
        {
            'name': 'Constitution',
            'value': 15,
            'bonus': 0

        },
        {
            'name': 'Intelligence',
            'value': 15,
            'bonus': 0

        },
        {
            'name': 'Wisdom',
            'value': 15,
            'bonus': 0

        },
        {
            'name': 'Charisma',
            'value': 15,
            'bonus': 0

        }
    ];

    self.skills = [
        {
            'name': 'Acrobatics',
            'value': 0
        },
        {
            'name': 'Animal Handling',
            'value': 0
        },
        {
            'name': 'Arcana',
            'value': 0
        },
        {
            'name': 'Athletics',
            'value': 0
        },
        {
            'name': 'Athletics',
            'value': 0
        },
        {
            'name': 'Athletics',
            'value': 0
        },
        {
            'name': 'Athletics',
            'value': 0
        }

    ]

})