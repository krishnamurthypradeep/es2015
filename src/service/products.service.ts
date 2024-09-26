import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entity/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService{

    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){

    }

    findAll(): Promise<Product[]>{
        return this.productRepository.find()
    }

    findOne(id: number): Promise<Product | null>{
        return this.productRepository.findOneBy({id})
    }

    async remove(id: number): Promise<void>{
        await  this.productRepository.delete(id)
    }
    addNewProduct(product: Product): Promise<Product>{
        return this.productRepository.save(product)
    }
     

}