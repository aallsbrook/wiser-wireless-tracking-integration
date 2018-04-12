function Example(req, resp){
    var HOST_URI = "http://192.168.7.220:8080"
    var wiser = Wiser(HOST_URI)
    wiser.fetchPassiveTags(function(err, data){
        resp.success(data)
    })
}