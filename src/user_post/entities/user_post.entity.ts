import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class UserPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '100'})
    title: string;

    @Column({type: 'varchar', length: '2000'})
    content: string;

    @Column()
    userId: number;

    @Column({type: 'timestamp without time zone'})
    creationDate: Timestamp;
}
