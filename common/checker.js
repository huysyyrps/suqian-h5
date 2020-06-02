

let patt = {
	noempty : /\S/,
	phone : /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-8])|(9[1,8,9]))\d{8}$/,
	card : /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
	email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	carNumber : /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/
}

//  checkType 类型有 noempty,phone,card,email,carNumber,maxMin,min,max 

module.exports = {
	error:'',
	check : function (data, rule){
		if(!(Object.prototype.toString.call(rule) === '[object Object]')){
			throw new Error('rules 应为一个Object!');
			return false;
		}
		let ruleKeysArr = Object.keys(rule)
		let ruleValuesArr = Object.values(rule)
		
		for(var i = 0; i < ruleKeysArr.length;i++){
			let e = ruleKeysArr[i];
			if(!rule[e]) return true
			for(var j = 0;j<rule[e].length ;j++){
				let e2 = rule[ruleKeysArr[i]][j]
				if(e2.checkType == "maxMin"){
					if(!e2.max) return true
					else
					if(!e2.min) return true
					else{
						if(!(data[e].trim().length >= Number(e2.min) && data[e].trim().length <= Number(e2.max))){
							this.error = `${e}: ${e2.errorMsg}`;
							return false
						}
					}
				}else if(e2.checkType == "max"){
					if(!(data[e].trim().length <= Number(e2.max))){
						this.error = `${e}: ${e2.errorMsg}`;
						this.status = false
						return false
					}
				}else if(e2.checkType == "min"){
					if(!(data[e].trim().length >= Number(e2.min))){
						this.error = `${e}: ${e2.errorMsg}`;
						this.status = false
						return false
					}
				}else {
					if(!(patt[e2.checkType].test(data[e].trim()))){
						this.error = `${e}: ${e2.errorMsg}`
						this.status = false
						return false
					}
				}
			}
		}
		return true
	}
}