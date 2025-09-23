import { Exclude } from "class-transformer";
import { 
    AfterInsert,
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    AfterRemove

} from "typeorm";


@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log(`inserted user with id:` + this.id);
    }

    
    @AfterRemove()
    logRemove(){
        console.log(`Removed user with id:` + this.id);
    }



}

