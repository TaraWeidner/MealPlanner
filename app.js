const recipeSources = [
  { name: "Allrecipes", domain: "allrecipes.com", tags: ["general", "family"] },
  { name: "Food Network", domain: "foodnetwork.com", tags: ["general", "family"] },
  { name: "BBC Good Food", domain: "bbcgoodfood.com", tags: ["general", "healthy", "budget"] },
  { name: "Serious Eats", domain: "seriouseats.com", tags: ["general", "technique", "asian"] },
  { name: "Budget Bytes", domain: "budgetbytes.com", tags: ["budget", "easy", "family"] },
  { name: "Simply Recipes", domain: "simplyrecipes.com", tags: ["general", "easy", "family"] },
  { name: "EatingWell", domain: "eatingwell.com", tags: ["healthy", "general"] },
  { name: "Taste of Home", domain: "tasteofhome.com", tags: ["family", "comfort", "general"] },
  { name: "Bon Appétit", domain: "bonappetit.com", tags: ["general", "technique"] },
  { name: "Epicurious", domain: "epicurious.com", tags: ["general", "technique"] },
  { name: "Food & Wine", domain: "foodandwine.com", tags: ["general", "technique"] },
  { name: "Southern Living", domain: "southernliving.com", tags: ["southern", "comfort", "family"] },
  { name: "Delish", domain: "delish.com", tags: ["easy", "family", "general"] },
  { name: "The Kitchn", domain: "thekitchn.com", tags: ["easy", "general", "family"] },
  { name: "NYT Cooking", domain: "cooking.nytimes.com", tags: ["general", "technique"] },
  { name: "Martha Stewart", domain: "marthastewart.com", tags: ["general", "family"] },
  { name: "Good Housekeeping", domain: "goodhousekeeping.com", tags: ["family", "easy", "general"] },
  { name: "Real Simple", domain: "realsimple.com", tags: ["easy", "general"] },
  { name: "Better Homes & Gardens", domain: "bhg.com", tags: ["family", "general"] },
  { name: "MyRecipes", domain: "myrecipes.com", tags: ["general", "family"] },
  { name: "Tasty", domain: "tasty.co", tags: ["easy", "general"] },
  { name: "Yummly", domain: "yummly.com", tags: ["general"] },
  { name: "RecipeTin Eats", domain: "recipetineats.com", tags: ["easy", "family", "asian", "general"] },
  { name: "Spend With Pennies", domain: "spendwithpennies.com", tags: ["budget", "family", "comfort"] },
  { name: "Damn Delicious", domain: "damndelicious.net", tags: ["easy", "family", "general"] },
  { name: "Gimme Some Oven", domain: "gimmesomeoven.com", tags: ["easy", "general"] },
  { name: "Pinch of Yum", domain: "pinchofyum.com", tags: ["easy", "healthy", "general"] },
  { name: "Once Upon a Chef", domain: "onceuponachef.com", tags: ["family", "general", "technique"] },
  { name: "Love & Lemons", domain: "loveandlemons.com", tags: ["vegetarian", "healthy", "general"] },
  { name: "Cookie and Kate", domain: "cookieandkate.com", tags: ["vegetarian", "healthy"] },
  { name: "Minimalist Baker", domain: "minimalistbaker.com", tags: ["vegetarian", "vegan", "easy"] },
  { name: "Skinnytaste", domain: "skinnytaste.com", tags: ["healthy", "family", "easy"] },
  { name: "Ambitious Kitchen", domain: "ambitiouskitchen.com", tags: ["healthy", "family", "general"] },
  { name: "Half Baked Harvest", domain: "halfbakedharvest.com", tags: ["comfort", "general"] },
  { name: "Smitten Kitchen", domain: "smittenkitchen.com", tags: ["general", "vegetarian"] },
  { name: "Feasting at Home", domain: "feastingathome.com", tags: ["healthy", "vegetarian", "international"] },
  { name: "A Couple Cooks", domain: "acouplecooks.com", tags: ["healthy", "vegetarian", "easy"] },
  { name: "The Pioneer Woman", domain: "thepioneerwoman.com", tags: ["comfort", "family"] },
  { name: "Natasha's Kitchen", domain: "natashaskitchen.com", tags: ["family", "easy", "general"] },
  { name: "Downshiftology", domain: "downshiftology.com", tags: ["healthy", "gluten-free", "easy"] },
  { name: "Well Plated", domain: "wellplated.com", tags: ["healthy", "family", "easy"] },
  { name: "The Mediterranean Dish", domain: "themediterraneandish.com", tags: ["mediterranean", "healthy"] },
  { name: "The Modern Proper", domain: "themodernproper.com", tags: ["family", "easy", "general"] },
  { name: "101 Cookbooks", domain: "101cookbooks.com", tags: ["vegetarian", "healthy"] },
  { name: "The Spruce Eats", domain: "thespruceeats.com", tags: ["general", "international"] },
  { name: "America's Test Kitchen", domain: "americastestkitchen.com", tags: ["technique", "general"] },
  { name: "Cook's Country", domain: "cookscountry.com", tags: ["family", "comfort", "technique"] },
  { name: "Cook's Illustrated", domain: "cooksillustrated.com", tags: ["technique", "general"] },
  { name: "Just One Cookbook", domain: "justonecookbook.com", tags: ["japanese", "asian"] },
  { name: "Maangchi", domain: "maangchi.com", tags: ["korean", "asian"] },
  { name: "The Woks of Life", domain: "thewoksoflife.com", tags: ["chinese", "asian"] },
  { name: "Swasthi's Recipes", domain: "indianhealthyrecipes.com", tags: ["indian", "healthy", "international"] },
  { name: "Dassana's Veg Recipes", domain: "vegrecipesofindia.com", tags: ["indian", "vegetarian", "international"] },
  { name: "Mexico in My Kitchen", domain: "mexicoinmykitchen.com", tags: ["mexican", "international"] },
  { name: "Isabel Eats", domain: "isabeleats.com", tags: ["mexican", "easy"] },
  { name: "Mexican Please", domain: "mexicanplease.com", tags: ["mexican"] },
  { name: "Immaculate Bites", domain: "africanbites.com", tags: ["african", "caribbean", "international"] },
  { name: "Rainbow Plant Life", domain: "rainbowplantlife.com", tags: ["vegan", "vegetarian"] },
  { name: "Oh She Glows", domain: "ohsheglows.com", tags: ["vegan", "vegetarian"] },
  { name: "Forks Over Knives", domain: "forksoverknives.com", tags: ["vegan", "vegetarian", "healthy"] },
  { name: "Vegan Richa", domain: "veganricha.com", tags: ["vegan", "indian", "vegetarian"] },
  { name: "Nora Cooks", domain: "noracooks.com", tags: ["vegan", "vegetarian", "easy"] },
  { name: "Pick Up Limes", domain: "pickuplimes.com", tags: ["vegan", "healthy", "vegetarian"] },
  { name: "Wholesome Yum", domain: "wholesomeyum.com", tags: ["low-carb", "gluten-free"] },
  { name: "Nom Nom Paleo", domain: "nomnompaleo.com", tags: ["paleo", "gluten-free"] },
  { name: "The Defined Dish", domain: "thedefineddish.com", tags: ["healthy", "gluten-free"] },
  { name: "Cafe Delites", domain: "cafedelites.com", tags: ["easy", "family", "comfort"] },
  { name: "Salt & Lavender", domain: "saltandlavender.com", tags: ["easy", "comfort", "family"] },
  { name: "Jo Cooks", domain: "jocooks.com", tags: ["easy", "family", "international"] },
  { name: "Dinner at the Zoo", domain: "dinneratthezoo.com", tags: ["family", "easy"] },
  { name: "The Recipe Critic", domain: "therecipecritic.com", tags: ["family", "easy", "comfort"] },
  { name: "The Chunky Chef", domain: "thechunkychef.com", tags: ["family", "comfort", "easy"] },
  { name: "Dinner Then Dessert", domain: "dinnerthendessert.com", tags: ["family", "comfort"] },
  { name: "Two Peas & Their Pod", domain: "twopeasandtheirpod.com", tags: ["family", "vegetarian", "easy"] },
  { name: "Mel's Kitchen Cafe", domain: "melskitchencafe.com", tags: ["family", "easy"] },
  { name: "I Heart Naptime", domain: "iheartnaptime.net", tags: ["family", "easy"] },
  { name: "Creme de la Crumb", domain: "lecremedelacrumb.com", tags: ["family", "easy"] },
  { name: "Plain Chicken", domain: "plainchicken.com", tags: ["family", "easy", "comfort"] },
  { name: "King Arthur Baking", domain: "kingarthurbaking.com", tags: ["baking", "bread"] },
  { name: "Sally's Baking Addiction", domain: "sallysbakingaddiction.com", tags: ["baking"] },
  { name: "Preppy Kitchen", domain: "preppykitchen.com", tags: ["baking", "general"] }
];

