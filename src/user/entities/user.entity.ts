import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '30'})
    username: string;

    @Column({type: 'varchar', length: '60'})
    email: string;

    @Column({type: 'varchar', length: '60'})
    password: string;
}
