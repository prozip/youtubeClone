var b = new Bugout();

// get the server address (public key hash) to share with clients
// this is what clients will use to connect back to this server
alert(b.address());

b.register("ping", function (address, args, callback) {
    console.log(args, callback);
    // modify the passed arguments and reply
    args.hello = "Hello from " + b.address();
    callback(args);
});

b.register("msg", function (address, args, callback) {
    console.log(args.msg);


    var show = document.getElementById("showMsg");
    var p_msg = document.createElement("p");
    p_msg.innerHTML = args.msg;
    show.appendChild(p_msg);

    args.msg = "get msg"
    callback(args);
});
