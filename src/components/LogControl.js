import React from "react";
import LogList from "./LogList";
import NewLog from "./NewLog";
// import LogDetails
// IMport EditLog

class LogControl extends React.Component{

  // constructor w/ props and state goes here
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainLogList: []
    };
  }

  //Methods for buttons go here
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }



  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewLog />;
      buttonText = "Return to Log List";
    } else {
      currentlyVisibleState = <LogList logList = {this.state.mainLogList}/>
      buttonText = "Add Log";
    }


    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default LogControl;














// WHAT IT COULD LOOK LIKE --- JOHN W. Example

// import React from 'react';
// import NewMerchForm from './NewMerchForm';
// import MerchList from './MerchList';
// import MerchDetail from './MerchDetail';
// import EditMerchForm from './EditMerchForm';

// class MerchControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       mainMerchList: [],
//       selectedMerch: null,
//       editing: false
//     };
//   }

//   handleClick = () => {
//     if (this.state.selectedMerch != null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedMerch: null,
//         editing: false
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage 
//       }));
//     } 
//   }

//   handleAddingNewMerchToList = (newMerch) => {
//     const newMainMerchList = this.state.mainMerchList.concat(newMerch);
//     this.setState({
//       mainMerchList: newMainMerchList,
//       formVisibleOnPage: false
//     });
//   }

//   handleChangingSelectedMerch = (id) => {
//     const selectedMerch =this.state.mainMerchList.filter(merch => merch.id === id)[0];
//     this.setState({selectedMerch: selectedMerch});
//   }

//   handleDeletingMerch = (id) => {
//     const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
//     this.setState({
//       mainMerchList: newMainMerchList,
//       selectedMerch: null
//     });
//   }

//   handleEditClick = () => {
//     this.setState({editing:true});
//   }

//   handleEditingMerchInList = (merchToEdit) => {
//     const editedMainMerchList = this.state.mainMerchList
//       .filter(merch => merch.id !== this.state.selectedMerch.id)
//       .concat(merchToEdit);
//     this.setState({
//       mainMerchList: editedMainMerchList,
//       editing: false,
//       selectedMerch: null
//     });
//   }

//   handleIncreasingMerchStock = (id) => {
//     if(this.state.mainMerchList > 1) {
//       const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0]
//       selectedMerch.items++;
//       const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !==id).concat(selectedMerch);
//       this.setState({mainMerchList:newMainMerchList});
//     } else {
//       const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0]
//       selectedMerch.items++;
//       const newMerchListArray = [];
//       const changedMerchArray = newMerchListArray.concat(selectedMerch);
//       this.setState({
//         mainMerchList: changedMerchArray
//       });
//     }
//   }

//   handleDecreasingMerchStock = (id) => {
//     if(this.state.mainMerchList > 1) {
//       const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0]
//       selectedMerch.items--;
//       const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !==id).concat(selectedMerch);
//       this.setState({mainMerchList:newMainMerchList});
//     } else {
//       const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0]
//       selectedMerch.items--;
//       const newMerchListArray = [];
//       const changedMerchArray = newMerchListArray.concat(selectedMerch);
//       this.setState({
//         mainMerchList: changedMerchArray
//       });
//     }
//   }

//   render() {
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     if (this.state.editing) {
//       currentlyVisibleState = <EditMerchForm merch = {this.state.selectedMerch} onEditMerch = {this.handleEditingMerchInList}/>
//       buttonText = "Return to Merch List";
//     } else if(this.state.selectedMerch != null) {
//       currentlyVisibleState = <MerchDetail 
//         merch={this.state.selectedMerch}
//         onClickingDecrease={this.handleDecreasingMerchStock}
//         onClickingIncrease={this.handleIncreasingMerchStock}
//         onClickingDelete={this.handleDeletingMerch}
//         onClickingEdit={this.handleEditClick} />
//       buttonText= "Return to Merch List";
//     } else if (this.state.formVisibleOnPage) {
//       currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}/>
//       buttonText = "Return to Merch List";
//     } else {
//       currentlyVisibleState = <MerchList merchList={this.state.mainMerchList} onMerchSelection = {this.handleChangingSelectedMerch}/>
//       buttonText = "Add Merch";
//     }

//     return(
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }
// }

// export default MerchControl;