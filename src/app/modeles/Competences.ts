export interface ICompetences{
    id: number ;
    libelle: string;
    description: string;
    grpcompetences: [];
    niveaux: [];

}
export class Competences implements ICompetences {
    id: number ;
    libelle: string ;
    description: string;
    grpcompetences: [];
    niveaux: [];
    constructor(competencesData: any) {
        this.id = competencesData.id;
        this.libelle = competencesData.nom;
        this.description = competencesData.prenom;
        this.grpcompetences = competencesData.grpcompetences;
        this.niveaux = competencesData.niveaux;
    }
}
