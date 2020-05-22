// block eles like divs and li  can be made inline with display:inline didnt know that although the ul will still be block i guess


//setstate in the <button onClick={ ()=> thios.setstate} 
//diosplay state in render and setstate in render is smart! enver thought of it


// DESIGN DECISION: comments may be updated very fast almost chat-like/2-way-street dependent rather htan just 1 person like all my other fetches so im gonna just fetch new data nonstop

import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comment_actions";
import styled, { css, keyframes } from "styled-components";


// Parent Component: friendbills
// we receive billId as a prop from it

// from Connect
// we subscribe to fetchcomments from actions as a prop (it is a thunk action creator function)
// we subscribe to state.entities.comments as props.comments (it is an object of comment objects)

function Comments ( props ) {
    

    React.useEffect( ()=>{
        props.fetchComments(props.billId)
    }, [props.billId] ) // if stuff in [] hasn't changed then DONT run the useEffect
    
    // React.useEffect(() => { 
        // maybe some handle status change 
        // like api calls here
        // also this callback passed to useeffect returns a cleanup callback if you want
        // return cleanup()=>{}
        
        // document.title = `You clicked ${state1} times` });
    //   if (isOnline === null) {
    //     return 'Loading...';
    //   }
    //   return isOnline ? 'Online' : 'Offline';

    //style = {{ display: props.isVisible ? `block` : `none` }
    return (
        <div className="section collapsible" style={{ overflow: `hidden`, transition: `height 0.5s ease-out`, height:`auto` }} id={`comments${props.billId}`}>
            {/* {JSON.stringify(props.comments)} */}
            {props.comments.map( (comment) => <CommentItem data = {comment}>  </CommentItem> )}
            
        </div>
    )
} 

const mSTP = (state) => {
    return {
        comments: Object.values(state.entities.comments),  // state.entities.comments is an array with eles pointing to other objects { billId1 : {id: 1,user_id,bill_id, body,}}}
        friends: Object.values(state.entities.friends) // state.entities.friends is an object with each key being a friendship_id. after object.values its an array of objects
    };
};

const mDTP = (dispatch) => {
    return {
        fetchComments: (billId) => dispatch(fetchComments(billId)),
    };
};

export default connect(mSTP, mDTP)(Comments)


const Item = styled.div`
    border: 1px solid #ccc;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 6px 8px;
    background: #fff;
    margin-bottom: 8px;
    word-wrap: break-word;
`

function CommentItem ( {data} ){
    const {user_id, body, created_at} = data
    return <Item> 
        
        {user_id} 
        {created_at}
        {body}
    
     </Item>
}