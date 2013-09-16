/*
 * Author : Samar
 */
(function(undefined){
    
	if($ === undefined || _ === undefined )
		return;

    var game = (function(){
        var score = 0,
            status = {
                started: false,
                end: false,
                health: 10
            };

        var eles = {
            
        };
        
        return {
            init : function(){
                //log("init called!");
                player.init();
            },
            end : function(){
                //log("end called!");
            },
            isStarted : function(){
                return status.started;
            }
        }
    })();

    var player = (function(){
        var eles = {
            box: $("player-box"),
			playground: $("#playground"),
			player: "<div class='player'></div>",
			other: "<div class='other'></div>"
        },
		socket,
		player,
		dx = 20,
		dy = 20;

		function keyEvents(){
            $(document).bind('keypress keydown touchstart touchmove', function(event){
                //log(event.keyCode+" << ");
				player.stop();
                if(event.keyCode === 37){
                    //move left
					player.animate({"left": "-="+dx+"px"});
                } else if(event.keyCode === 39){
                    //move right
					player.animate({"left": "+="+dx+"px"});
                }
                if(event.keyCode === 38){
                    //move up
					player.animate({"top": "-="+dy+"px"});
                } else if(event.keyCode === 40){
                    //move down
					player.animate({"top": "+="+dy+"px"});
                }
                
                if(event.keyCode === 32){
                    //fire bullet
                }
				//socket.socket.broadcast.emit("update_player", {id:socket.socket.sessionid, x:getRandom(10, 500), y:getRandom(10, 500)});
				var newx = player.css("left"),
					newy = player.css("top");
				player.css({"left": newx, "top" : newy});
				socket.emit("update_player", {id:socket.socket.sessionid, x:newx, y:newy});
            });
        }

		function getRandom(min, max){
			return Math.floor(Math.random() * (max-min+1)) + min;
		}
		
		function updatePosition(value){
			//console.log(player.css("left"));
			//player.css(value);
		}

		function socketInit(){
            var connection = "http://192.168.1.10:1111";//office
			//var connection = "http://192.168.1.2:1111";//home
			socket = io.connect(connection);
			socket.on('connect', connect);
			socket.on('disconnect', disconnect);
			socket.on("new_player", addPlayer);
			socket.on("remove_player", removePlayer);
			socket.on("update_player", updatePlayer);
			socket.on("add_prev_players", addPrevPlayer);
		}
		
		function addPrevPlayer(data){
			var others = "";
			_.each(data, function(other){
				others += "<div class='other' id='"+other+"'></div>";
			});
			if(others != ""){
				eles.playground.append(others);
			}
		}
		
		function addPlayer(data){
			eles.playground.append("<div class='other' id='"+data.id+"'></div>");
			var other = $("#"+data.id);
			other.css({"left": data.x+"px", "top" : data.y+"px"});
		}

		function updatePlayer(data){
			var other = $("#"+data.id);
			other.css({"left": data.x, "top" : data.y});
		}

		function removePlayer(data){
			var other = $("#"+data.id);
			other.remove();
		}

		function connect(){
			//var items = eles.player;
			eles.playground.append(eles.player);
			player = $(".player");
			keyEvents();
		}

		function disconnect(){
			//console.log("disconnected!");
		}
		
        return {
            init: function(){
                socketInit();
            }
        };
    })();

    // Start application
    game.init();

})();
