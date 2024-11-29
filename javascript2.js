let characterDetails = {
  Tom: {
    description: "Tom is a clever cat who is always trying to catch Jerry but rarely succeeds.Thomas 'Tom' Jasper Cat, commonly referred to as Tom Cat, or more simply referred to as Tom, and originally known as Jasper is one of the two anti-heroic protagonists in Tom and Jerry, alongside Jerry Mouse, created by William Hanna and Joseph Barbera.",
  },
  Jerry: {
    description: "Jerry is a resourceful mouse who constantly outsmarts Tom.Jerry is usually described as an excited, carefree, clever, beautiful and cute mouse, he in several episodes is shown to be cold as he seeks to have fun no matter who he harms, which to Tom's anger his sense of fun is sadistic.",
  },
  Spike: {
    description: "Spike is a protective bulldog who often comes to Jerry's aid. Spike[1] (who goes by different names in a few episodes - Killer for four episodes, Butch for two episodes, and Bulldog for one) is portrayed as an English Bulldog, who is generally amiable and friendly, and a loving father to his son Tyke in several episodes. However, Spike's character also has a very stern and fierce side for occasions, such as when he is defending his son Tyke.",
  },
  Tyke: {
  	description: "Tyke is a sweet, happy and innocent puppy, who doesn't speak for most of the earlier installments. Spike and Tyke's characters, provide a model of father and son behavior, with Spike spending much of his free time taking Tyke on father-son outings, teaching him the facts of life for dogs and guarding him diligently when they are sleeping.",
  },
  Toodles: {
  	description: "Toodles is first of many girl cats that Tom falls for over the course of Tom and Jerry. She does not speak and rarely moves about. She is white colored and usually wears a neck ribbon and is known to be a very beautiful cat.",
  },
  Quaker: {
  	description: "In many episodes, he is the only one who speaks. He's very trusting, even trusting Tom in many situations in which Tom wishes to eat him. He's a friend of Jerry, but unlike Jerry harbors no hard feelings towards Tom. ",
  },
  Tuffy: {
  	description: "In his normal appearances, Tuffy is typically hungry and has the ability to eat huge amounts of food in one sitting. He often angers Tom and Jerry when he eats a table full of food or steals theirs just as they're about to bite in.",
  },
};
let modal = document.getElementById("modal");
let modalName = document.getElementById("character-name");
let modalDescription = document.getElementById("character-description");
let closeModal = document.getElementById("close-modal");

function showDetails(name) {
  const modal = document.getElementById("modal");
  const modalName = document.getElementById("character-name");
  const modalDescription = document.getElementById("character-description");
  modalName.textContent = name;
  modalDescription.textContent = characterDetails[name].description;
  modal.classList.remove("hidden");
  modal.style.display = 'flex';
}
closeModal.onclick = function () {
	  const modal = document.getElementById('modal');
  	modal.classList.add("hidden");
	  modal.style.display = 'none';
};

window.onload = function() {
    document.getElementById('rules').style.display = 'block';
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
    console.log("Background color found in localStorage:", savedColor);  
    document.body.style.backgroundColor = savedColor;
    } 
    else {
    	console.log("No background color found in localStorage."); 
    }
};

const backToTopButton = document.getElementById("backToTop");


window.onscroll = function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopButton.style.display = "block"; 
  } else {
    backToTopButton.style.display = "none"; 
  }
};


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}