import React from "react";
import styles from "./Users.module.css";
import usersPhoto from "../../assets/images/users-vector-icon-png_260862.jpg"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "cc893330-5839-4b82-8f5d-4b6813bea0c7"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });

                            }}>UNFOLLOW</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "cc893330-5839-4b82-8f5d-4b6813bea0c7"
                                    }


                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });

                            }}>FOLLOW</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                       <div>{"u.location.country"}</div>
                       <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;