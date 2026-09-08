# What's for Dinner?

A lightweight ingredient-based dinner planner that suggests meals from what is already in the kitchen and then fans those ideas out across a large collection of recipe websites.

## What it does

- Enter ingredients from the fridge, freezer, or pantry.
- Match those ingredients against built-in dinner templates.
- Rank ideas by how much of the meal you can already make.
- See which core ingredients you have and which ones you still need.
- Filter by maximum cooking time, cooking method, vegetarian, gluten-free, and low-effort meals.
- Use **Surprise Me** when nobody wants to make the decision.
- Open a simple cooking game plan for each suggestion.
- Search relevant recipe sites for a complete recipe without copying or republishing their content.
- Search **81 cooking and recipe sources** from the recipe-web section.
- Search the broader web or YouTube using the same ingredient query.
- Automatically remembers the current pantry/filter selections in the browser with `localStorage`.

## Recipe discovery

The project intentionally does not scrape or reproduce recipes from third-party publishers. Instead, it builds ingredient- and meal-specific searches that point back to the original sources.

The source directory currently includes general recipe publishers, budget cooking sites, healthy cooking sites, vegetarian and vegan publishers, and cuisine-specific sites for Mexican, Mediterranean, Indian, Japanese, Korean, Chinese, African/Caribbean, and more.

Examples include Allrecipes, Food Network, BBC Good Food, Serious Eats, Budget Bytes, Simply Recipes, EatingWell, Taste of Home, Bon Appétit, Epicurious, RecipeTin Eats, Skinnytaste, The Mediterranean Dish, Just One Cookbook, Maangchi, The Woks of Life, Rainbow Plant Life, and many others.

## Run it locally

No installation is required. Open `index.html` in a modern web browser.

## Publish with GitHub Pages

This is a static HTML/CSS/JavaScript project, so it can be hosted directly with GitHub Pages from the branch containing `index.html`.

## Project structure

- `index.html` — app layout and controls
- `styles.css` — responsive styling
- `app.js` — meal library, ingredient aliases, matching/ranking, source selection, searches, and browser persistence
- `.github/workflows/validate.yml` — JavaScript syntax check for repository changes

## Future ideas

- Save favorite meals and recipe links
- Weekly drag-and-drop meal calendar
- Generate a grocery list from selected meals
- Pantry staples that stay checked automatically
- Household likes/dislikes and allergy exclusions
- Add custom family recipes
- Scale recipe quantities by household size
- Mark ingredients as freezer/fridge/pantry and track what should be used first
- Optional live recipe API integrations when API keys are available
