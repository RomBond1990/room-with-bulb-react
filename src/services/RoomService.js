import axios from 'axios';

const ROOM_API_BASE_URL = "http://localhost:8080/api/rooms"

class RoomService {

    getRooms(){
        return axios.get(ROOM_API_BASE_URL);
    }
    getRoomById(roomId) {
    return axios.get(ROOM_API_BASE_URL + '/' + roomId)
    }
}

export default new RoomService()
