export interface IUser {
    id: number ;
    nom: string ;
    prenom: string;
    profil: string;
    telephone: number;
    sex: string;
    email: string;

}
export class User implements IUser {
    id: number ;
    nom: string ;
    prenom: string;
    email: string;
    profil: string;
    telephone: number;
    sex: string;
    constructor(userData: any) {
        this.id = userData.id;
        this.nom = userData.nom;
        this.prenom = userData.prenom;
        this.email = userData.email;
        this.profil = userData.profil;
        this.telephone = userData.telephone;
        this.sex = userData.sex;
    }
}
