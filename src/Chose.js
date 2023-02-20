// une chose
export default class Chose {
  constructor(id, titre, qtestock, prix) {
    this._id = id;
    this._titre = titre;
    this._qtestock = qtestock;
    this._prix = prix; 
  }
  get id() {
    return this._id;
  }
  get titre() {
    return this._titre;
  }
  get qtestock() {
    return this._qtestock;
  }
  get prix(){
    return this._prix; 
  }

  // modifier fait / pas fait
  faire() {
    this._fait = !this._fait;
  }

  enlever(){
    this._qtestock = this._qtestock - 1; 
     
  }


  ajouter(){
    this._qtestock = this._qtestock + 1;
  }
  // modifier le texte
  set texte(texte) {
    this._texte = texte;
  }

  set qtestock(nvstock) {
    this._qtestock = nvstock;
  }
  pourAfficher() {
    return ` ${this._titre}`+` (id: ${this._id})`+`, ${this._qtestock} en stock`+ `, ${this._prix} €.`;
  }
}
