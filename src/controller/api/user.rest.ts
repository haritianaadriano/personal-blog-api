import { ApiProperty } from '@nestjs/swagger';
import { CustomizationOptions } from '../../model/enums/customization.enum';

export class UserApi {
  @ApiProperty()
  id: string;
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone_number: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  birthdate: Date;
  @ApiProperty()
  creation_datetime: Date;
  @ApiProperty()
  career_path: string;
  @ApiProperty({ enum: ['PROFESSIONAL', 'STUDENT'] })
  customization_option: CustomizationOptions;

  constructor() {}

  setCreationDate(creationDate: Date) {
    this.creation_datetime = creationDate;
  }
  setBirthdate(date: Date) {
    this.birthdate = date;
  }
  setId(id: string) {
    this.id = id;
  }
  setDescription(description: string) {
    this.description = description;
  }
  setCareerPath(careerPath: string) {
    this.career_path = careerPath;
  }
  setCustomizationOptio(customization: CustomizationOptions) {
    this.customization_option = customization;
  }
  setUsername(username: string) {
    this.username = username;
  }
  setFirstname(firstname: string) {
    this.firstname = firstname;
  }
  setLastname(lastname: string) {
    this.lastname = lastname;
  }
  setEmail(email: string) {
    this.email = email;
  }
}
