//use axios//
//getAlgorithms.
import axios from "axios";

export default {
	// Gets all algorithms from Algorithms collection
	getAlgorithms: function() {
		return axios.get("/api/library");
	}
};
