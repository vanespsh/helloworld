import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, Unfollow, setUsers, setCurrentPage, setTotalUsersCount, togleIsFetching, buttonDisablingReducer } from "../../../redux/UsersReducer";
import Users from "./Users";
import axios from "axios";
import styles from './Users.module.css';
import Preloader from "../../common/Preloader/Preloader";


const UsersApiComponent = (props) => {
    useEffect(() => {
        props.togleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`, 
        {withCredentials: true})
        .then(response => { 
            props.togleIsFetching(false);
        props.setUsers(response.data.items) 
            props.setTotalUsersCount(response.data.totalCount)
        })
       },[])
    let onPageChanged = (pageNumber) => {
        
        props.setCurrentPage(pageNumber);
        props.togleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`, 
        {withCredentials:true}).then(response => { 
            props.togleIsFetching(false);
            props.setUsers(response.data.items) })
        
    }
            return <>
            
            {props.isFetching ? <Preloader/> : null}
            
        <Users totalUsersCount = {props.totalUsersCount}
            pageSize = {props.pageSize}
            currentPage = {props.currentPage}
            UsersNames = {props.UsersNames}
            Unfollow = {props.Unfollow}
            follow={props.follow}
            onPageChanged = {onPageChanged}
            buttonDisablingReducer = {props.buttonDisablingReducer}
            buttonDisable = {props.buttonDisable}/>
            </>}
    

let mapStateToProps = (state) => {
    return {
        UsersNames: state.UsersPage.UsersNames,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        buttonDisable: state.UsersPage.buttonDisable,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
// follow: (userID) => {
//     dispatch (FollowActionCreator(userID))
// },
// Unfollow: (userID) => {
//     dispatch (UnfollowActionCreator(userID))
// },
// setUsers: (UsersNames) => {
//     dispatch (SetUsersActionCreator(UsersNames))
// },
// setCurrentPage: (pageNumber) => {
//     dispatch (SetCurrentPageActionCreator(pageNumber))
// },
// setTotalUsersCount: (totalCount) => {
//     dispatch (SetUsersTotalCountCreator(totalCount))
// },
// togleIsFetching: (isFetching) => {
//     dispatch (SetIsFetchingActionCreator(isFetching))
// }
//     }
// }

export default connect (mapStateToProps, {follow, Unfollow, setUsers, setCurrentPage, setTotalUsersCount, togleIsFetching, buttonDisablingReducer} )(UsersApiComponent);