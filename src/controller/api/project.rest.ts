import { ApiProperty } from '@nestjs/swagger';
import { UserApi } from './user.rest';

export class CreateProjectApi {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  user_id: string;
}

export class ProjectApi {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  creation_datetime: Date;

  @ApiProperty()
  user: UserApi;

  @ApiProperty()
  donation_collected: number;
}
