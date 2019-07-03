import React from 'react';

class Events extends React.Component {
    render() {
        return(
        <div>
            <form onSubmit={this.props.submit}>
                kids Party X <input type="text" name="kidsParty" onChange={this.props.changedKids} value={this.props.kidsParty} placeholder=""/>
                <br />
                Wine Tour X <input type="text" name="wineTour" onChange={this.props.changeTour} value={this.props.wineTour} placeholder=""/>
                <br />
                Team Building X <input type="text" name="team" onChange={this.props.changeTeam} value={this.props.teamBuilding} placeholder=""/>
                <br />
                Picnic X <input type="text" name="Picnic" onChange={this.props.changepicnic} value={this.props.picnic} placeholder=""/>
                <br />
                <button> Add Event </button>
            </form>
        </div>
        );
    }
}

export default Events;