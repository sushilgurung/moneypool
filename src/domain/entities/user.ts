export interface UserProps{
  fName: string;
  mName?: string;
  lName: string;
  email: string;
  passWordHash: string;
  createdAt: Date;
}

export class User{
  constructor(private props: UserProps){}

  get fName(): string {
    return this.props.fName; 
  }

  get mName(): string | undefined{
    return this.props.mName;
  }

  get lName(): string{
    return this.props.lName;
  }

  get email(): string{
    return this.props.email;
  }

  get passWordHash(): string{
    return this.props.passWordHash;
  }

  get createdAt(): Date{
    return this.props.createdAt;
  }


}
