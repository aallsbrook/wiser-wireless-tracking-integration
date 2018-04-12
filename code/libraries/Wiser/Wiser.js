/**
 * Wiser Library for interacting with Wiser Wireless Tracking server
 * 
 * @param {string} hostURI URI of server running Wiser software, ex "http://192.168.0.220:8080"
 */
 function Wiser(hostURI){
     
    const API_BASE = "wiser/api";
    var http = Requests();
    
    /**
     * Fetch all passive tags
     * @returns {Object[]} Array of Passive Tag Objects
     * @example
     * [{
     * 		"battery": 1,
     * 		"id": 41021,
     * 		"report": {
     * 			"id": 214,
     * 			"tag": 41021,
     * 			"error": 0.69650248573048179,
     * 			"location": {
     * 				"x": 248.27271695939552,
     * 				"y": 598.39472000389388,
     * 				"z": 0
     * 			},
     * 			"numanchors": 4,
     * 			"timestamp": 82349382
     * 		}
     * 	},
     * 	{
     * 		"battery": 0.5,
     * 		"id": 41022,
     * 		"report": {
     * 			"id": 215,
     * 			"tag": 41022,
     * 			"error": 0.923847293848293432,
     * 			"location": {
     * 				"x": 235.12342342333839,
     * 				"y": 859.29384762938483,
     * 				"z": 0
     * 			},
     * 			"numanchors": 4,
     * 			"timestamp": 823498392
     * 		}
     * 	}
     * ]
     */
    function fetchPassiveTags(callback){
        queryPassiveTags(null,null, callback);
    }

    /**
     * 
     * Perform a query of Wiser Passive Tags
     * @param {string[]} list of filters, ex ["battery", "report","id"]
     * @param {Object[]} array of query objects, ex [{report:location:x_above:100},{report:location:x_below:400}]
     */
    function queryPassiveTags(filters, query, callback){
        ENDPOINT = "passivetag";
        var uri = [hostURI,API_BASE, ENDPOINT].join('/');
        if(filters){
            // TODO
        }
        if(query){
            // TODO
        }
        var options = {
            uri
        };
        http.get(options, callback);
    }
    
    return {
        fetchPassiveTags
    };
    
}