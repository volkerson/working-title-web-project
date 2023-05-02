const btnToggleTheme = document.getElementById( 'theme-toggle' );
const cpmLogo = document.querySelector( '.company--logo' );


const toggleTheme = () => {
   
    document.body.classList.contains( 'dark-theme') ? document.body.classList.remove( 'dark-theme') : document.body.classList.add( 'dark-theme')    
    btnToggleTheme.classList.contains ('toggled') ? btnToggleTheme.classList.remove( 'toggled') : btnToggleTheme.classList.add( 'toggled' ) 
    const cpmLogoPathArray = document.querySelector( '.company--logo').src.split("/");
    const brandImg = cpmLogoPathArray[cpmLogoPathArray.length - 1];  
    brandImg === "dark-theme_logo.png" ? cpmLogo.src = "assets/images/default-theme_logo.png" : cpmLogo.src = "assets/images/dark-theme_logo.png"
}

btnToggleTheme.addEventListener( 'click', toggleTheme);