let listStu=[];
let ind=0;
let en = new Student('Én', 'stu1', '12/02/1999', 'chua biet', '1a23c','7.7','./source/en.png');
let pika = new Student('Pika', 'stu2', '12/07/1999', 'none', '1a23c','8.0','./source/pikacringe.png');
let pepe = new Student('Pepe', 'stu3', '12/08/1999', 'henxui', '1a23c','7.2','./source/pepe.png');
let lockView=false;
let lockEdit=false;

listStu.push(en, pika, pepe);
let listData= document.getElementsByClassName('data');
for (let i=0; i<listData.length; i++){
    listData[i].style.display= 'none';
}
function checkAccess(){
    let psw = prompt('nhap mat khau view');
    if(psw === 'view'){
        lockView=true;
        viewList();
    }else {
        alert('Wrong!')
    }
}
function checkEdit(){
    if(prompt('nhap mk edit')=='admin'){
        lockEdit=true;
        viewEdit();
        lockView=true;
    }else {
        alert('Wrong!')
    }
}
function viewList(){
    if (lockView){
        document.getElementById('editor').style.display= "none";
        document.getElementById('viewer').style.display= "block";
        document.getElementById('tabSearch').style.display='none';
        document.getElementById('searchResult').style.display='none';
        let d='';
        for (let i=0; i<listStu.length; i++){
            d+= `<tr>
                <td><img class="imgsize" src="${listStu[i].pic}"></td>
                <td>${listStu[i].name}</td>
                <td>${listStu[i].id}</td>
                <td>${listStu[i].doB}</td>
                <td>${listStu[i].gender}</td>
                <td>${listStu[i].clas}</td>
                <td>${listStu[i].score}</td>
            </tr>`
        }
        document.getElementById('viewAll').innerHTML=d;
    }else{
     checkAccess();
    }
}
function viewEdit(){
    if (lockEdit){
        document.getElementById('editor').style.display= "flex";
        document.getElementById('viewer').style.display= "none" ;
        document.getElementById('tabSearch').style.display='none';
        document.getElementById('searchResult').style.display='none';
        let d=''
        for (let i=0; i<listStu.length; i++){
            d+='<tr>';
            d+= `<td><img class="imgsize" src="${listStu[i].pic}"></td>
                    <td>${listStu[i].name}</td>
                    <td>${listStu[i].id}</td>
                    <td>${listStu[i].clas}</td>
                    <td><button style="margin: 7px" onclick="edit(${i})">Edit</button>
                    <button style="margin: 7px" onclick="del(${i})">Delete</button></td>`;
            d+= '</tr>';
        }
        document.getElementById('listEdit').innerHTML=d;
    }else {
        checkEdit();
    }

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
    if(checkId(document.getElementById('id').value)){
        let stu = new Student(
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
        viewEdit();
    }else{
        alert('Trùng ID! Vui lòng kiểm tra lại');
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
    if (checkId(document.getElementById('id').value)){
        listStu[ind].name= document.getElementById('name').value;
        listStu[ind].id= document.getElementById('id').value;
        listStu[ind].doB= document.getElementById('doB').value;
        listStu[ind].gender= document.getElementById('gender').value;
        listStu[ind].class= document.getElementById('clas').value;
        listStu[ind].score= document.getElementById('score').value;
        listStu[ind].pic= document.getElementById('pic').value;
        btnback();
        clear();
        viewEdit();
    }else{
        alert('Trùng ID! Vui lòng kiểm tra lại');
    }
}
function del(i){
    listStu.splice(i,1);
    viewEdit();
}
function search(){
    let flag=false;
    let q=document.getElementById("search").value;
    for (let i=0; i<listStu.length; i++){
        if(listStu[i].name===q){
            flag= true;
            break;
        }
    }
    return flag;
}
function searchName(){
    if (search()){
        document.getElementById('tabSearch').style.display='block';
        document.getElementById('searchResult').style.display='block';
        document.getElementById('editor').style.display= "none";
        document.getElementById('viewer').style.display= "none" ;
        let q= document.getElementById('search').value;
        let d=''
        for (let i=0; i<listStu.length; i++){
            if (listStu[i].name===q){
                d+= `<table>
                    <tr>
                         <td rowspan="6"> <img src="${listStu[i].pic}"></td>
                         <td>${listStu[i].name} </td>
                    </tr>
                    <tr>
                        <td>${listStu[i].id}</td>
                    </tr>
                    <tr>
                        <td>${listStu[i].doB}</td>
                    </tr>
                    <tr>
                        <td>${listStu[i].gender}</td>
                    </tr>
                    <tr>
                        <td>${listStu[i].clas}</td>
                    </tr>
                    <tr>
                        <td>${listStu[i].score}</td>
                    </tr>
                     
                </table>`;
            }
        }
        document.getElementById('searchResult').innerHTML= d;
    }else {alert('Không tìm thấy!')}
}