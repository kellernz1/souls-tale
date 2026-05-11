const itemsData = {
    darksign: {
        title: "Darksign",
        img: "assets/items/darksign.webp",
        lore: [
            "The Darksign signifies an accursed Undead.",
            "Those branded with it are reborn after death...",
            "But will one day lose their mind and go Hollow."
        ]
    },
    moonlight: {
        title: "Moonlight Greatsword",
        img: "assets/items/moonlight.webp",
        lore: [
            "A legendary blade synonymous with Seath the Scaleless.",
            "It reflects the very essence of moonlight.",
            "A true mentor that has guided many through the fog."
        ]
    },
    rivers_of_blood: {
        title: "Rivers of Blood",
        img: "assets/items/rivers_of_blood.png",
        lore: [
            "Weapon of Okina, swordsman from the Land of Reeds.",
            "A cursed blade that has felled countless men.",
            "When Okina first felt the thirst of the blood-stained steel, he knew his fate was sealed."
        ]
    },
    uchigatana: {
        title: "Uchigatana",
        img: "assets/items/uchigatana.webp",
        lore: [
            "A katana forged in a distant land.",
            "Known for its sharp edge and ability to cause bleeding.",
            "A weapon requiring great dexterity, favored by those who strike with precision."
        ]
    },
    bloodhound_fang: {
        title: "Bloodhound's Fang",
        img: "assets/items/bloodhound_fang.webp",
        lore: [
            "Curved greatsword with a gently undulating blade wielded by Bloodhound Knights.",
            "A fearsome blade capable of brutal airborne attacks."
        ]
    },
    black_knight_greatsword: {
        title: "Black Knight Greatsword",
        img: "assets/items/black_knight_greatsword.webp",
        lore: [
            "Greatsword of the black knights who wander Lordran. Used to face chaos demons.",
            "The large motion that puts the weight of the body into the attack reflects the great size of their adversaries long ago."
        ]
    },
    sword_of_the_night: {
        title: "Sword of the Night",
        img: "assets/items/sword_of_the_night.webp",
        lore: [
            "Sword of an all-consuming, bottomless black that devours even the light that shines upon it. Wielded by Jolán, Swordhand of Night.",
            "The blade of the sword is only semicorporeal, and thus cannot be guarded against completely."
        ]
    },
    nagakiba: {
        title: "Nagakiba",
        img: "assets/items/nagakiba.png",
        lore: [
            "Katana with a ferociously long blade.",
            "Signature weapon of Yura, hunter of Bloody Fingers.",
            "Reminiscent of a reinforced spear, its imposing length can be put to good use with powerful thrusting attacks."
        ]
    },
    meteoric_ore_blade: {
        title: "Meteoric Ore Blade",
        img: "assets/items/meteoric_ore_blade.webp",
        lore: [
            "Katana forged from meteoric ore to dispatch lifeforms born of falling stars.",
            "The blade is weighty, known to deliver slashes of such ferocity that the impact is said to resemble the crash of a falling meteor."
        ]
    },
    hand_of_malenia: {
        title: "Hand of Malenia",
        img: "assets/items/hand_of_malenia.webp",
        lore: [
            "Blade built into Malenia's prosthetic arm. Through consecration it is resistant to rot.",
            "Malenia's war prosthesis symbolized her victories.",
            "Some claim to have seen wings when the weapon was raised aloft; wings of fierce determination that have never known defeat."
        ]
    },
    dragonscale_blade: {
        title: "Dragonscale Blade",
        img: "assets/items/dragonscale_blade.webp",
        lore: [
            "A weapon made by sharpening a Gravel Stone scale,",
            "thought to be the source of ancient dragon immortality,",
            "into an unclouded blade.",
            "Alas, the Dragonkin Soldiers never attained immortality,",
            "and perished as decrepit, pale imitations of their skyborn kin."
        ]
    },
    moonveil: {
        title: "Moonveil",
        img: "assets/items/moonveil.webp",
        lore: [
            "Katana forged of glintstone.",
            "Masterpiece of a Sellian swordsmith.",
            "Light enwreathes the blade when sheathed, explaining its Moonveil moniker."
        ]
    },
    axe_of_godfrey: {
        title: "Axe of Godfrey",
        img: "assets/items/axe_of_godfrey.webp",
        lore: [
            "Weapon of Godfrey, Elden Lord. It was broken in a battle fought as leader of the Tarnished during the Long March.",
            "This weapon is symbolic of Godfrey's vow to conduct himself as a lord, later becoming an emblem of the golden lineage.",
            "In the days of the past, a crown was warranted with strength."
        ]
    },
    antspur_rapier: {
        title: "Antspur Rapier",
        img: "assets/items/antspur_rapier.webp",
        lore: [
            "Spur of a giant ant which has been fashioned into a rapier. The blade drips with scarlet rot.",
            "Scarlet rot is an old legend, of which Maleigh Marais of the Shaded Castle was a private believer. And indeed, he eventually found his own personal goddess."
        ]
    },
    spear_of_the_impaler: {
        title: "Spear of the Impaler",
        img: "assets/items/spear_of_the_impaler.webp",
        lore: [
            "Weapon of Messmer the Impaler.",
            "A greatspear with a warped blade in the shape of undulating flame.",
            "Remade by the forging arts of the realm of shadow, this weapon can be thrown by executing a strong attack, dashing strong attack, or mounted strong attack."
        ]
    },
    mohgwyns_sacred_spear: {
        title: "Mohgwyn's Sacred Spear",
        img: "assets/items/mohgwyns_sacred_spear.webp",
        lore: [
            "Trident of Mohg, Lord of Blood. A sacred spear that will come to symbolize his dynasty.",
            "As well as serving as a weapon, it is an instrument of communion with an outer god who bestows power upon accursed blood.",
            "The mother of truth desires a wound."
        ]
    },
    dragonhunter_great_katana: {
        title: "Dragon-Hunter Great Katana",
        img: "assets/items/dragon-hunters_great_katana.webp",
        lore: [
            "Great katana with spines of gravel stone along its blade, wielded by the Ancient Dragon-Man of the Dragon's Pit.",
            "Formerly a Dragon Communion warrior, the Ancient Dragon-Man was once arbiter of those worthy to devour the Dreaded One."
        ]
    }
};

