// ! Variables -------------------------
var recipes = [
    {
        rating: 4.7,
        reviews: 2000,
        perpTime: 15,
        cookTime: 40,
        servings: 4,
        imgUrl: "./images/beef-tacos.jpg",
        difficulty: "Easy",
        cuzien: "Mexican",
        title: "Beef Tacos",
        description:
            "Soft tacos filled with seasoned beef, vegetables, cheese, and avocado",
        ingredients: [
            "1 lb ground beef",
            "6 soft tortillas",
            "1 cup shredded lettuce",
            "1 cup shredded cheddar cheese",
            "1 ripe avocado, sliced",
            "1 tbsp taco seasoning",
        ],
        instructions: [
            "Brown ground beef in a skillet over medium-high heat and drain excess fat.",
            "Stir in taco seasoning with a splash of water and simmer for 5 minutes.",
            "Warm the soft tortillas and fill with seasoned beef, lettuce, cheese, and avocado.",
        ],
        nutrition: {
            calories: "300 kcal",
            protein: "9g",
            carbohydrates: "48g",
            fat: "10g",
            fiber: "6g",
            sodium: "700mg",
        },
        chifTips: [
            "Cut vegetables the same size.",
            "Cook on high heat.",
            "Don't overcrowd the pan",
        ],
        get isOverTime() {
            return this.perpTime > 45;
        },
    },
    {
        rating: 4.9,
        reviews: 3450,
        perpTime: 20,
        cookTime: 25,
        servings: 2,
        imgUrl: "./images/salmon-teriyaki-bowl.jpg",
        difficulty: "Medium",
        cuzien: "Japanese",
        title: "Salmon Teriyaki Bowl",
        description:
            "Glazed grilled salmon served over steamed white rice with edamame, avocado, and sesame seeds",
        ingredients: [
            "2 salmon fillets",
            "2 cups cooked white rice",
            "1/2 cup shelled edamame",
            "1/4 cup teriyaki sauce",
            "1 tbsp sesame seeds",
        ],
        instructions: [
            "Brush salmon fillets with teriyaki sauce and marinate for 15 minutes.",
            "Pan-sear salmon skin-side down for 4 minutes, flip, and glaze until cooked through.",
            "Serve over steamed rice topped with edamame, sliced avocado, and sesame seeds.",
        ],
        nutrition: {
            calories: "520 kcal",
            protein: "34g",
            carbohydrates: "54g",
            fat: "18g",
            fiber: "5g",
            sodium: "680mg",
        },
        chifTips: [
            "Pat salmon dry before searing for crispy skin.",
            "Brush extra glaze during the last minute of cooking.",
            "Let rice rest covered for 10 minutes before serving.",
        ],
        get isOverTime() {
            return this.perpTime > 45;
        },
    },
    {
        rating: 4.8,
        reviews: 4120,
        perpTime: 30,
        cookTime: 45,
        servings: 6,
        imgUrl: "./images/egyptian-koshari.jpg",
        difficulty: "Medium",
        cuzien: "Egpytion",
        title: "Egyptian Koshari",
        description:
            "Hearty layers of rice, brown lentils, and macaroni topped with spiced tomato sauce, chickpeas, and crispy onions",
        ingredients: [
            "1 cup brown lentils",
            "1 cup short-grain rice",
            "1 cup elbow macaroni",
            "1 can chickpeas, drained",
            "2 large onions, thinly sliced",
            "2 cups spiced tomato garlic sauce",
        ],
        instructions: [
            "Fry thinly sliced onions in oil until deeply golden and crispy, then drain on paper towels.",
            "Boil lentils until tender, cook rice with vermicelli, and boil macaroni separately.",
            "Layer rice, lentils, and pasta in a bowl, then top with tomato sauce, chickpeas, and crispy onions.",
        ],
        nutrition: {
            calories: "460 kcal",
            protein: "16g",
            carbohydrates: "78g",
            fat: "9g",
            fiber: "11g",
            sodium: "540mg",
        },
        chifTips: [
            "Use the onion-frying oil to cook the rice for extra flavor.",
            "Slice onions uniformly so they crisp evenly without burning.",
            "Add a dash of garlic vinegar sauce right before serving.",
        ],
        get isOverTime() {
            return this.perpTime > 45;
        },
    },
    {
        rating: 4.6,
        reviews: 1890,
        perpTime: 50,
        cookTime: 15,
        servings: 4,
        imgUrl: "./images/margherita-pizza.jpg",
        difficulty: "Medium",
        cuzien: "Italian",
        title: "Margherita Pizza",
        description:
            "Classic thin-crust pizza topped with crushed San Marzano tomatoes, fresh mozzarella, and sweet basil leaves",
        ingredients: [
            "1 pizza dough ball",
            "1/2 cup crushed tomatoes",
            "8 oz fresh mozzarella, sliced",
            "10 fresh basil leaves",
            "1 tbsp extra virgin olive oil",
        ],
        instructions: [
            "Preheat oven with a baking stone to its highest setting for at least 30 minutes.",
            "Stretch dough into a 12-inch circle and spread crushed tomatoes evenly.",
            "Top with mozzarella slices, bake for 10-12 minutes until blistered, and finish with fresh basil.",
        ],
        nutrition: {
            calories: "380 kcal",
            protein: "15g",
            carbohydrates: "46g",
            fat: "14g",
            fiber: "3g",
            sodium: "610mg",
        },
        chifTips: [
            "Drain fresh mozzarella well to prevent a soggy crust.",
            "Add fresh basil leaves after baking so they stay bright green.",
            "Let the dough come to room temperature before stretching.",
        ],
        get isOverTime() {
            return this.perpTime > 45;
        },
    },
    {
        rating: 4.9,
        reviews: 5100,
        perpTime: 25,
        cookTime: 35,
        servings: 4,
        imgUrl: "./images/butter-chicken.jpg",
        difficulty: "Medium",
        cuzien: "Indian",
        title: "Butter Chicken",
        description:
            "Tender marinated chicken simmered in a rich, velvety spiced tomato and butter cream sauce",
        ingredients: [
            "1.5 lbs boneless chicken thighs",
            "1/2 cup plain yogurt",
            "1 cup tomato puree",
            "1/2 cup heavy cream",
            "3 tbsp unsalted butter",
            "2 tsp garam masala",
        ],
        instructions: [
            "Marinate chicken pieces in yogurt, garam masala, garlic, and ginger for at least 20 minutes.",
            "Sear marinated chicken in a hot pan until lightly charred, then set aside.",
            "Simmer tomato puree with butter and spices, stir in cream and chicken, and cook for 15 minutes.",
        ],
        nutrition: {
            calories: "490 kcal",
            protein: "32g",
            carbohydrates: "14g",
            fat: "34g",
            fiber: "3g",
            sodium: "650mg",
        },
        chifTips: [
            "Use chicken thighs instead of breast for juicier results.",
            "Simmer on low heat after adding cream so the sauce stays smooth.",
            "Serve with warm garlic naan to scoop up the sauce.",
        ],
        get isOverTime() {
            return this.perpTime > 45;
        },
    },
    {
        rating: 4.8,
        reviews: 2740,
        perpTime: 48,
        cookTime: 20,
        servings: 4,
        imgUrl: "./images/chicken-shawarma.jpg",
        difficulty: "Easy",
        cuzien: "Middle Eastern",
        title: "Chicken Shawarma Wrap",
        description:
            "Spiced roasted chicken wrapped in warm flatbread with creamy garlic toum, pickles, and crispy fries",
        ingredients: [
            "1.5 lbs chicken breast, thinly sliced",
            "4 large flatbreads or pita",
            "1/2 cup garlic toum sauce",
            "1/2 cup pickled turnips and cucumbers",
            "2 tbsp shawarma spice blend",
        ],
        instructions: [
            "Toss sliced chicken with shawarma spices, lemon juice, and olive oil.",
            "Roast or pan-sear chicken on high heat until golden and crisp around the edges.",
            "Spread garlic sauce on flatbread, layer chicken and pickles, roll tightly, and toast on a grill pan.",
        ],
        nutrition: {
            calories: "440 kcal",
            protein: "35g",
            carbohydrates: "42g",
            fat: "15g",
            fiber: "4g",
            sodium: "720mg",
        },
        chifTips: [
            "Slice the chicken thinly against the grain for tenderness.",
            "Toast the assembled wrap in a dry skillet for a crisp exterior.",
            "Don't overcrowd the pan when searing the chicken.",
        ],
        get isOverTime() {
            return this.perpTime > 45;
        },
    },
];

