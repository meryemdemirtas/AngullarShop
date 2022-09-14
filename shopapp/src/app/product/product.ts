export class Product{

    Id:number ;
    name:string;
    price:string ;
    categoryId:Number;
    description:string;
    imageUrl:string;

constructor( Id:number,name:string,price:string ,categoryId:Number,description:string,imageUrl:string)
{this.Id=Id, this.name=name,this.price=price,this.categoryId=categoryId,this.description=description,this.imageUrl=imageUrl}

}