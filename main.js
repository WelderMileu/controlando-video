(function(){
	// Seletor
	const $ = (e) => document.querySelector(e);
	
	const lista = $(".list");
	const links = lista.getElementsByTagName('a');
	
	for(var i = 0; i < links.length; i++){
		links[i].onclick = per;
	}
	
	function per(e){
		e.preventDefault();
		const videotarget = this.getAttribute("href");
		const filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
		
		const video = $('.img video');
		video.removeAttribute('poster');
		
		const source = document.querySelectorAll(".img video source");
		source[0].src = filename + ".mp4";
		video.load();
		//video.play();
	}
	
	function mostrar(){
		let tempo = $("#video").currentTime.toFixed(0);
		let hora = Math.floor(tempo / 3600);
		let minutos = Math.floor((tempo - (hora * 3600)) / 60);
		let segundos = tempo - (hora * 3600) - (minutos * 60);
		
		if(hora < 10) hora = "0" + hora;
		if(minutos < 10) minutos = "0" + minutos;
		if(segundos < 10) segundos = "0" + segundos;
		
		$(".temp").innerHTML = `${hora}:${minutos}:${segundos}`;
	}
	
	$("#video").addEventListener("timeupdate",mostrar);
	
})();











