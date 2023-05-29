class Student{
    name;
    id;
    doB
    gender;
    clas;
    score;
    pic;
    constructor(name, id, doB, gender, clas, score, pic) {
        this.name = name;
        this.id= id;
        this.doB= doB;
        this.gender= gender;
        this.clas= clas;
        this.score= score;
        this.pic = pic;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getDoB(){
        return this.doB;
    }
    getGender(){
        return this.gender;
    }
    getClass(){
        return this.clas;
    }
    getScore(){
        return this.score;
    }
    getPic(){
        return this.pic;
    }
    setName(a){
        this.name= a;
    }
    setId(a){
        this.id= a;
    }
    setDoB(a){
        this.doB= a;
    }
    setGender(a){
        this.gender= a;
    }
    setClass(a){
        this.clas= a;
    }
    setScore(a){
        this.score= a;
    }
    setPic(a){
        this.pic= a;
    }
}