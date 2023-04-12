export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		return `<h1>asd</h1>`
	},
	myFun2: async() => {
		const sheet = jss.default.createStyleSheet({})
		const rule = sheet.addRule({
 		 padding: 20,
 		 background: 'black'
		});
		const element = document.getElementById('element');
		rule.applyTo(element)
		
		
		
		//document.body.innerHTML = `<button class="${rule.className}">Button</button>`
		// // jss.createRule({
    		// // background: 'blue'
  		// // }).applyTo(element);
	//
		  console.log(rule)
		// console.log(1)


		
	}
}