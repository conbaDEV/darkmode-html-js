document.getElementById('mode-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', document.body.classlist);
});

 if (localStorage.getItem('mode') != ''){    
     document.body.classList.add(localStorage.getItem('mode'));
 }
