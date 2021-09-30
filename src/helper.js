class Helper{

    static choice(items) {
        let fruit = items[Math.floor(Math.random()*Object.keys(items).length)];
        return fruit;
    }

    static remove(items, item){
        const check = Object.keys(items).length;
        items.forEach((elm,i) => {
            if(elm === item)
                delete items[i]
        });
        return check !== Object.keys(items).length? item: undefined;
    }
    
}

export default Helper
