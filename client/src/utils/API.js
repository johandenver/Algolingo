//save algoId, userId//
import axios from "axios";

export default {
	// Gets all algorithms from Algorithms collection
	getAlgorithms: function() {
		return axios.get("/api/library");
	},
	getUserId: function(token) {
		return axios.get("/api/user/token/" + token);
	},
	getUser: function(id) {
		return axios.get("/api/user/" + id);
	},
	showSaved: function(id, algoData) {
		return axios.post("/api/user/" + id, algoData);
	},

	showAnswer: function(id) {
		return axios.get("/api/user/" + id + "/answer");
	}
};
