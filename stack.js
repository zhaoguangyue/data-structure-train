// 先进后出
class Track {
    constructor(){
        this.track = []
    }
    push(el){
        this.track.unshift(el)
        return this.track 
    }
    pop(){
        return this.track.shift()
    }
    top(){
        return this.track[0]
    }
    isEmpty(){
        return !this.track.length
    }
    size(){
        return this.track.length
    }
    clear(){
        this.track.length = 0;
        return this.track
    }
}
let track = new Track()
let a = '()(){{}[]{}[]()()[{()}]}()';
let _brackets = (string)=>{
    for(let i = 0; i<string.length; i++){
        let _top = track.top()
        if(['(',')','{','}','[',']'].includes(string[i])){
            if(string[i]==='('||string[i]===')'){
                if(string[i] === '(' && _top === ')' || string[i] === ')' && _top === '('){
                    track.pop()
                } else {
                    track.push(string[i])
                }
            }
            if(string[i]==='['||string[i]===']'){
                if(string[i] === '[' && _top === ']' || string[i] === ']' && _top === '['){
                    track.pop()
                } else {
                    track.push(string[i])
                }
            }
            if(string[i]==='{'||string[i]==='}'){
                if(string[i] === '{' && _top === '}' || string[i] === '}' && _top === '{'){
                    track.pop()
                } else {
                    track.push(string[i])
                }
            }
        }
    }
    if(track.isEmpty()){
        return true
    }
    return false
}
console.log(_brackets(a))


// 逆波兰表达式
let exp_track = new Track()
let calc_exp = (exp)=>{
    exp.forEach(item=>{
        if(!['+','-','*','/'].includes(item)){
            exp_track.push(item)
        } else {
            const v1 = exp_track.pop()
            const v2 = exp_track.pop()
            const exp = v2+item+v1
            exp_track.push(eval(exp).toString())
        }
    })
    return exp_track.pop()
}
let expression = [2,3,4,'+','-']
var exp_1 = ["4", "13", "5", "/", "+"];
var exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(calc_exp(expression))
console.log(calc_exp(exp_1));
console.log(calc_exp(exp_2));