const meals = [
  {
    name: "Chicken & Broccoli Rice Bowls",
    description: "Savory chicken, rice, and broccoli with a quick soy-garlic finish.",
    ingredients: ["chicken", "rice", "broccoli", "soy sauce", "garlic"],
    optional: ["sesame oil", "green onion", "sriracha", "ginger"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["asian", "easy", "family"],
    steps: ["Cook the rice.", "Brown bite-size chicken pieces in a skillet.", "Add broccoli with a splash of water and cover until tender-crisp.", "Stir in soy sauce, garlic, and any optional seasonings. Serve over rice."]
  },
  {
    name: "Cheesy Chicken Quesadillas",
    description: "Crisp tortillas filled with chicken and melted cheese.",
    ingredients: ["tortillas", "chicken", "cheese"],
    optional: ["onion", "bell pepper", "salsa", "sour cream", "avocado"],
    time: 20, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["mexican", "family", "easy"],
    steps: ["Add chicken and cheese to half of each tortilla.", "Fold and cook in a lightly greased skillet until golden on both sides.", "Slice and serve with salsa or any toppings you have."]
  },
  {
    name: "Black Bean Tacos",
    description: "Fast pantry tacos with seasoned black beans and flexible toppings.",
    ingredients: ["tortillas", "black beans"],
    optional: ["cheese", "avocado", "lettuce", "tomato", "salsa", "onion", "corn"],
    time: 15, method: "stovetop", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["mexican", "vegetarian", "budget", "easy"],
    steps: ["Warm black beans with taco seasoning, cumin, or chili powder.", "Warm tortillas.", "Fill with beans and add whatever toppings you have."]
  },
  {
    name: "Egg Fried Rice",
    description: "One of the easiest ways to turn leftover rice and random vegetables into dinner.",
    ingredients: ["rice", "eggs", "soy sauce"],
    optional: ["peas", "carrots", "onion", "green onion", "chicken", "pork", "sesame oil"],
    time: 20, method: "stovetop", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["asian", "budget", "easy"],
    steps: ["Scramble eggs in a large skillet and set aside.", "Cook any vegetables until tender.", "Add cold cooked rice and stir-fry until hot.", "Return eggs to the pan and season with soy sauce."]
  },
  {
    name: "Sheet-Pan Chicken & Vegetables",
    description: "Minimal cleanup: roast chicken and whatever vegetables need to be used up.",
    ingredients: ["chicken", "vegetables", "olive oil"],
    optional: ["potatoes", "broccoli", "carrots", "onion", "garlic", "lemon"],
    time: 45, method: "oven", vegetarian: false, glutenFree: true, effort: "easy",
    tags: ["healthy", "easy", "family", "gluten-free"],
    steps: ["Heat oven to 425°F.", "Cut chicken and vegetables into similar-size pieces.", "Toss with oil, salt, pepper, and your favorite seasoning.", "Roast until the chicken is cooked through and vegetables are browned."]
  },
  {
    name: "Baked Pasta",
    description: "Comfort-food pasta baked with tomato sauce and plenty of cheese.",
    ingredients: ["pasta", "tomato sauce", "cheese"],
    optional: ["ground beef", "sausage", "spinach", "onion", "garlic"],
    time: 45, method: "oven", vegetarian: true, glutenFree: false, effort: "medium",
    tags: ["italian", "comfort", "family"],
    steps: ["Boil pasta until just shy of done.", "Mix with tomato sauce and half the cheese.", "Transfer to a baking dish, top with remaining cheese, and bake at 375°F until bubbly."]
  },
  {
    name: "Creamy Tomato Pasta",
    description: "A quick pantry pasta with tomato sauce mellowed by cream, cream cheese, or parmesan.",
    ingredients: ["pasta", "tomato sauce"],
    optional: ["cream", "cream cheese", "parmesan", "garlic", "spinach"],
    time: 25, method: "stovetop", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["italian", "vegetarian", "easy", "comfort"],
    steps: ["Cook pasta.", "Warm tomato sauce in a skillet and stir in any creamy ingredient you have.", "Add garlic or spinach if desired.", "Toss with pasta and serve."]
  },
  {
    name: "Breakfast-for-Dinner Scramble",
    description: "Eggs plus potatoes, cheese, vegetables, or leftover meat—whatever needs using.",
    ingredients: ["eggs"],
    optional: ["potatoes", "cheese", "ham", "bacon", "spinach", "onion", "bell pepper"],
    time: 25, method: "stovetop", vegetarian: true, glutenFree: true, effort: "easy",
    tags: ["budget", "easy", "gluten-free", "family"],
    steps: ["Cook diced potatoes first if using.", "Add vegetables or meat and heat through.", "Pour in beaten eggs and scramble.", "Top with cheese if you have it."]
  },
  {
    name: "Loaded Baked Potatoes",
    description: "An easy choose-your-own-adventure dinner built around potatoes.",
    ingredients: ["potatoes"],
    optional: ["cheese", "broccoli", "bacon", "sour cream", "chili", "green onion", "black beans"],
    time: 60, method: "oven", vegetarian: true, glutenFree: true, effort: "easy",
    tags: ["budget", "comfort", "family", "gluten-free"],
    steps: ["Bake potatoes at 425°F until tender.", "Split open and fluff the centers.", "Top with whatever you have: cheese, broccoli, chili, beans, bacon, sour cream, or leftovers."]
  },
  {
    name: "Air-Fryer Chicken Tenders",
    description: "Quick crispy chicken strips without deep frying.",
    ingredients: ["chicken", "breadcrumbs"],
    optional: ["parmesan", "eggs", "flour", "hot sauce"],
    time: 25, method: "air fryer", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["family", "easy"],
    steps: ["Cut chicken into strips.", "Coat with egg and seasoned breadcrumbs.", "Air fry around 400°F until crisp and cooked through, flipping once."]
  },
  {
    name: "Slow-Cooker Salsa Chicken",
    description: "Dump-and-go shredded chicken for tacos, bowls, nachos, or baked potatoes.",
    ingredients: ["chicken", "salsa"],
    optional: ["black beans", "corn", "cream cheese", "tortillas", "rice"],
    time: 240, method: "slow cooker", vegetarian: false, glutenFree: true, effort: "easy",
    tags: ["mexican", "easy", "family", "gluten-free"],
    steps: ["Put chicken and salsa in the slow cooker.", "Cook on low 4–6 hours or high 2–3 hours.", "Shred and mix back into the sauce.", "Serve in tacos, bowls, or over potatoes."]
  },
  {
    name: "Chickpea Salad Wraps",
    description: "A fast no-cook filling made from chickpeas, mayo, and crunchy vegetables.",
    ingredients: ["chickpeas", "mayo"],
    optional: ["celery", "onion", "pickles", "lettuce", "tortillas", "bread"],
    time: 10, method: "no cook", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["vegetarian", "budget", "easy"],
    steps: ["Mash chickpeas with mayo.", "Stir in chopped celery, onion, pickles, or herbs.", "Season and serve in wraps, sandwiches, or lettuce cups."]
  },
  {
    name: "Ground Beef Taco Bowls",
    description: "Seasoned beef, rice, beans, and flexible toppings served bowl-style.",
    ingredients: ["ground beef", "rice"],
    optional: ["black beans", "corn", "cheese", "salsa", "avocado", "lettuce"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: true, effort: "easy",
    tags: ["mexican", "family", "easy", "gluten-free"],
    steps: ["Cook rice.", "Brown ground beef and season with taco seasoning.", "Build bowls with beef, rice, and any toppings you have."]
  },
  {
    name: "Grilled Cheese & Tomato Soup",
    description: "Classic comfort dinner that takes almost no brainpower.",
    ingredients: ["bread", "cheese", "tomato soup"],
    optional: ["butter", "ham", "tomato"],
    time: 15, method: "stovetop", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["comfort", "family", "easy", "budget"],
    steps: ["Warm tomato soup.", "Butter bread, add cheese, and grill sandwiches in a skillet until crisp and melted.", "Serve together."]
  },
  {
    name: "Pesto Chicken Pasta",
    description: "Chicken and pasta tossed with pesto for a fast weeknight dinner.",
    ingredients: ["chicken", "pasta", "pesto"],
    optional: ["parmesan", "spinach", "tomato"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["italian", "easy", "family"],
    steps: ["Cook pasta.", "Sauté chicken until cooked through.", "Toss pasta and chicken with pesto.", "Add parmesan, spinach, or tomatoes if available."]
  },
  {
    name: "Veggie Stir-Fry",
    description: "Use up nearly any vegetables in the fridge with a quick savory sauce.",
    ingredients: ["vegetables", "soy sauce"],
    optional: ["rice", "noodles", "tofu", "garlic", "ginger"],
    time: 25, method: "stovetop", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["asian", "vegetarian", "healthy", "easy"],
    steps: ["Cut vegetables into bite-size pieces.", "Stir-fry firm vegetables first, then softer ones.", "Add soy sauce, garlic, or ginger.", "Serve over rice or noodles if available."]
  },
  {
    name: "Chicken Fajitas",
    description: "Sizzling chicken, peppers, and onions with tortillas and your favorite toppings.",
    ingredients: ["chicken", "bell pepper", "onion", "tortillas"],
    optional: ["lime", "salsa", "cheese", "sour cream", "avocado"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["mexican", "family", "easy"],
    steps: ["Slice chicken, peppers, and onion.", "Cook chicken with fajita seasoning until nearly done.", "Add vegetables and sauté until tender-crisp.", "Serve with warmed tortillas and toppings."]
  },
  {
    name: "Chicken Parmesan",
    description: "Crispy chicken topped with tomato sauce and melted cheese.",
    ingredients: ["chicken", "breadcrumbs", "tomato sauce", "cheese"],
    optional: ["parmesan", "pasta", "basil"],
    time: 45, method: "oven", vegetarian: false, glutenFree: false, effort: "medium",
    tags: ["italian", "comfort", "family"],
    steps: ["Bread chicken cutlets and brown or bake until nearly cooked.", "Top with tomato sauce and cheese.", "Bake until the cheese melts and chicken is cooked through.", "Serve with pasta or vegetables."]
  },
  {
    name: "One-Pot Chili",
    description: "A flexible, hearty pot of beans, tomatoes, and ground meat—or make it meatless.",
    ingredients: ["beans", "canned tomatoes"],
    optional: ["ground beef", "onion", "bell pepper", "corn", "cheese", "sour cream"],
    time: 45, method: "stovetop", vegetarian: true, glutenFree: true, effort: "easy",
    tags: ["comfort", "budget", "family", "gluten-free"],
    steps: ["Brown meat first if using, then sauté onion or peppers.", "Add beans, tomatoes, chili powder, cumin, and a splash of water or broth.", "Simmer until thickened.", "Add toppings at the table."]
  },
  {
    name: "Chicken Noodle Soup",
    description: "Classic soup built from chicken, broth, noodles, and whatever vegetables you have.",
    ingredients: ["chicken", "broth", "noodles"],
    optional: ["carrots", "celery", "onion", "garlic", "parsley"],
    time: 45, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["comfort", "family", "easy"],
    steps: ["Sauté onion, carrots, or celery if using.", "Add broth and chicken and simmer until cooked.", "Shred chicken, return it to the pot, and add noodles.", "Cook until noodles are tender and season to taste."]
  },
  {
    name: "Tuna Melts",
    description: "Pantry-friendly tuna salad and melted cheese on toasted bread.",
    ingredients: ["tuna", "mayo", "bread", "cheese"],
    optional: ["celery", "onion", "pickles", "tomato"],
    time: 15, method: "oven", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["budget", "family", "easy"],
    steps: ["Mix tuna with mayo and any crunchy add-ins.", "Pile on bread and top with cheese.", "Broil or bake until hot and bubbly."]
  },
  {
    name: "Salmon Rice Bowls",
    description: "Salmon over rice with crisp vegetables and a quick savory-spicy sauce.",
    ingredients: ["salmon", "rice"],
    optional: ["cucumber", "avocado", "soy sauce", "sriracha", "mayo", "green onion"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: true, effort: "easy",
    tags: ["healthy", "asian", "gluten-free"],
    steps: ["Cook rice.", "Season and pan-sear salmon until cooked to your liking.", "Flake over rice and add vegetables.", "Finish with soy sauce, spicy mayo, or another sauce you have."]
  },
  {
    name: "Sheet-Pan Sausage & Potatoes",
    description: "Roasted sausage, potatoes, onions, and peppers with very little cleanup.",
    ingredients: ["sausage", "potatoes"],
    optional: ["onion", "bell pepper", "broccoli", "mustard"],
    time: 45, method: "oven", vegetarian: false, glutenFree: true, effort: "easy",
    tags: ["family", "easy", "comfort", "gluten-free"],
    steps: ["Heat oven to 425°F.", "Cut sausage and potatoes into bite-size pieces.", "Toss with oil and seasonings, adding vegetables if you have them.", "Roast until potatoes are tender and everything is browned."]
  },
  {
    name: "Teriyaki Chicken",
    description: "Sweet-savory glazed chicken that works with rice, noodles, or vegetables.",
    ingredients: ["chicken", "soy sauce", "sugar"],
    optional: ["rice", "broccoli", "garlic", "ginger", "honey"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["asian", "family", "easy"],
    steps: ["Brown bite-size chicken pieces.", "Mix soy sauce with sugar or honey, garlic, ginger, and a splash of water.", "Pour over chicken and simmer until glossy and cooked through.", "Serve with rice or vegetables."]
  },
  {
    name: "Coconut Chickpea Curry",
    description: "Creamy pantry curry with chickpeas, coconut milk, and warm spices.",
    ingredients: ["chickpeas", "coconut milk"],
    optional: ["canned tomatoes", "spinach", "onion", "garlic", "rice", "curry powder"],
    time: 30, method: "stovetop", vegetarian: true, glutenFree: true, effort: "easy",
    tags: ["indian", "vegetarian", "vegan", "healthy", "gluten-free"],
    steps: ["Sauté onion and garlic if using.", "Add curry powder or other warm spices.", "Stir in chickpeas, coconut milk, and tomatoes if available.", "Simmer until thickened, add greens, and serve with rice."]
  },
  {
    name: "Mediterranean Chickpea Bowls",
    description: "Fresh, flexible bowls with chickpeas, vegetables, grain, and a bright dressing.",
    ingredients: ["chickpeas"],
    optional: ["rice", "quinoa", "cucumber", "tomato", "feta", "lemon", "hummus"],
    time: 20, method: "no cook", vegetarian: true, glutenFree: true, effort: "easy",
    tags: ["mediterranean", "vegetarian", "healthy", "gluten-free"],
    steps: ["Drain and season chickpeas.", "Prepare any grain you want, or skip it for a salad-style bowl.", "Add chopped vegetables, feta, or hummus.", "Finish with lemon, olive oil, salt, and pepper."]
  },
  {
    name: "Garlic Butter Shrimp Pasta",
    description: "Fast shrimp pasta with garlic, butter, lemon, and parmesan if you have it.",
    ingredients: ["shrimp", "pasta", "garlic", "butter"],
    optional: ["lemon", "parmesan", "parsley", "spinach"],
    time: 25, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["italian", "easy", "seafood"],
    steps: ["Cook pasta and reserve a little pasta water.", "Sauté shrimp in butter with garlic until just cooked.", "Add pasta and a splash of pasta water.", "Finish with lemon, parmesan, or herbs if available."]
  },
  {
    name: "Sloppy Joes",
    description: "A fast, saucy ground-beef sandwich that is easy to stretch for a family.",
    ingredients: ["ground beef", "bread"],
    optional: ["tomato sauce", "ketchup", "onion", "bell pepper", "cheese"],
    time: 25, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["family", "budget", "comfort", "easy"],
    steps: ["Brown ground beef with onion or pepper if using.", "Stir in tomato sauce or ketchup with a little mustard, vinegar, or brown sugar if available.", "Simmer until thick and spoon onto toasted buns or bread."]
  },
  {
    name: "Homemade Pizza or Flatbread",
    description: "Turn dough, naan, pita, or tortillas into a use-up-the-fridge pizza night.",
    ingredients: ["pizza crust", "tomato sauce", "cheese"],
    optional: ["pepperoni", "sausage", "mushrooms", "bell pepper", "onion", "spinach"],
    time: 30, method: "oven", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["italian", "family", "easy"],
    steps: ["Heat oven according to your crust package or recipe.", "Spread on sauce and cheese.", "Add whatever toppings need using.", "Bake until the crust is crisp and cheese is browned and bubbly."]
  },
  {
    name: "Chicken Caesar Wraps",
    description: "A quick no-fuss dinner with chicken, lettuce, parmesan, and Caesar dressing.",
    ingredients: ["chicken", "lettuce", "tortillas", "caesar dressing"],
    optional: ["parmesan", "tomato", "croutons"],
    time: 15, method: "no cook", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["easy", "family"] ,
    steps: ["Slice or shred cooked chicken.", "Toss lettuce and chicken with Caesar dressing.", "Add parmesan or other toppings and wrap in tortillas."]
  },
  {
    name: "Beef & Broccoli",
    description: "A takeout-style stir-fry with beef, broccoli, and a savory sauce.",
    ingredients: ["beef", "broccoli", "soy sauce"],
    optional: ["rice", "garlic", "ginger", "brown sugar", "sesame oil"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: false, effort: "easy",
    tags: ["asian", "family", "easy"],
    steps: ["Slice beef thinly and sear quickly in a hot skillet.", "Remove beef and cook broccoli until tender-crisp.", "Add beef back with soy sauce, garlic, ginger, and a touch of sweetness if desired.", "Serve over rice."]
  },
  {
    name: "Bean & Cheese Burritos",
    description: "Cheap, fast, filling, and endlessly customizable.",
    ingredients: ["tortillas", "beans", "cheese"],
    optional: ["rice", "salsa", "onion", "avocado", "sour cream"],
    time: 15, method: "stovetop", vegetarian: true, glutenFree: false, effort: "easy",
    tags: ["mexican", "vegetarian", "budget", "family"],
    steps: ["Warm beans and season to taste.", "Fill tortillas with beans, cheese, and any extras.", "Fold and toast seam-side down in a skillet if you want a crisp exterior."]
  },
  {
    name: "Tomato & White Bean Soup",
    description: "A pantry soup with tomatoes and beans that gets better with greens, herbs, or parmesan.",
    ingredients: ["canned tomatoes", "white beans", "broth"],
    optional: ["spinach", "onion", "garlic", "parmesan", "bread"],
    time: 30, method: "stovetop", vegetarian: true, glutenFree: true, effort: "easy",
    tags: ["vegetarian", "budget", "healthy", "gluten-free"],
    steps: ["Sauté onion or garlic if using.", "Add tomatoes, beans, and broth.", "Simmer 15–20 minutes.", "Add greens at the end and finish with parmesan or herbs if available."]
  },
  {
    name: "Greek-Style Chicken Bowls",
    description: "Chicken, grain, chopped vegetables, and a cool yogurt or hummus topping.",
    ingredients: ["chicken"],
    optional: ["rice", "quinoa", "cucumber", "tomato", "feta", "yogurt", "hummus", "lemon"],
    time: 30, method: "stovetop", vegetarian: false, glutenFree: true, effort: "easy",
    tags: ["mediterranean", "healthy", "gluten-free"],
    steps: ["Season chicken with oregano, garlic, salt, and pepper and cook through.", "Build bowls with a grain or greens.", "Add cucumber, tomato, feta, hummus, yogurt sauce, or lemon if you have them."]
  }
];

const aliases = {
  "chicken breast": "chicken",
  "chicken breasts": "chicken",
  "chicken thigh": "chicken",
  "chicken thighs": "chicken",
  "rotisserie chicken": "chicken",
  "shredded chicken": "chicken",
  "hamburger": "ground beef",
  "hamburger meat": "ground beef",
  "minced beef": "ground beef",
  "ground turkey": "ground beef",
  "steak": "beef",
  "mozzarella": "cheese",
  "cheddar": "cheese",
  "pepper jack": "cheese",
  "monterey jack": "cheese",
  "american cheese": "cheese",
  "spaghetti": "pasta",
  "penne": "pasta",
  "macaroni": "pasta",
  "rotini": "pasta",
  "linguine": "pasta",
  "fettuccine": "pasta",
  "egg noodles": "noodles",
  "ramen": "noodles",
  "white rice": "rice",
  "brown rice": "rice",
  "jasmine rice": "rice",
  "basmati rice": "rice",
  "flour tortillas": "tortillas",
  "corn tortillas": "tortillas",
  "tortilla": "tortillas",
  "black bean": "black beans",
  "kidney beans": "beans",
  "pinto beans": "beans",
  "cannellini beans": "white beans",
  "great northern beans": "white beans",
  "garbanzo beans": "chickpeas",
  "garbanzos": "chickpeas",
  "mayonnaise": "mayo",
  "marinara": "tomato sauce",
  "spaghetti sauce": "tomato sauce",
  "pasta sauce": "tomato sauce",
  "diced tomatoes": "canned tomatoes",
  "crushed tomatoes": "canned tomatoes",
  "tomatoes canned": "canned tomatoes",
  "stock": "broth",
  "chicken stock": "broth",
  "beef stock": "broth",
  "vegetable stock": "broth",
  "mixed vegetables": "vegetables",
  "mixed veggies": "vegetables",
  "frozen vegetables": "vegetables",
  "frozen veggies": "vegetables",
  "veggies": "vegetables",
  "bell peppers": "bell pepper",
  "peppers": "bell pepper",
  "potato": "potatoes",
  "russet potatoes": "potatoes",
  "red potatoes": "potatoes",
  "baby potatoes": "potatoes",
  "prawns": "shrimp",
  "canned tuna": "tuna",
  "tuna fish": "tuna",
  "coconut cream": "coconut milk",
  "hamburger buns": "bread",
  "buns": "bread",
  "naan": "pizza crust",
  "flatbread": "pizza crust",
  "pizza dough": "pizza crust",
  "caesar": "caesar dressing"
};

const vegetableNames = new Set([
  "broccoli", "carrots", "carrot", "peas", "corn", "spinach", "lettuce", "tomato", "tomatoes",
  "bell pepper", "onion", "zucchini", "green beans", "cauliflower", "cabbage", "mushrooms", "mushroom",
  "asparagus", "kale", "brussels sprouts", "sweet potato", "sweet potatoes", "celery", "cucumber"
]);

const pantryInput = document.getElementById("ingredients");
const maxTimeSelect = document.getElementById("maxTime");
const methodSelect = document.getElementById("method");
const servingsSelect = document.getElementById("servings");
const vegetarianCheckbox = document.getElementById("vegetarian");
const glutenFreeCheckbox = document.getElementById("glutenFree");
const lowEffortCheckbox = document.getElementById("lowEffort");
const resultsEl = document.getElementById("results");
const resultCountEl = document.getElementById("resultCount");
const sourceGridEl = document.getElementById("sourceGrid");
const sourceCopyEl = document.getElementById("sourceCopy");
const searchEverythingLink = document.getElementById("searchEverythingLink");
const searchVideosLink = document.getElementById("searchVideosLink");
const toggleSourcesButton = document.getElementById("toggleSourcesButton");

let showAllSources = false;

function normalizeIngredient(value) {
  let ingredient = String(value)
    .toLowerCase()
    .trim()
    .replace(/[()]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/g, "");

  return aliases[ingredient] || ingredient;
}

function parsePantry() {
  return [...new Set(
    pantryInput.value
      .split(/[,;\n]/)
      .map(normalizeIngredient)
      .filter(Boolean)
  )];
}

function pantryHas(pantry, ingredient) {
  const target = normalizeIngredient(ingredient);
  const pantrySet = new Set(pantry.map(normalizeIngredient));

  if (pantrySet.has(target)) return true;

  if (target === "vegetables") {
    return [...vegetableNames].some(v => pantrySet.has(v));
  }

  if (target === "beans") {
    return [...pantrySet].some(item => item.includes("bean") || item === "chickpeas");
  }

  for (const item of pantrySet) {
    if (item.length >= 4 && target.length >= 4 && (item.includes(target) || target.includes(item))) {
      return true;
    }
  }

  return false;
}

function currentFilters() {
  return {
    maxTime: Number(maxTimeSelect.value),
    method: methodSelect.value,
    vegetarian: vegetarianCheckbox.checked,
    glutenFree: glutenFreeCheckbox.checked,
    lowEffort: lowEffortCheckbox.checked,
    servings: Number(servingsSelect.value)
  };
}

function scoreMeals() {
  const pantry = parsePantry();
  const filters = currentFilters();

  const ranked = meals
    .filter(meal => {
      if (meal.time > filters.maxTime) return false;
      if (filters.method !== "any" && meal.method !== filters.method) return false;
      if (filters.vegetarian && !meal.vegetarian) return false;
      if (filters.glutenFree && !meal.glutenFree) return false;
      if (filters.lowEffort && meal.effort !== "easy") return false;
      return true;
    })
    .map(meal => {
      const matchedRequired = meal.ingredients.filter(item => pantryHas(pantry, item));
      const matchedOptional = meal.optional.filter(item => pantryHas(pantry, item));
      const missing = meal.ingredients.filter(item => !pantryHas(pantry, item));

      let score = pantry.length === 0
        ? 50
        : (matchedRequired.length / Math.max(meal.ingredients.length, 1)) * 82 + Math.min(matchedOptional.length * 4.5, 18);

      if (pantry.length && matchedRequired.length === 0 && matchedOptional.length === 0) score = Math.min(score, 8);
      if (filters.lowEffort && meal.effort === "easy") score += 3;

      return {
        ...meal,
        matchedRequired,
        matchedOptional,
        missing,
        score: Math.max(0, Math.min(100, Math.round(score)))
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.missing.length !== b.missing.length) return a.missing.length - b.missing.length;
      return a.time - b.time;
    });

  return { ranked, pantry, filters };
}

function makeSiteSearchUrl(domain, query) {
  return `https://www.google.com/search?q=${encodeURIComponent(`site:${domain} ${query}`)}`;
}

function sourceScore(source, meal) {
  const overlap = source.tags.filter(tag => meal.tags.includes(tag)).length;
  const generalBonus = source.tags.includes("general") ? 0.75 : 0;
  const easyBonus = meal.effort === "easy" && source.tags.includes("easy") ? 0.5 : 0;
  return overlap * 3 + generalBonus + easyBonus;
}

function sourcesForMeal(meal, count = 6) {
  return [...recipeSources]
    .map(source => ({ source, score: sourceScore(source, meal) }))
    .sort((a, b) => b.score - a.score || a.source.name.localeCompare(b.source.name))
    .slice(0, count)
    .map(item => item.source);
}

function buildMealQuery(meal, pantry) {
  const matched = [...meal.matchedRequired, ...meal.matchedOptional].slice(0, 5);
  const ingredientPhrase = matched.length ? ` ${matched.join(" ")}` : "";
  return `${meal.name}${ingredientPhrase} dinner recipe`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderMeals(ranked, pantry) {
  const visible = ranked.slice(0, 16);
  resultCountEl.textContent = ranked.length ? `${ranked.length} matching ideas · showing top ${visible.length}` : "";

  if (!ranked.length) {
    resultsEl.innerHTML = `
      <div class="empty-state">
        <h3>No matches with those filters.</h3>
        <p>Try increasing the cook time or removing one of the dietary or method filters.</p>
      </div>`;
    return;
  }

  resultsEl.innerHTML = visible.map(meal => {
    const ingredients = meal.ingredients.map(item => {
      const haveIt = pantryHas(pantry, item);
      return `<li><span class="${haveIt ? "have" : "need"}">${haveIt ? "✓ Have" : "• Need"}</span> — ${escapeHtml(item)}</li>`;
    }).join("");

    const bonus = meal.matchedOptional.length
      ? `<p class="bonus-line"><strong>Bonus ingredients you already have:</strong> ${meal.matchedOptional.map(escapeHtml).join(", ")}</p>`
      : "";

    const query = buildMealQuery(meal, pantry);
    const sourceLinks = sourcesForMeal(meal)
      .map(source => `<a class="recipe-search-link" href="${makeSiteSearchUrl(source.domain, query)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)} ↗</a>`)
      .join("");

    return `
      <article class="meal-card">
        <div class="meal-heading">
          <div>
            <h3 class="meal-title">${escapeHtml(meal.name)}</h3>
            <p class="meal-description">${escapeHtml(meal.description)}</p>
          </div>
          <span class="match-badge">${meal.score}% match</span>
        </div>

        <div class="meta-row">
          <span class="pill">${meal.time} min</span>
          <span class="pill">${escapeHtml(capitalize(meal.method))}</span>
          <span class="pill">${meal.effort === "easy" ? "Low effort" : "Moderate effort"}</span>
          ${meal.vegetarian ? '<span class="pill">Vegetarian</span>' : ""}
          ${meal.glutenFree ? '<span class="pill">Gluten-free</span>' : ""}
        </div>

        <ul class="ingredient-list">${ingredients}</ul>
        ${bonus}

        <details>
          <summary>Simple game plan</summary>
          <ol class="steps">${meal.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        </details>

        <details>
          <summary>Find full recipes from trusted sites</summary>
          <div class="recipe-links">${sourceLinks}</div>
        </details>
      </article>`;
  }).join("");
}

function pantrySearchQuery() {
  const pantry = parsePantry();
  const filters = currentFilters();
  const ingredients = pantry.slice(0, 10).join(" ");
  const preference = filters.vegetarian ? " vegetarian" : filters.glutenFree ? " gluten free" : "";
  const time = filters.maxTime < 999 ? ` ${filters.maxTime} minute` : "";
  return `${ingredients || "easy dinner"}${preference}${time} dinner recipe ideas`.trim();
}

function renderSources() {
  const query = pantrySearchQuery();
  const pantry = parsePantry();
  const sources = showAllSources ? recipeSources : recipeSources.slice(0, 16);

  sourceGridEl.innerHTML = sources.map(source =>
    `<a class="source-link" href="${makeSiteSearchUrl(source.domain, query)}" target="_blank" rel="noopener noreferrer" title="Search ${escapeHtml(source.name)}">${escapeHtml(source.name)} ↗</a>`
  ).join("");

  sourceCopyEl.textContent = pantry.length
    ? `Search ${recipeSources.length} recipe and cooking sources for ideas using: ${pantry.slice(0, 7).join(", ")}${pantry.length > 7 ? "…" : ""}.`
    : `Enter ingredients above and these links will search ${recipeSources.length} cooking and recipe sources for relevant dinner ideas.`;

  toggleSourcesButton.textContent = showAllSources ? "Show fewer sources" : `Show all ${recipeSources.length} sources`;
  searchEverythingLink.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  searchVideosLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function saveState() {
  const state = {
    ingredients: pantryInput.value,
    maxTime: maxTimeSelect.value,
    method: methodSelect.value,
    servings: servingsSelect.value,
    vegetarian: vegetarianCheckbox.checked,
    glutenFree: glutenFreeCheckbox.checked,
    lowEffort: lowEffortCheckbox.checked
  };
  localStorage.setItem("mealPlannerState", JSON.stringify(state));
}

function restoreState() {
  try {
    const state = JSON.parse(localStorage.getItem("mealPlannerState"));
    if (!state) return;
    pantryInput.value = state.ingredients || "";
    maxTimeSelect.value = state.maxTime || "30";
    methodSelect.value = state.method || "any";
    servingsSelect.value = state.servings || "4";
    vegetarianCheckbox.checked = Boolean(state.vegetarian);
    glutenFreeCheckbox.checked = Boolean(state.glutenFree);
    lowEffortCheckbox.checked = Boolean(state.lowEffort);
  } catch {
    // Ignore malformed local storage and start clean.
  }
}

function runPlanner() {
  const { ranked, pantry } = scoreMeals();
  renderMeals(ranked, pantry);
  renderSources();
  saveState();
}

function surpriseMe() {
  const { ranked, pantry } = scoreMeals();
  if (!ranked.length) {
    renderMeals([], pantry);
    return;
  }

  const pool = ranked.slice(0, Math.min(10, ranked.length));
  const pick = pool[Math.floor(Math.random() * pool.length)];
  renderMeals([pick], pantry);
  resultCountEl.textContent = "Tonight's pick";
  renderSources();
  saveState();
}

function clearPlanner() {
  pantryInput.value = "";
  maxTimeSelect.value = "30";
  methodSelect.value = "any";
  servingsSelect.value = "4";
  vegetarianCheckbox.checked = false;
  glutenFreeCheckbox.checked = false;
  lowEffortCheckbox.checked = false;
  localStorage.removeItem("mealPlannerState");
  resultCountEl.textContent = "";
  resultsEl.innerHTML = `
    <div class="empty-state">
      <h3>Ready when you are.</h3>
      <p>Add what you have above, then choose <strong>Give me dinner ideas</strong>.</p>
    </div>`;
  renderSources();
  pantryInput.focus();
}

function loadExample() {
  pantryInput.value = "chicken breast, jasmine rice, broccoli, cheddar, tortillas, eggs, onion, canned tomatoes, black beans, sour cream";
  runPlanner();
}

document.getElementById("suggestButton").addEventListener("click", runPlanner);
document.getElementById("surpriseButton").addEventListener("click", surpriseMe);
document.getElementById("clearButton").addEventListener("click", clearPlanner);
document.getElementById("loadExampleButton").addEventListener("click", loadExample);
toggleSourcesButton.addEventListener("click", () => {
  showAllSources = !showAllSources;
  renderSources();
});

[pantryInput, maxTimeSelect, methodSelect, servingsSelect, vegetarianCheckbox, glutenFreeCheckbox, lowEffortCheckbox]
  .forEach(control => control.addEventListener("change", () => {
    renderSources();
    saveState();
  }));

pantryInput.addEventListener("input", () => {
  renderSources();
  saveState();
});

restoreState();
renderSources();
if (pantryInput.value.trim()) runPlanner();
