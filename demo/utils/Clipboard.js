export default{
    objs:[],

    push(obj){
        this.objs.push(obj);
    },
    pop(){
        return this.objs.pop();
    },
    get(){
        return this.objs[this.objs.length-1]
    },
    isEmpty(){
        return this.objs.length < 1;
    }

}