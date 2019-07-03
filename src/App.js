import React from 'react';
import Events from "./component/Events";


class App extends React.Component {
  
  constructor() {
    super();
    
    this.handleChangekidsParty = this.handleChangekidsParty.bind(this);
    this.handleChangewineTour = this.handleChangewineTour.bind(this);
    this.handleChangeteamBuilding = this.handleChangeteamBuilding.bind(this);
    this.handleChangepicnic = this.handleChangepicnic.bind(this);
    this.addEvent = this.addEvent.bind(this);
   
    this.state = {
        kidsParty: 0,
        wineTour: 0,
        teamBuilding: 0,
        picnic: 0,
        addEvents: 0
    }
    
  }
     handleChangekidsParty(event) {
      this.setState({kidsParty: event.target.value});
    }
    
    handleChangewineTour (event) {
      this.setState({wineTour: event.target.value})
    }
    
    handleChangeteamBuilding (event) {
      this.setState({teamBuilding: event.target.value})
    }
  
    handleChangepicnic (event) {
      this.setState({picnic: event.target.value})
    }
  
    addEvent (e) {
      e.preventDefault();
      const addEventsVar = (this.state.kidsParty * 220) + (this.state.wineTour * 440) + (this.state.teamBuilding * 800) + (this.state.picnic * 110);
      this.setState({
        addEvents: addEventsVar
      })
    }

    render() {
        return  (
            <div className="App">
                <h4> AmazingCO Events </h4>
                <Events kidsParty={this.state.kidsParty}
                        wineTour={this.state.wineTour}
                        teamBuilding={this.state.teamBuilding}
                        picnic={this.state.picnic}
                        submit={this.addEvent}
                        changedKids={this.handleChangekidsParty}
                        changeTour={this.handleChangewineTour}
                        changeTeam={this.handleChangeteamBuilding}
                        changepicnic={this.handleChangepicnic}/>
                <div>
                  <p>Total Event Price: {this.state.addEvents}</p>
                </div>
            </div>
        );
    }
}

export default App;