var lastIndex = -1;
var seenIndices = [];

// ! Actions (Event Listener) -------------------------
window.addEventListener("DOMContentLoaded", function () {
    var tabButtons = document.querySelectorAll(".tab-link");
    var tabContents = document.querySelectorAll(".tab-content");

    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener("click", function () {
            var tabTarget = this.getAttribute("data-tab");

            for (var j = 0; j < tabButtons.length; j++) {
                tabButtons[j].classList.remove("active");
            }
            this.classList.add("active");

            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.add("d-none");
            }

            var activeTab = document.getElementById(`${tabTarget}-tab`);
            if (activeTab) {
                activeTab.classList.remove("d-none");
            }
        });
    }

    var tryAnotherBtn = document.getElementById("try-another-btn");
    if (tryAnotherBtn) {
        tryAnotherBtn.addEventListener("click", getRandomRecipe);
    }

    getRandomRecipe();
});

// ! Functions -------------------------
function generateRandomIndex() {
    return Math.floor(Math.random() * recipes.length);
}

function getUniqueRandomIndex() {
    if (recipes.length <= 1) return 0;
    var newIndex = generateRandomIndex();
    while (newIndex === lastIndex) {
        newIndex = generateRandomIndex();
    }
    return newIndex;
}

function getRandomRecipeIndex() {
    if (recipes.length <= 1) return 0;
    if (seenIndices.length >= recipes.length) {
        seenIndices = [];
    }

    var newIndex = generateRandomIndex();
    while (seenIndices.indexOf(newIndex) !== -1 || newIndex === lastIndex) {
        newIndex = generateRandomIndex();
    }

    seenIndices.push(newIndex);
    lastIndex = newIndex;

    return newIndex;
}

