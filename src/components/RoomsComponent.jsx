import React, {Component} from 'react';
import RoomService from '../services/RoomService'


class RoomsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        RoomService.getRooms().then((res) => {
            this.setState({ rooms: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Rooms</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Room name</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.rooms.map(
                                room =>
                                    <tr key={room.id}>
                                        <td>{room.name}</td>
                                        <td>{room.country.name}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RoomsComponent;
