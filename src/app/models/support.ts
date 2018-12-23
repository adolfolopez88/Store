export interface FileStore {
  name: string;
  downloadUrl: string;
  extention: string;
}

export class User {
  uid: string;
  email: string;
  photoUrl?: string;
  role: any[];
  companyId: string;

  constructor (authData: any) {
    this.uid = authData.uid;
    this.email = authData.email;
    this.photoUrl = authData.photoUrl;
    this.companyId = authData.companyId;
  }

}
