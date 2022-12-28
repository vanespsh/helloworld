import { NavLink } from 'react-router-dom';
import React from "react";
import styles from './Users.module.css';
import axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) };
    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.sel}
                        onClick={() => { props.onPageChanged(p) }}>{p}ㅤ</span>
                })}
            </div>

            <div>
                {props.UsersNames.map(u =>
                    <div key={u.id}>
                        <div className={styles.users}>
                            <div >ㅤ </div>
                            <NavLink to={'/MyProfile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : 'https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg'} />
                            </NavLink>
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>
                            {u.followed ?
                                <button 
                                disabled = {props.buttonDisable}
                                onClick={() => {
                                    props.buttonDisablingReducer (true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { 
                                        withCredentials: true, 
                                        headers: {'API-KEY' : 'd9f73957-802c-47e6-80c7-d836f0bf5f79' } })
                                        .then(response => {
                                            if (response.data.resultCode === 0) { props.Unfollow(u.id) }
                                            props.buttonDisablingReducer (false, u.id);
                                        }
                                        )
                                }
                                }>Unfollow</button> :
                                <button 
                                disabled = {props.buttonDisable}
                                onClick={() => {
                                    props.buttonDisablingReducer (true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
                                        withCredentials:true, 
                                        headers: {'API-KEY' : 'd9f73957-802c-47e6-80c7-d836f0bf5f79' }})
                                        .then(response => {
                                            if (response.data.resultCode == 0) { props.follow(u.id) }
                                            props.buttonDisablingReducer (false, u.id)
                                        })
                                }}>Follow</button>}
                        </div>
                    </div>)}
            </div>
        </div >
    )
}


export default Users;