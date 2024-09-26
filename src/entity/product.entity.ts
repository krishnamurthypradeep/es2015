import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {

    
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public productName: string;


    @Column({type:'real'})
    public price: number;
   

    

    


}