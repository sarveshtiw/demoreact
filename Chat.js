import React, { Component } from 'react';
import Modal from './Modal';

class Chat extends Component {
   
   constructor(props){
	super(props);
	this.state = {mucLists: '', modalActive: false, isOpen: false };
	this.addNewGroupClick = this.addNewGroupClick.bind(this);
	this.openModal = this.openModal.bind(this);
	this.closeModal = this.closeModal.bind(this);
   }
   
   componentWillMount() {
	var mucLists = [{'conferences': { 
			   'name': "sarvesh1@conferences.asergis.com", 
			   'jid': { 
				'local': "india1" 
			    }, 
			   'nick': "india conf1", 
			   'autoJoin': true,
			 }
		        },{'conferences': {
			   'name': "sarvesh2@conferences.asergis.com", 
			   'jid': { 
				'local': "india2" 
			    }, 
			   'nick': "india conf2", 
			   'autoJoin': true,
			 }
		       },{'conferences': {
			   'name': "sarvesh3@conferences.asergis.com", 
			   'jid': { 
				'local': "india3" 
			    }, 
			   'nick': "india conf3", 
			   'autoJoin': true,
			 }
		       }]  
	this.setState({mucLists: mucLists});
   }

   addNewGroupClick() {
	//alert("click");
	this.toggleModal();
	let mucList = null; 
	var mucAddBookmarks = [];
	const mucLists = this.state.mucLists;
	

	if (mucLists.length > 0) {
		mucLists.forEach(function (model) {
			mucAddBookmarks.push({
			    name: model.name,
			    jid: model.jid,
			    nick: model.nick,
			    autoJoin: model.autoJoin
			});
		});
	        mucList = mucAddBookmarks;
	} else {
		mucList = mucAddBookmarks;
	}
	this.setState({mucLists: mucAddBookmarks});	

   }

   openModal() {
   	this.setState({ modalActive: true })
   }

   closeModal() {
     	this.setState({ modalActive: false })
   }

   toggleModal = () => {
   	 this.setState({
   	   isOpen: !this.state.isOpen
   	 });
   }

   render() {
	let mucListItem = null; 
	const mucList = this.state.mucLists;
	if (mucList.length > 0) {
		mucListItem = mucList.map((muc, index) => <li key={index} >{muc.conferences.nick ? muc.conferences.nick : muc.conferences.jid.local }</li>);	
	} else {
		mucListItem = "No Group available";
	}

  	return ( 
	  <div> 
	     <h1>Member List</h1>
	       <a href="javascript:void(0);" onClick={this.toggleModal}>Add New</a>

		<ul>
		{ mucListItem }
		</ul>
		
	   
		  <Modal show={this.state.isOpen}
			  onClose={this.toggleModal}>
			<h1> Add New Group </h1>
			<hr />
			
			<input type="text" name="roomJID" id="roomJID" />
			<button onClick={this.addNewGroupClick}>
			      Add
			</button>
		</Modal>
	 </div> 
       );
   }

}

export default Chat;
