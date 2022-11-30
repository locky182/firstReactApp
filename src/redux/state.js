
let state = {

    dialogsPage: {

        dialogs: [{id: 0, name: 'Alex'},
            {id: 1, name: 'Petr'},
            {id: 2, name: 'Micha'},
            {id: 3, name: 'Pasha'},
            {id: 4, name: 'Masha'}
        ],

        messages: [{id: 0, message:'Hi'},
            {id: 1, message: 'How are you'},
            {id: 2, message: 'How can i help you'},
            {id: 3, message: 'I dont now'},
            {id: 4, message: 'where are you from?'}
        ]



    },

    profilePage: {

        posts:  [{id: 0, message: 'It is my first!!', likesCount: '23' },
            {id: 2, message: 'I like it', likesCount: '0' },
            {id: 3, message: 'I like it', likesCount: '0' },
            {id: 4, message: 'I like it', likesCount: '0' },
            {id: 5, message: 'I like it', likesCount: '0' }
        ]


    }

}

export default state;