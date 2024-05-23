//Basic arrays- Product inventory

type product= {name:string, price:number, inventory:{
    stock:number, colorOption:string[]
}};

let products:product[]=[
    {
        name:"Laptop",
        price:65000,
        inventory:{
            stock:25,
            colorOption:['Black', 'White', "Gray"]
        }
    },
    {
        name:"Camera",
        price:40000,
        inventory:{
            stock:10,
            colorOption:['Black', 'Red', "Yellow"]
        }
    },
    {
        name:"Mobile",
        price:25000,
        inventory:{
            stock:15,
            colorOption:['Black', 'Silver', "Royal blue", 'red']
        }
    }
]

function changeColor(product:product, newColor:string){
    if(product.inventory.colorOption.includes(newColor)){
        if(newColor==="Red"){
            product.price *= 1.10;
        } else if (newColor === "Blue"){
            product.price *= 0.95;
        }
    } else {
        console.log(`Color ${newColor} is not available for ${product.name}`);
    }
}

products.forEach(
    (product) =>{
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price.toFixed(2)}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOption.join(", ")}`);
    console.log("----");
});