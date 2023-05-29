let listStu=[];
let ind=0;
let en = new Student('Én', 'stu1', '12/02/1999', 'chua biet', '1a23c','7.7','./source/en.png');
let pika = new Student('Pika', 'stu2', '12/07/1999', 'none', '1a23c','8.0','./source/pikacringe.png');
let pepe = new Student('Pepe', 'stu3', '12/08/1999', 'henxui', '1a23c','7.2','./source/pepe.png');

listStu.push(en, pika, pepe);
function display(){
    let d=''
    for (let i=0; i<listStu.length; i++){
        d+='<tr>';
        d+= `<td><img class="imgsize" src="${listStu[i].pic}"</td>
        <td>${listStu[i].name}</td>
        <td>${listStu[i].id}</td>
        <td>${listStu[i].clas}</td>
        <td><button style="margin: 7px" onclick="edit(${i})">Edit</button>
        <button style="margin: 7px" onclick="del(${i})">Delete</button></td>`;
        d+= '</tr>';
    }
    document.getElementById('list').innerHTML=d;
}
function clear(){
    document.getElementById('name').value='';
    document.getElementById('id').value='';
    document.getElementById('doB').value='';
    document.getElementById('gender').value='';
    document.getElementById('clas').value='';
    document.getElementById('score').value='';
    document.getElementById('pic').value='';
}
function checkId(a){
    let flag = true;
    for (let i=0; i<listStu.length; i++){
        if(listStu[i].id === a){
            flag= false;
            break;
        }
    }
    return flag;
}
function add(){
    if(checkId(document.getElementById('id').value)){let stu = new Student(
        document.getElementById('name').value,
        document.getElementById('id').value,
        document.getElementById('doB').value,
        document.getElementById('gender').value,
        document.getElementById('clas').value,
        document.getElementById('score').value,
        document.getElementById('pic').value,
    )
    listStu.push(stu);
    clear();
    display();
}else{
    alert('Trùng ID! Vui lòng kiểm tra lại');
    clear();
}
    
}
function btnsave(){
    document.getElementById('formButton').innerHTML='<button onclick="save()" style="width: 70px; font-size: 16px">save</button>';
}
function btnback(){
    document.getElementById('formButton').innerHTML='<button style="width: 70px; font-size: 16px" onclick="add()">add</button>\n';
}
function edit(i){
    document.getElementById('name').value = listStu[i].name;
    document.getElementById('id').value = listStu[i].id;
    document.getElementById('doB').value = listStu[i].doB;
    document.getElementById('gender').value = listStu[i].gender;
    document.getElementById('clas').value = listStu[i].clas;
    document.getElementById('score').value = listStu[i].score;
    document.getElementById('pic').value = listStu[i].pic;
    btnsave();
    ind=i;
}
function save(){
    listStu[ind].name= document.getElementById('name').value;
    listStu[ind].id= document.getElementById('id').value;
    listStu[ind].doB= document.getElementById('doB').value;
    listStu[ind].gender= document.getElementById('gender').value;
    listStu[ind].class= document.getElementById('clas').value;
    listStu[ind].score= document.getElementById('score').value;
    listStu[ind].pic= document.getElementById('pic').value;
    btnback();
    clear();
    display();
}
function del(i){
    listStu.splice(i,1);
    display();
}