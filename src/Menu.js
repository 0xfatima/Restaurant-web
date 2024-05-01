import burger from  "../asset/burger.png"

export default function Menu(){
    const pass=`<h1>Menu</h1>
    <div class="grid-container">
        <div class="card">
            <img class="card-img" src=${burger} alt="icon">
            <p class="caption">
                Enjoy The Amazing Burger
            </p>
        </div>
        <div class="card">
            <img class="card-img" src=${burger} alt="icon">
            <p class="caption">
                Enjoy The Amazing Burger
            </p>
        </div>
        <div class="card">
            <img class="card-img" src=${burger} alt="icon">
            <p class="caption">
                Enjoy The Amazing Burger
            </p>
        </div>
        <div class="card">
            <img class="card-img" src=${burger} alt="icon">
            <p class="caption">
                Enjoy The Amazing Burger
            </p>
        </div>
    </div>

    `

    document.getElementById("content").innerHTML=pass;
}