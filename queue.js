class Queue {
    constructor(){
       this.queue = []
    }
    push(el){
        this.queue.push(el)
    }
    shift(){
        return this.queue.shift()
    }
    isEmpty(){
        return !this.queue.length
    }
    clear(){
        this.queue = [];
    }
    head(){
        return this.queue[0]
    }
    tail(){
        return this.queue[this.queue.length-1]
    }
    size(){
        return this.queue.length
    }
}

let del_ring = (data)=>{
    let queue = new Queue();

    data.forEach(item=>{
        queue.push(item)
    })
    
    var index = 0
    while(queue.size()!=1){
        const value = queue.shift()
        index += 1;
        if(index%3!==0){
            queue.push(value)
        }
    }
    return queue.head(queue)
}

let arr_list = [];
for(var i=0;i< 100;i++){
    arr_list.push(i);
}

console.log(del_ring(arr_list))


// 斐波那契数列 1，1，2，3，5，8，13, 21  f(n)=f(n-1)+f(n-2)
const fibonacci = (n)=>{
    let queue = new Queue();
    queue.push(1)
    queue.push(1)
    let n1 ,n2;
    n1=n2= queue.head()
    
    for(let i = 3; i<=n; i++){
        let res = n1+n2
        queue.push(res)
        n1 = n2;
        n2 = res
    }
    return queue.tail()
}
console.log(fibonacci(8))
// 方案2
const fibonacci2 = (n)=>{
    let queue = new Queue();
    queue.push(1)
    queue.push(1)
    let n1, n2, res;
    for(let i = 3; i<=n; i++){
        n1 = queue.shift();
        n2 = queue.head();
        res = n1+n2
        queue.push(res);
    }
    return queue.tail()
}
console.log(fibonacci2(8))



// 队列实现栈
class Track {
    constructor(){
        this.queue1 = new Queue();
        this.queue2 = new Queue();
        this.data_queue = null;
        this.empty_queue = null;
    }
    initQueue(){
        if(this.queue1.isEmpty() && this.queue2.isEmpty()){
            this.data_queue = this.queue1;
            this.empty_queue = this.queue2;
        } else if(this.queue1.isEmpty()){
            this.empty_queue = this.queue1;
            this.data_queue = this.queue2;
        } else {
            this.data_queue = this.queue1;
            this.empty_queue = this.queue2;
        }
    }
    push(el){
        this.initQueue();
        this.data_queue.push(el)
    }
    top(){
        this.initQueue();
        return this.data_queue.tail()
    }
    pop(){
        this.initQueue();
        while(this.data_queue.size()>1){
            this.empty_queue.push(this.data_queue.shift());
        }
        return this.data_queue.shift();
    }
}

let track = new Track();
track.push(1)
track.push(2)
track.push(3)
track.push(4)
console.log(track.top())
console.log(track.pop())


// 杨辉三角
function Triangle(n){
    var queue = new Queue();
    queue.push(1);
    // 第一层for循环控制打印几层
    for(var i=1; i<=n; i++){
        var line = "";
        var pre = 0;
        // 第二层for循环控制打印第 i 层
        for(var j=0; j<i; j++){
            var item = queue.shift();
            line += item + "  "
            // 计算下一行的内容
            var value = item + pre;
            pre = item;
            queue.push(value);
        }
        // 每一层最后一个数字是1,上面的for循环没有计算最后一个数
        queue.push(1);
        console.log(line);
    }
};
Triangle(4)