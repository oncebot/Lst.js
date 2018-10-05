const Lst = {
    isEmptyObject(object) {
        for(var key in object) {
            if(object.hasOwnProperty(key))
                return false;
        }
        return true;
    },
    key(object){
        if(object !== null && typeof object === 'object'){
            return Object.keys(object)[0];
        }
        return undefined;
    },
    value(object){
        if(object !== null && typeof object === 'object'){
            return Object.values(object)[0];
        }
        return undefined;
    },
    index(list,object){
        const key = this.key(object);
        const value = this.value(object);
        let index = -1;
        if(key != undefined && value != undefined){
            index = list.findIndex(item => item[key] == value);         
        };
        return index;
    },
    find(list,object){
        const index = this.index(list,object);
        const item = list[index];
        return item;   
    },
    clone(list){
        return JSON.parse(JSON.stringify(list));
    },
    add(list,item,index=null){
        if(index == null){
            index = list.length;
        }
        list.splice(index, 0, item);
        return list;        
    },
    remove(list,object){
        const index = this.index(list,object);
        if(index>=0){
            list.splice(index,1);              
        }
        return list;   
    },
    update(list,object,data){
        let index = this.index(list,object);
        let item = this.clone(list[index]);
        if(index>=0){
            list[index] = {...item,...data};
        }
        return list;
    },
    min(list,key){
        let value = null;
        list.map((item)=>{
            if(item[key]){
                if(!isNaN(item[key])){
                    if(value == null){
                        value = item[key];
                    }else{
                        value = (item[key]<value)?item[key]:value;
                    }
                }
            }
        });
        return value;
    },
    max(list,key){
        let value = null;
        list.map((item)=>{
            if(item[key]){
                if(!isNaN(item[key])){
                    if(value == null){
                        value = item[key];
                    }else{
                        value = (item[key]>value)?item[key]:value;
                    }
                }
            }
        });
        return value;
    },
    count(list,object){
        const key = this.key(object);
        const value = this.value(object);
        let count = 0;
        if(key != undefined && value != undefined){
            count = list.filter((item)=>{
                return item[key] == value;
            }).length;
        }
        return count;
    },
    has(list,object){
        const has = this.index(list,object)>=0?true:false;
        return has;
    },
    include(list,object){
        const key = this.key(object);
        const value = this.value(object);
        let output = [];
        if(key != undefined && value != undefined){
            output = list.filter((item)=>{
                return item[key] == value;
            });
        }
        return output;
    },
    exclude(list,object){
        const key = this.key(object);
        const value = this.value(object);
        let output = [];
        if(key != undefined && value != undefined){
            output = list.filter((item)=>{
                return item[key] != value;
            });
        }
        return output;
    },
    select(list,keys){
        let output = list.map((item,index)=>{
          const row = {};
          keys.forEach((key)=>{
              if(item[key] != undefined){
                row[key] = item[key];
              }
          });
            return row;
        });
        output = output.filter(item => Object.keys(item).length !== 0);
        return output;
    },
    orderBy(list,key,reverse = false){
        list.sort(function(a, b) {
            if(reverse){
                return b[key] - a[key];
            }else{
                return a[key] - b[key];
            }
        });
        return list;
    },
    orderSet(list,key){
        list.forEach((item,index)=>{
          item[key] = index+1;
        });
        return list;
    },
    shift(list,old_index,new_index){
        if (new_index > list.length) {
            new_index = list.length;
        }
        list.splice(new_index, 0, list.splice(old_index, 1)[0]);
        return list;       
    },
    move(from_list,to_list,object,index=null){
        let item = this.find(from_list,object);
        let final_from_list = null;
        let final_to_list = null;
        if(item){
            item = this.clone(item);
            final_from_list = this.remove(from_list,object);
            if(to_list){
                final_to_list = this.add(to_list,item,index);
            }
        }
        const output = {
            from_list:final_from_list,
            to_list:final_to_list,
            item:item,
        };
        return output;
    },
}