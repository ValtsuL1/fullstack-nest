import { UserPost } from "src/user_post/entities/user_post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => UserPost, (userPost) => userPost.user)
    userPosts: UserPost[]
}
