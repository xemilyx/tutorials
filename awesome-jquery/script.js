function loadDoc() {
    // $('#demo').load("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", 
    //     function(responseTxt, statusTxt, xhr) {
    //         console.log(statusTxt);
    //         if(statusTxt == "success") {
    //             alert("External content loaded successfully!")
    //         }
    //         if(statusTxt == "error") {
    //             alert("Error: " + xhr.status + ": " + xhr.statusText)
    //         }
    //     });
    $.get("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt", 
        function(data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
    });
}