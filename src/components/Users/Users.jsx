import React from "react";
import styles from "./Users.module.css"

let Users = (props) => {
/*if(props.users.length === 0){
props.setUsers([
    {
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
    }
])
}*/
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>FOLLOW</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;