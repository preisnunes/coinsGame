const randomizeCoinsValue = function(numberOfCoins) {
    let coins = [];
    while (coins.length < numberOfCoins) {
        const coinValue = Math.floor(Math.random() * 100);
        if (coins.indexOf(coinValue) == -1) {
            coins.push(coinValue)
        }
    }
    return coins;
};

const coinsAtGame = function() {
    let coins = [];

    const init = function(numberOfCoins) {
        coins = randomizeCoinsValue(numberOfCoins);
    }

    const get = function() {
        return coins;
    }

    return {
        init, 
        get
    }
};

const start = function() {
    game.init(size);
    coins = game.get();
    const gameElem = document.getElementById('board');
    for (let i = 0; i < coins.length; ++i) {
        let circleElem = document.createElement('div')
        circleElem.classList.add('coin')
        circleElem.innerText = coins[i];
        gameElem.append(circleElem);
    }
}


const bootEvents = function() {
    startButton = document.getElementsByClassName('start');
    startButton[0].addEventListener('click', start);

    sizeInput = document.getElementsByClassName('size');
    sizeInput[0].addEventListener('change', (evt) => {
        size = evt.target.value
    });

};


(function(){
    size = 20;
    game = coinsAtGame();
    bootEvents();
})();