// Áudios
const bonfireSnd = new Audio('assets/audio/bonfire.mp3');
bonfireSnd.loop = true;
const discoverySnd = new Audio('assets/audio/discovery.mp3');
const deathSnd = new Audio('assets/audio/darksouls-death.mp3');

// Iniciar Experiência
document.getElementById('start-btn').addEventListener('click', () => {
    const entryOverlay = document.getElementById('entry-overlay');
    entryOverlay.classList.add('fade-out');
    document.getElementById('main-content').classList.remove('hidden');

    setTimeout(() => {
        entryOverlay.classList.add('hidden');
    }, 2000);
});

// Abrir Item
document.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', () => {
        const itemId = card.getAttribute('data-item');
        
        if(itemId === 'forbidden') {
            triggerDeath();
            return;
        }

        showLore(itemsData[itemId]);
    });
});

function showLore(item) {
    const overlay = document.getElementById('lore-overlay');
    const container = document.getElementById('lore-text-container');
    
    document.getElementById('lore-img').src = item.img;
    document.getElementById('lore-title').innerText = item.title;
    container.innerHTML = '';
    
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('active'), 50);

    // Tocar Áudio
    discoverySnd.play().catch(e => console.log("Áudio pendente"));
    bonfireSnd.volume = 0;
    bonfireSnd.play().catch(e => console.log("Áudio pendente"));
    fadeInAudio(bonfireSnd, 0.3);

    // Efeito de texto
    item.lore.forEach((text, index) => {
        const p = document.createElement('p');
        p.className = 'lore-sentence';
        p.innerText = text;
        container.appendChild(p);
        
        setTimeout(() => {
            p.classList.add('visible');
        }, (index + 1) * 1500);
    });
}

function triggerDeath() {
    const screen = document.getElementById('death-screen');
    screen.classList.remove('hidden');
    deathSnd.play().catch(e => console.log("Áudio pendente"));
    
    setTimeout(() => {
        location.reload(); 
    }, 6000);
}

function fadeInAudio(audio, targetVolume) {
    let vol = 0;
    const interval = setInterval(() => {
        if (vol < targetVolume) {
            vol += 0.02;
            audio.volume = vol.toFixed(2);
        } else {
            clearInterval(interval);
        }
    }, 100);
}

document.getElementById('close-btn').addEventListener('click', () => {
    const overlay = document.getElementById('lore-overlay');
    overlay.classList.remove('active');
    
    setTimeout(() => overlay.classList.add('hidden'), 1000);
    
    let vol = bonfireSnd.volume;
    const interval = setInterval(() => {
        if (vol > 0.05) {
            vol -= 0.05;
            bonfireSnd.volume = vol.toFixed(2);
        } else {
            bonfireSnd.pause();
            clearInterval(interval);
        }
    }, 100);
});

