//save algoId, userId//
import axios from "axios";

export default {
	// Gets all algorithms from Algorithms collection
	getAlgorithms: function() {
		return axios.get("/api/library");
	}
};

// saveAlgo: function(saveAlgorithm, userId) {
// 	reurn axios.post("/api/books/" + userId, algoData)
// }

//use a mongo query to look at localStorage's userId'
