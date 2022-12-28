import React from "react";
import styles from './Profile.module.css';
import {SetUserProfile} from '../../../redux/PostsReducer'
import Content from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


const ProfileContainer = (props) => {
    useEffect (() => {
        let profileId = props.router.params.userId;
       
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+profileId).then(response => {
            props.SetUserProfile(response.data)
        })
    },[])


        return (
            <div className={styles.content}>
                <Content {...props} profile = {props.profile}  />
            </div>
        )
    
}

let mapStateToProps = (state) => ({
profile: state.PostsPage.profile
})

function withRouter(Component) {

	function ComponentWithRouterProp(props) {
		 let location = useLocation();
		 let navigate = useNavigate();
		 let params = useParams();
		 return (
			  <Component
					{...props}
					router={{ location, navigate, params }}
			  />
		 );
	}

	return ComponentWithRouterProp;
}

export default connect(mapStateToProps,{SetUserProfile})(withRouter(ProfileContainer));