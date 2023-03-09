<template>
    <header>
        <nav>
            <router-link to="/coaches" class="nav-buttons">Coaches</router-link>
            <router-link to="/requests" class="nav-buttons">Requests</router-link>
        </nav>
    </header>
</template>

<style scoped>
header {
    background: linear-gradient(90deg, rgba(31,201,54,1) 0%, rgba(0,212,255,1) 100%);
    width: 100%;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav {
    min-width: 50%;    
    display: flex;
    justify-content: center;
}

.nav-buttons{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 2rem;
    color: #FFF;
    padding: 1.3rem 2rem;  
    text-align: center;  
    border-radius: 10px;    
    text-decoration: none;
    box-shadow: 1px 1px 3px #818181; 
}

.nav-buttons:hover{
    cursor: pointer;
}

a.router-link-active{
    border: 2px solid #FFF; 
    box-shadow: none;
}
</style>