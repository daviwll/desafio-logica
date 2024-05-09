let hero = {
    nome: "hero_name",
    xp: 5000
}

const frase = ["O Herói de nome ", " está no nível de "]

if(hero.xp <= 1000) console.log(frase[0] + hero.nome + frase[1] + "Ferro")

else if(hero.xp <= 2000) console.log(frase[0] + hero.nome + frase[1] + "Bronze")

else if(hero.xp <= 5000) console.log(frase[0] + hero.nome + frase[1] + "Prata") 

else if(hero.xp <= 7000) console.log(frase[0] + hero.nome + frase[1] + "Ouro")

else if(hero.xp <= 8000) console.log(frase[0] + hero.nome + frase[1] + "Platina")

else if(hero.xp <= 9000) console.log(frase[0] + hero.nome + frase[1] + "Ascendente")

else if(hero.xp <= 10000) console.log(frase[0] + hero.nome + frase[1] + "Imortal")

else console.log(frase[0] + hero.nome + frase[1] + "Radiante")