(()=>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav =  $tab.querySelectorAll('[data-nav]');
    const $content =  $tab.querySelectorAll('[data-content]');
    const Active_Class = 'is-active';
    const NAV =$nav.length;
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();
 
    const handleClick = (e) => {
        e.preventDefault();
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        while(index< NAV){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(Active_Class);
    
            index++;
        }
        
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(Active_Class);
    };
    let index = 0;
    while(index < NAV){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
}
})();