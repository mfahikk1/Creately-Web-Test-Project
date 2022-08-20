function onTabClick(event){
    let activeTab = document.querySelectorAll('.active');

    //Deactivating existing Active Tabs
    for(let i = 0; i < activeTab.length; i++){
        activeTab[i].className = activeTab[i].className.replace('active', '');
    }

    //Activating existing Active Tabs
    event.target.parentElement.className += ' active';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);