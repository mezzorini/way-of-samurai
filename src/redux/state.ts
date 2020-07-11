export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
}

export type PostsDataType = {
    id: number
    message: string
    likeCounter: number
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
}

export type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi!!!', likeCounter: 12},
            {id: 2, message: "It's my first post!", likeCounter: 10},
            {id: 3, message: "How a u dudes?", likeCounter: 7}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Pasha'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Olya'},
            {id: 6, name: 'Viktor'},
            {id: 7, name: 'Kolya'},
            {id: 8, name: 'Alex'}
        ],
        messagesData: [
            {id: 1, message: 'Yo'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'how a u?'},
            {id: 4, message: 'ok'},
            {id: 5, message: 'great!'}
        ]
    }
}

export default state;