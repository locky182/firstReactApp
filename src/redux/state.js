
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {

        return this._state;
    },

    _state: {


        dialogsPage: {

            dialogs: [{id: 0, name: 'Alex'},
                {id: 1, name: 'Petr'},
                {id: 2, name: 'Micha'},
                {id: 3, name: 'Pasha'},
                {id: 4, name: 'Masha'}
            ],

            messages: [{id: 0, message: 'Hi'},
                {id: 1, message: 'How are you'},
                {id: 2, message: 'How can i help you'},
                {id: 3, message: 'I dont now'},
                {id: 4, message: 'where are you from?'}
            ]


        },

        profilePage: {

            posts: [{id: 0, message: 'It is my first!!', likesCount: '23'},
                {id: 1, message: 'I like it', likesCount: '0'},
                {id: 2, message: 'I like it', likesCount: '0'},
                {id: 3, message: 'I like it', likesCount: '0'},
                {id: 4, message: 'I like it', likesCount: '0'}
            ],

            newPostText: 'Lexey zdarova'


        }

    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },
    //
    // addPost() {
    //
    //
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: '0',
    //
    //     };
    //
    //     //push это метод массива который добавляет элемент в конец
    //
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    //
    // },

    // updateNewPostText(newText) {
    //
    //
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    //
    // },

    dispatch(action){ // type: 'ADD-POST' этотеперь одинединственный метод вместо addPost updateNewPostText

        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: '0',

            };

            //push это метод массива который добавляет элемент в конец

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        }else if(action.type ===  UPDATE_NEW_POST_TEXT){

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }


    },


}
 export let AddPostActionCreator=()=>{

     return {type: ADD_POST};
}

export let UpdateNewPostTextActionCreator=(text)=>{
    return {type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default store;