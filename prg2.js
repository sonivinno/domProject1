let service = [
    {
        "id": "df446a35-51c2-4f61-8bfa-7e56cdea024d",
        "shopId": "4d7bd0c9-3524-43cc-818c-6e3a71f7a2cc",
        "type": "DRY WASH",
        "fabric": "WOOL",
        "price": 150
    },
    {
        "id": "27f6fe5b-f65d-4d39-a780-0952675f8a3e",
        "shopId": "4d7bd0c9-3524-43cc-818c-6e3a71f7a2cc",
        "type": "IRON",
        "fabric": "COTTON",
        "price": 80
    },
    {
        "id": "592bb695-88bd-42ce-b673-8b51c7c6b847",
        "shopId": "4d7bd0c9-3524-43cc-818c-6e3a71f7a2cc",
        "type": "IRON",
        "fabric": "SILK",
        "price": 80
    },
    {
        "id": "fa623078-3c47-41f4-9d0a-dc7ae299fa93",
        "shopId": "4d7bd0c9-3524-43cc-818c-6e3a71f7a2cc",
        "type": "LAUNDROMAT",
        "fabric": "COTTON",
        "price": 80
    },
    {
        "id": "228b3afc-16bc-4c8b-8bf9-0c59729750c2",
        "shopId": "4d7bd0c9-3524-43cc-818c-6e3a71f7a2cc",
        "type": "LAUNDROMAT",
        "fabric": "SILK",
        "price": 50
    }
];
let obj1 = service.reduce((acc,element)=>{
    acc[element.id]=element;
    return acc;
},{});
console.log(obj1);

let obj2=service.reduce((acc1,value1)=>{
    let fabric = acc1[value1.type] && acc1[value1.type].fabric;
    let data=value1.fabric;
    fabric = fabric ? fabric+ ',' + '['+ data +']': '['+data+']';
    const type = value1.type;
    acc1[value1.type]={type, fabric};
    return acc1;
},{});
console.log(obj2);





