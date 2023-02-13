export class UserData {
    data?:    User[];
    message?: string;
}

export class User {
    _id?:         string;
    createdAt?:   Date;
    updatedAt?:   Date;
    status?:      boolean;
    nameUser?:    string;
    dateBirth?:   Date;
    email?:       string;
    phoneNumber?: string;
    signImage?:   string;
}
