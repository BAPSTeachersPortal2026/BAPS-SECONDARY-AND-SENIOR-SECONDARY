function filterSubjects(){
let f=document.getElementById('search').value.toLowerCase();
document.querySelectorAll('#subjectList li').forEach(li=>{
li.style.display=li.textContent.toLowerCase().includes(f)?'':'none';
});
}