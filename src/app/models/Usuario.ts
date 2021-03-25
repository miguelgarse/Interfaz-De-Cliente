import { Role } from 'src/app/models/Role';

export class Usuario {
    id: number;
    name: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    roles: Role[];
    createdBy: Usuario;
	dateCreated: Date;
    
    constructor(){ }

    public isAdmin(): boolean{
        let isAdmin: boolean = false;

        this.roles.forEach(role => {
            if(role.name == 'ADMIN'){
                isAdmin = true;
            }
        });

        return isAdmin;
    }

}