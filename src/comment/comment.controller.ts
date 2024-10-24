import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Public } from 'src/public/public.decorator';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  /*
  @Get()
  findAll() {
    return this.commentService.findAll();
  }
    */

  @Get('user-post/:id')
  @Public()
  findAll(@Param('id') id: string) {
    return this.commentService.findAllByUserPostId(+id);
  }

  @Get('profile/:id')
  @Public()
  findAllByUserId(@Param('id') id: string) {
    return this.commentService.findAllByUserId(+id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
