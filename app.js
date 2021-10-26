function remove_ads() {
	var paid = document.getElementsByClassName("wall_marked_as_ads")
	for (let i = 0; i < paid.length; i++) {
		paid[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
	}
	var ads = document.getElementsByClassName("Post--copyright")
	for (let i = 0; i < ads.length; i++) {
		ads[0].remove()
	}
}

let interval = setInterval(remove_ads, 1000)
