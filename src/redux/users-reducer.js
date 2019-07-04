const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [  {
        id: 1,
        photoUrl: 'https://images.unian.net/photos/2018_09/1537539641-9500.jpg?0.20235386997807914',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a Boss',
        location: {city: 'Minsk', country: 'Belarus'}
    },
        {
            id: 2,
            photoUrl: 'https://images.unian.net/photos/2018_09/1537539641-9500.jpg?0.20235386997807914',
            followed: true,
            fullName: 'Vasya',
            status: 'I am a Boss too',
            location: {city: 'Vinnitsa', country: 'Ukraine'}
        },
        {
            id: 3,
            photoUrl: 'https://images.unian.net/photos/2018_09/1537539641-9500.jpg?0.20235386997807914',
            followed: false,
            fullName: 'Vitya',
            status: 'I am a Boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            photoUrl: 'https://images.unian.net/photos/2018_09/1537539641-9500.jpg?0.20235386997807914',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a Boss too',
            location: {city: 'Brest', country: 'Belarus'}
        }]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: {...state.users, ...action.users}}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ( {type: FOLLOW, userId} )

export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId} )

export const setUsersAC = (users) => ( {type: SET_USERS, users} )


export default usersReducer;