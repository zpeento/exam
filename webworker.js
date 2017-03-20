//work的全局作用域是独立的，是worker
//self和this都指向这个作用域

this.onmessage = function(e){
	postMessage(e.data + '--附加信息')
}