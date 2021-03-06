let damageElem = document.getElementById('total-fish')
let spearPrice = document.getElementById('spear-price')
let netPrice = document.getElementById('net-price')
let gunPrice = document.getElementById('gun-price')
let nukePrice = document.getElementById('nuke-price')
let spearInventory = document.getElementById('spear-inventory')
let netInventory = document.getElementById('net-inventory')
let gunInventory = document.getElementById('gun-inventory')
let nukeInventory = document.getElementById('nuke-inventory')


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
    drawDamage()
    drawInventory()
  }
}


function equipAutoWeapon(name) {

  let item = automaticUpgrades[name]


  if (fisher.fish >= item.cost) {
    fisher.fish++
    fisher.fish -= item.cost
    automaticUpgrades.nuke.cost += 10
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
    drawInventory()
  }
  increaseInterval()
}

function drawDamage() {
  let template = `${fisher.fish}`
  damageElem.innerText = template
}
drawDamage()


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



// NOTE <-----inventory------>

function drawInventory() {
  drawSpearsInventory()
  drawGunInventory()
  drawNetInventory()
  drawNukeInventory()
}


function drawSpearsInventory() {
  let template = `${fisher.spear}`
  spearInventory.innerText = template
}
drawSpearsInventory()

function drawNetInventory() {
  let template = `${fisher.net}`
  netInventory.innerText = template
}

drawNetInventory()


function drawGunInventory() {
  let template = `${fisher.machineGun}`
  gunInventory.innerText = template
}
drawGunInventory()


function drawNukeInventory() {
  let template = `${fisher.nuke}`
  nukeInventory.innerText = template
}
drawNukeInventory()
