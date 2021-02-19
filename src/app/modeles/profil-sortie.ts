export interface IProfilSortie{
    id: number ;
    libelle: string;
}
export class ProfilSortie implements IProfilSortie {
    id: number ;
    libelle: string ;
    constructor(profilSortieData: any) {
        this.id = profilSortieData.id;
        this.libelle = profilSortieData.nom;
    }
}