function updateRecipeHeader(recipe) {
    document.getElementById("recipe-name").textContent = recipe.title;
    document.getElementById("recipe-description").textContent = recipe.description;
    document.getElementById("rating-average").textContent = recipe.rating;
    document.getElementById("rating-quantity").textContent = `(${recipe.reviews.toLocaleString()} reviews)`;
}

function updateRecipeImage(recipe) {
    var imgElement = document.getElementById("recipe-image");
    if (imgElement && recipe.imgUrl) {
        imgElement.src = recipe.imgUrl;
        imgElement.alt = recipe.title;
    }
}

function updateRecipeStats(recipe) {
    document.getElementById("prep-time-display").textContent = `${recipe.perpTime} min`;
    document.getElementById("cook-time-display").textContent = `${recipe.cookTime} min`;
    document.getElementById("servings-display").textContent = `${recipe.servings} people`;
    document.getElementById("difficulty-badge").textContent = recipe.difficulty;
    document.getElementById("category-badge").textContent = recipe.cuzien;
}

function updatePreparationWarning(recipe) {
    var warningEl = document.getElementById("time-warning");
    var tryAnotherWrapper = document.getElementById("try-another-wrapper");

    if (recipe.isOverTime) {
        if (warningEl) warningEl.classList.remove("d-none");
        if (tryAnotherWrapper) tryAnotherWrapper.classList.add("d-none");
    } else {
        if (warningEl) warningEl.classList.add("d-none");
        if (tryAnotherWrapper) tryAnotherWrapper.classList.remove("d-none");
    }
}

function renderIngredients(ingredients) {
    var list = document.getElementById("ingredients-list");
    if (!list) return;

    var content = "";
    for (var i = 0; i < ingredients.length; i++) {
        content += `
      <li class="d-flex align-items-start">
        <span class="num-circle me-3">${i + 1}</span>
        <span class="text-dark small pt-1">${ingredients[i]}</span>
      </li>
    `;
    }
    list.innerHTML = content;
}

function renderInstructions(instructions) {
    var list = document.getElementById("instructions-list");
    if (!list) return;

    var content = "";
    for (var i = 0; i < instructions.length; i++) {
        content += `
      <div class="d-flex align-items-start">
        <div class="step-box-num me-3">${i + 1}</div>
        <div class="flex-grow-1 pt-2">
          <p class="text-dark mb-0 small">${instructions[i]}</p>
        </div>
      </div>
    `;
    }
    list.innerHTML = content;
}

function renderNutrition(nutrition) {
    if (!nutrition) return;
    document.getElementById("calories-value").textContent = nutrition.calories || "";
    document.getElementById("protein-value").textContent = nutrition.protein || "";
    document.getElementById("carbs-value").textContent = nutrition.carbohydrates || "";
    document.getElementById("fat-value").textContent = nutrition.fat || "";
    document.getElementById("fiber-value").textContent = nutrition.fiber || "";
    document.getElementById("sodium-value").textContent = nutrition.sodium || "";
}

function renderChefTips(tips) {
    var list = document.getElementById("tips-list");
    if (!list) return;

    var content = "";
    for (var i = 0; i < tips.length; i++) {
        content += `
      <div class="tip-item-card p-3 d-flex align-items-start">
        <i class="fa-solid fa-circle-check text-warning fs-5 me-3 mt-1 flex-shrink-0"></i>
        <p class="text-dark mb-0 small">${tips[i]}</p>
      </div>
    `;
    }
    list.innerHTML = content;
}

function displayRecipe(recipe) {
    if (!recipe) return;

    updateRecipeHeader(recipe);
    updateRecipeImage(recipe);
    updateRecipeStats(recipe);
    updatePreparationWarning(recipe);
    renderIngredients(recipe.ingredients);
    renderInstructions(recipe.instructions);
    renderNutrition(recipe.nutrition);
    renderChefTips(recipe.chifTips);

    var section = document.getElementById("recipe-display-section");
    if (section) {
        section.classList.remove("d-none");
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function getRandomRecipe() {
    var index = getRandomRecipeIndex();
    displayRecipe(recipes[index]);
}
