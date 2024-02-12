export class Product{
    id: number = 0;
    name:string = '';
    img:string =  '';
    seller:string =  '';
    price:number =  0;
    category:string =  '';
    stock:number =  0;
    description:string =  '';
    is_in_inventory:Boolean =  false;
    color:string[] =  [];
    size:string[] =  [];
    discountedPrice?:number =  0;
}