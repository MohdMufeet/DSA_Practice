class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        const node = new Node(data);

        if(this.head === null){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
    }

    print(){
        let current = this.head;
        while(current !== null){
            console.log(current);
            console.log(current.data);
            current = current.next;
        }
    }

}

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.print();