expireDate = new Date
expireDate.setMonth(expireDate.getMonth()+6)
count_num = eval(cookieVal("counter_style_Visited"))
count_num++
document.cookie = "counter_style_Visited="+count_num+";expires=" + expireDate.toGMTString()

function cookieVal(cookieName) {
thisCookie = document.cookie.split("; ")
for (i=0; i<thisCookie.length; i++){
	if (cookieName == thisCookie[i].split("=")[0]){
		return thisCookie[i].split("=")[1]
	}
}
return 0
}

function page_countvisit(){
for (i=0;i<(7-count_num.toString().length);i++)
document.write('<span class="counter_style">0</span>')
for (y=0;y<(count_num.toString().length);y++)
document.write('<span class="counter_style">'+count_num.toString().charAt(y)+'</span>')
}
