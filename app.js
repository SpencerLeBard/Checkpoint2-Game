let damageElem = document.getElementById('total-fish')
let spearPrice = document.getElementById('spear-price')
let netPrice = document.getElementById('net-price')
let gunPrice = document.getElementById('gun-price')
let nukePrice = document.getElementById('nuke-price')
let DrawSpearInventory = document.getElementById('spear-inventory')
let DrawNetInventory = document.getElementById('net-inventory')
let DrawGunInventory = document.getElementById('gun-inventory')
let DrawNukeInventory = document.getElementById('nuke-inventory')


let clickUpgrades = {
  spear: {
    cost: 10,
    modifier: 2,
    id: 12
  },


  net: {
    cost: 100,
    modifier: 5,
    id: 123
  },


  machineGun: {
    cost: 1000,
    modifier: 10,
    id: 1234
  },

}


let automaticUpgrades = {
  nuke: {
    cost: 10000,
    modifier: 100,
    id: 12345
  }
}


let fisher = {
  fish: 1,
  spear: 0,
  net: 0,
  machineGun: 0,
  nuke: 0

}

function cast() {
  fisher.fish += 1
  fisher.fish += fisher.spear * 2
  fisher.fish += fisher.net * 5
  fisher.fish += fisher.machineGun * 10
  fisher.fish += fisher.nuke * 100
  drawDamage();
}

function equipWeapon(name) {

  let item = clickUpgrades[name]


  if (fisher.fish >= item.cost) {
    fisher[name]++
    fisher.fish -= item.cost
    item.cost += 10
    fisher.spear += 1
    if (item.name == "spear") {
      //NOTE MODIFIER Here??

    }
    drawDamage()
    drawSpearPrice()
    drawSpearsInventory()
  }
}


function equipAutoWeapon(name) {

  let item = automaticUpgrades[name]


  if (fisher.fish >= item.cost) {
    fisher.fish++
    fisher.fish -= item.cost
    //??
    //??

    let nuke;
    function increaseInterval() {
      nuke = setInterval(autoNuke, 3000);
      setInterval(drawDamage, 3000)
    }

    function autoNuke() {

      fisher.fish++
      drawDamage()
    }
    drawDamage()
    drawSpearsInventory()
    drawSpearPrice()
  }
  increaseInterval()
}

function drawDamage() {
  let template = `${fisher.fish}`
  damageElem.innerText = template
}
drawDamage()

// function autocast interval 0 , when buy increase interval 
//xxxxxxxxxxxxxxxx NOTE Drawing

// price

function drawSpearPrice() {
  let template = `${clickUpgrades.spear.cost}`
  spearPrice.innerText = template

}
drawSpearPrice()



function drawNetPrice() {
  let template = `${clickUpgrades.net.cost}`
  netPrice.innerText = template


}
drawNetPrice()

function drawGunPrice() {
  let template = `${clickUpgrades.machineGun.cost}`
  gunPrice.innerText = template


}
drawGunPrice()

function drawNukePrice() {
  let template = `${automaticUpgrades.nuke.cost}`
  nukePrice.innerText = template


}
drawNukePrice()



// inventory



function drawSpearsInventory() {
  let template = `${fisher.spear}`
  DrawSpearInventory.innerText = template


}
drawSpearsInventory()

function drawNetInventory() {
  let template = `${fisher.net}`
  DrawNetInventory.innerText = template


}
drawNetInventory()


function drawGunInventory() {
  let template = `${fisher.machineGun}`
  DrawGunInventory.innerText = template


}
drawGunInventory()


function drawNukeInventory() {
  let template = `${fisher.nuke}`
  DrawNukeInventory.innerText = template


}
drawNukeInventory()

function drawEverything() {

}
