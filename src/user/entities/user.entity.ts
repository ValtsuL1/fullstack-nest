import { Comment } from "src/comment/entities/comment.entity";
import { UserPost } from "src/user_post/entities/user_post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '30'})
    username: string;

    @Column({type: 'varchar', length: '60'})
    email: string;

    @Column({type: 'varchar', length: '256'})
    password: string;

    @Column({type: 'timestamp without time zone'})
    creationDate: Timestamp;

    @OneToMany(() => UserPost, (userPost) => userPost.user)
    userPosts: UserPost[]

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]
}
