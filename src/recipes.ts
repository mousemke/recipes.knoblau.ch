export interface Recipe {
  cookTime: number;
  ingredients: {
    amount?: number;
    name: string;
  }[];
  instructions: string[];
  marinadeTime?: number;
  origin: string;
  prepTime: number;
  progressPics?: number;
  servings: number;
  summary: string;
  tags: string[];
  title: string;
}

export interface Recipes {
  [name: string]: Recipe;
}

const recipes: Recipes = {
  AppleCiderTurkeyBrine: {
    cookTime: 5,
    ingredients: [
      {
        amount: 8,
        name: "cups apple cider"
      },
      {
        amount: 0.66,
        name: "cup kosher salt"
      },
      {
        amount: 1,
        name: "tablespoon black peppercorns (coarsely crushed)"
      },
      {
        amount: 1,
        name: "tablespoon whole allspice (coarsely crushed)"
      },
      {
        amount: 6,
        name: "whole cloves"
      },
      {
        amount: 2,
        name: "bay leaves"
      },
      {
        amount: 2,
        name: "valencia oranges (quartered)"
      },
      {
        amount: 6,
        name: "cups ice"
      }
    ],
    instructions: [
      "Combine apple cider, salt, peppercorns, allspice, cloves, and bay leaves in a large saucepan and bring to a boil. Cook 5 minutes until salt dissolves. Cool completely.",
      "Grab a large sturdy bag and add whatever you are brineing.",
      "Add cold cider mixture and ice. Squeeze as much air out of bag as possible. twist top and secure with twist tie or tuck end so that it stays put. Refrigerate for 12 to 24 hours, turning occasionally."
    ],
    origin: "https://selfproclaimedfoodie.com/damn-good-roast-turkey/",
    prepTime: 5,
    progressPics: 1,
    servings: 8,
    summary:
      "While this apple cider brine goes wonderfully with a tanksgiving turkey, it could be used as any other long marinade experiments!",
    tags: ["vegetarian", "vegan", "thanksgiving", "turkey"],
    title: "Apple Cider Turkey Brine"
  },
  AwaseDashi: {
    cookTime: 15,
    ingredients: [
      {
        amount: 10,
        name: "g kombu (dried kelp)"
      },
      {
        amount: 10,
        name: "g cup katsuobushi (dried bonito flakes)"
      },
      {
        amount: 4,
        name: "cups water"
      }
    ],
    instructions: [
      "Most Japanese recipes would say to gently clean the kombu with a damp cloth. However, these days, kombu is quite clean, so just make sure it doesn't have any mold spots and it's ready to use. Do not wash or wipe off the white powdery substance, as it has lots of umami.",
      "Make several slits in the kombu to release more flavor.",
      "Add the kombu and water to a medium saucepan.",
      "Turn on the heat to medium low and slowly bring to almost boiling, about 10 minutes.",
      "Meanwhile, clean the dashi by skimming the foam and debris from the surface.",
      "Just before the dashi starts boiling gently, remove the kombu from the saucepan (discard or repurpose in other recipes—suggestions follow). If you leave the kombu in the saucepan, the dashi will become slimy and bitter. ",
      "Add the katsuobushi and bring it back to a boil again.",
      "Once the dashi is boiling, reduce the heat, simmer for just 30 seconds, and turn off the heat.",
      "Let the katsuobushi sink to the bottom, about 10 minutes.",
      "Strain the dashi through a fine-mesh sieve over a bowl or measuring cup. Reserve the katsuobushi and repurpose it; The Awase Dashi is ready to use."
    ],
    origin: "https://www.justonecookbook.com/how-to-make-dashi-jiru/",
    prepTime: 5,
    progressPics: 7,
    servings: 1,
    summary:
      "Dashi is the basic Japanese soup stock used in many Japanese dishes. Learn how to make Awase Dashi at home with umami-packed ingredients like kombu (kelp) and katsuobushi (bonito flakes).",
    tags: ["fish", "japanese"],
    title: "Awase Dashi"
  },
  BakedSalmoninFoilwithAsparagusandLemonGarlicButterSauce: {
    cookTime: 10,
    ingredients: [
      {
        amount: 1,
        name: "pound salmon fillets, divided"
      },
      {
        amount: 2,
        name: "tablespoons vegetable broth or chicken broth"
      },
      {
        amount: 1.5,
        name: "tablespoon fresh lemon juice, or to taste"
      },
      {
        amount: 1,
        name: "tablespoon of your favorite hot sauce (we used Sriracha)"
      },
      {
        amount: 4,
        name: "teaspoons minced garlic"
      },
      {
        name: "Salt and fresh ground black pepper, to taste"
      },
      {
        amount: 4,
        name: "tablespoons butter, diced into small cubes (or ghee)"
      },
      {
        amount: 2,
        name: "tablespoons fresh chopped parsley or cilantro"
      },
      {
        amount: 1,
        name: "pound medium-thick asparagus, woody ends trimmed"
      }
    ],
    instructions: [
      "To prepare the oven-baked salmon in foil packs: Preheat your oven to 425°F (220°C). Cut 2 sheets of 14 by 12-inch (35 x 30 cm) heavy-duty aluminum foil then lay each piece separately on the countertop. In a small bowl, combine the ingredients for the sauce: broth, lemon juice, and hot sauce.",
      "Season both sides of the salmon fillets with salt and pepper and divide salmon onto the aluminum foil near the center then place trimmed asparagus to one side of the salmon, following the long direction of the foil.",
      "You can adjust salmon fillets seasoning with more salt and pepper, then sprinkle garlic on top. Drizzle the garlic butter sauce generously over the salmon fillets and asparagus.",
      "Divide butter pieces evenly among the foil packets, layering them over the salmon fillet and asparagus.",
      "Wrap salmon foil packets in and crimp edges together then wrap ends up. Don't wrap too tight - keep a little extra space inside for heat to circulate. ",
      "Transfer the salmon foil packs to a baking sheet and bake salmon in the oven, sealed side upward until salmon has cooked through, about 9 - 12 minutes. ",
      "Carefully unwrap the baked salmon in foil packets then drizzle with more lemon juice and garnish with fresh parsley or cilantro and a slice of lemon. Enjoy!"
    ],
    origin:
      "https://www.eatwell101.com/baked-salmon-asparagus-foil-packs-recipe",
    prepTime: 12,
    progressPics: 4,
    servings: 2,
    summary:
      "This baked salmon in foil and its garlic butter sauce makes for an amazingly tasty dinner. The salmon recipe of your dreams!",
    tags: ["fish"],
    title: "Baked Salmon in Foil with Asparagus and Lemon Garlic Butter Sauce"
  },
  BakedParmesanFishwithGreenPesto: {
    cookTime: 20,
    ingredients: [
      {
        amount: 500,
        name: "g White fish fillet"
      },
      {
        amount: 1,
        name: "cup Green pesto"
      },
      {
        amount: 0.3,
        name: "cup Parmesan cheese"
      },
      {
        amount: 0.5,
        name: "cup Breadcrumbs"
      },
      {
        amount: 2,
        name: "tablespoons flour"
      },
      {
        amount: 1,
        name: "teaspoon Paprika"
      },
      {
        amount: 2,
        name: "Eggs"
      },
      {
        name: "Salt to taste"
      }
    ],
    instructions: [
      "Clean fish and wash carefully and cut into rectangular pieces. Make sure there is no bone at all in fillets.",
      "Marinate the fillets in ½ cup pesto for 15 mins.",
      "Beat eggs lightly in a clean & dry mixing bowl. Dip marinated fish fillets in the beaten egg.",
      "Mix parmesan cheese & breadcrumbs in another bowl. Add rest of the ingredients in the mixture and mix thoroughly. Coat the egg coated fish fillet with the breadcrumb mixture well on both sides.",
      "Arrange the fillets in a greased nonstick baking pan. Preheat the oven at 1800Cand bake the fillets for 20 mins at same temperature or until fish is flaky and nicely done.",
      "Remove the pan from oven and serve immediately with extra pestoand sour cream. French fries or potato wedges complement this dish perfectly."
    ],
    marinadeTime: 15,
    origin:
      "http://www.scratchingcanvas.com/baked-parmesan-fish-with-green-pesto/",
    prepTime: 5,
    progressPics: 5,
    servings: 4,
    summary:
      "This parmesan fish is enough to make me salivating; but when it gets the touch of Green Coriander Pesto with Chili Lime kick, I think I'm ready to go to the fish market again and again. And finally it's baked; not deep fried not even stir fried.",
    tags: ["fish"],
    title: "Baked Parmesan Fish with Green Pesto"
  },
  BarramundiFishandBokChoyinFoil: {
    cookTime: 10,
    ingredients: [
      {
        amount: 4,
        name: "6 ounces each Barramundi filets"
      },
      {
        amount: 2,
        name: "tablespoons soy sauce divided"
      },
      {
        amount: 3,
        name: "teaspoons rice vinegar divided"
      },
      {
        amount: 2,
        name: "teaspoons canola oil divided"
      },
      {
        amount: 1,
        name: "1-inch piece ginger thinly sliced"
      },
      {
        amount: 2,
        name: "garlic cloves sliced"
      },
      {
        amount: 3,
        name: "green onions"
      },
      {
        amount: 4,
        name: "heads baby bok choy cut in half lengthwise"
      },
      {
        amount: 1,
        name: "red bell pepper thinly sliced"
      }
    ],
    instructions: [
      "Preheat the oven to 400 degrees F.",
      "Place a large piece of foil (larger than baking sheet) on a large baking sheet and lightly coat with cooking spray.",
      "Lay the barramundi filets in the center of the prepared foil.",
      "Drizzle 1 tablespoon soy sauce, 1½ teaspoon rice vinegar and 1 teaspoon canola oil over the fish. Top the fish with the ginger, garlic and green onions.",
      "Lay the baby bok choy and red bell pepper slices over the fish, and drizzle the remaining soy sauce, rice vinegar and canola oil over the vegetables.",
      "Lay another large piece of foil over the fish and vegetables, sealing the edges so that the foil forms a loose pocket over the fish.",
      "Cook until the fish is just cooked through and the vegetables are tender, 10 to 12 minutes. Take care not to overcook the barramundi.",
      "Unwrap the foil, remove the garlic, ginger and green onions, and serve the barramundi with the bok choy and red bell pepper."
    ],
    prepTime: 10,
    origin:
      "https://www.cookincanuck.com/asian-style-barramundi-fish-bok-choy-in-foil-recipe/",
    progressPics: 3,
    servings: 4,
    summary:
      "There's no easier way to cook fish than tucked in a foil package, alongside healthy vegetables. Barramundi, a sustainable fish, takes the starring role.",
    tags: ["fish"],
    title: "Barramundi Fish and Bok Choy in Foil"
  },
  BeefEnchiladas: {
    cookTime: 120,
    ingredients: [
      {
        amount: 3,
        name: "cloves garlic, minced"
      },
      {
        amount: 3,
        name: "tablespoons chili powder"
      },
      {
        amount: 2,
        name: "teaspoons ground cumin"
      },
      {
        amount: 2,
        name: "teaspoons ground coriander"
      },
      {
        amount: 1,
        name: "teaspoon granulated sugar"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 1.25,
        name: "pounds boneless chuck steaks, trimmed of fat"
      },
      {
        amount: 1,
        name: "tablespoon vegetable oil"
      },
      {
        amount: 2,
        name: "yellow onions, finely chopped"
      },
      {
        amount: 15,
        name: "ounce can tomato sauce"
      },
      {
        amount: 0.5,
        name: "cup water"
      },
      {
        amount: 4,
        name: "ounces Monterey Jack cheese, shredded, divided"
      },
      {
        amount: 4,
        name: "ounces sharp cheddar cheese, shredded, divided"
      },
      {
        amount: 0.33,
        name: "cup chopped fresh cilantro"
      },
      {
        amount: 0.25,
        name: "cup chopped canned pickled jalapeños"
      },
      {
        amount: 12,
        name: "6-inch corn tortillas"
      }
    ],
    instructions: [
      "In a small bowl, stir together the garlic, chili powder, cumin, coriander, sugar and salt.",
      "Heat the oil in a Dutch oven over medium-high heat until shimmering. Sprinkle the meat with salt and cook until browned on both sides, about 6 to 8 minutes. Remove the meat to a plate.",
      "Reduce the heat to medium, add the onions to the pot and cook until golden brown, about 5 minutes. Stir in the garlic mixture and cook until fragrant, about 1 minute. Add the tomato sauce and water and bring to a boil. Return the meat and any accumulated juices to the pot, cover, reduce the heat to low, and simmer until the meat is tender and can be broken apart easily, about 1½ hours.",
      "Preheat oven to 350 degrees F.",
      "Strain the beef mixture over a medium bowl. Transfer the meat and any other solids to a separate medium bowl and break the beef into small pieces. Mix together with half of the shredded cheeses, the cilantro and the jalapeños.",
      "Spread ¾ cup of the sauce in the bottom of a 9x13-inch baking dish. Microwave the tortillas according to package directions to soften. Spread about ⅓ cup of the beef mixture down the center of each tortilla, roll up tightly, and place in the baking dish seam-side down. Pour the remaining sauce evenly over the enchiladas and spread to ensure that all of the ends are covered in sauce.",
      "Sprinkle the remaining cheese over top of the enchiladas, cover the baking dish with foil and bake for 25 minutes. Remove the foil and continue to bake until the cheese browns slightly, 5 to 10 minutes. Leftovers can be stored in an airtight container in the refrigerator for up to 3 days."
    ],
    origin: "https://www.browneyedbaker.com/beef-enchiladas-recipe/",
    prepTime: 30,
    progressPics: 4,
    servings: 4,
    summary:
      "These beef enchiladas are Mexican comfort food at its finest. Shredded beef simmers in a homemade red enchilada sauce for ultimate flavor, then is mixed with jalapenos, cheese, and cilantro. Rolled up in tortillas and topped with more sauce and cheese, these enchiladas are sheer perfection. It's a classic recipe that deserves a spot in everyone's dinner rotation.",
    tags: ["beef"],
    title: "Beef Enchiladas"
  },
  BeefStroganoff: {
    cookTime: 18,
    ingredients: [
      {
        amount: 1.5,
        name: "pounds beef sirloin steak, 1/2 inch thick"
      },
      {
        amount: 2.5,
        name: "cups fresh mushrooms, sliced"
      },
      {
        amount: 2,
        name: "medium onions, thinly sliced"
      },
      {
        amount: 1,
        name: "garlic clove, finely chopped"
      },
      {
        amount: 0.25,
        name: "cup butter"
      },
      {
        amount: 1.5,
        name: "cups beef broth"
      },
      {
        amount: 0.5,
        name: "teaspoon salt"
      },
      {
        amount: 1,
        name: "teaspoon Worcestershire sauce"
      },
      {
        amount: 0.25,
        name: "cup all-purpose flour"
      },
      {
        amount: 1.5,
        name: "cups sour cream"
      },
      {
        amount: 3,
        name: "cups hot cooked egg noodles"
      }
    ],
    instructions: [
      "Cut beef across grain into about 1 1/2x1/2-inch strips.",
      "Cook mushrooms, onions and garlic in butter in 10-inch skillet over medium heat, stirring occasionally, until onions are tender; remove from skillet.",
      "Cook beef in same skillet until brown. Stir in 1 cup of the broth, the salt and Worcestershire sauce. Heat to boiling; reduce heat. Cover and simmer 15 minutes.",
      "Stir remaining 1/2 cup broth into flour; stir into beef mixture. Add onion mixture; heat to boiling, stirring constantly. Boil and stir 1 minute. Stir in sour cream; heat until hot (do not boil). Serve over noodles."
    ],
    origin:
      "https://www.bettycrocker.com/recipes/classic-beef-stroganoff/c17a904f-a8f6-48ae-bedb-5b301a8ea317",
    prepTime: 20,
    servings: 6,
    summary:
      "With its tender chunks of beef coated in a luscious creamy sauce and served over a bed of buttery noodles, it's no wonder Beef Stroganoff is such a hit. With all that flavor, you might assume it's a complicated dish, but it's actually quite the opposite. This from-scratch recipe can be made in well under an hour and with only 20 minutes of hands-on time, since it's really all about the simmer. (The key to transforming the beef into succulent morsels of mouthwatering meat.) So when you want to impress the family but don't have all day to do it—this one's a guaranteed hit!.",
    tags: ["beef"],
    title: "Beef Stroganoff"
  },
  BeerCheeseSoup: {
    cookTime: 20,
    ingredients: [
      {
        amount: 0.5,
        name: "cup butter"
      },
      {
        amount: 2,
        name: "cups yellow onion, chopped"
      },
      {
        amount: 1,
        name: "cup diced celery stalks, cut into ¼-inch dice"
      },
      {
        amount: 1,
        name: "cup diced carrots, cut into ¼-inch dice"
      },
      {
        amount: 2,
        name: "teaspoon minced garlic"
      },
      {
        amount: 1,
        name: "bay leaf"
      },
      {
        amount: 0.33,
        name: "cup all-purpose flour"
      },
      {
        amount: 1.75,
        name: "cups fake chicken broth or vegetable broth"
      },
      {
        amount: 12,
        name: "fluid ounces bottle beer. Farmhouse or session ale, or a light red or brown ale with an emphasis on malt and not so much on the hops. A full-strength American lager or good old Miller High Life."
      },
      {
        amount: 2,
        name: "cups half-and-half"
      },
      {
        amount: 1,
        name: "tablespoon Worcestershire sauce"
      },
      {
        amount: 1,
        name: "teaspoon dry mustard"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 0.125,
        name: "teaspoon cayenne pepper"
      },
      {
        amount: 3,
        name: "cups sharp Cheddar cheese, shredded"
      },
      {
        name: "Freshly popped popcorn"
      }
    ],
    instructions: [
      "Melt butter in a 4-quart saucepan over medium heat. Add onion, celery, carrot, garlic and bay leaf; cook, stirring occasionally, until vegetables begin to soften, about 5 minutes. Reduce heat to medium-low and sprinkle flour over vegetables; cook another 3 minutes, stirring occasionally. Add broth, beer and half-and-half gradually, stirring constantly; simmer, stirring occasionally, 5 minutes. Add Worcestershire sauce, mustard, salt and cayenne.",
      "Remove bay leaf; purée soup with an immersion blender until fairly smooth (this step is not necessary, but gives a more appealing appearance and texture).",
      "Add cheese gradually, stirring constantly, and cook another 3 or 4 minutes or until cheese is melted.",
      "Serve immediately, garnished with popcorn."
    ],
    origin:
      "https://www.wisconsincheeseman.com/blog/cooking/beer-cheese-soup-wisconsin-classic/",
    prepTime: 10,
    servings: 4,
    summary:
      "Wisconsin beer cheese soup is a favorite in pubs and fine restaurants alike. Beer. Cheese. They're the top two food groups in Wisconsin. And in the frigid Wisconsin winters, there's no better way to warm up than with soup. No wonder beer cheese soup is a favorite around here.",
    tags: ["vegetarian", "wisconsin"],
    title: "Beer Cheese Soup"
  },
  BlackCodwithMiso: {
    cookTime: 20,
    ingredients: [
      {
        amount: 4,
        name: "fillets sablefish (gindara) (about 1 inch (2.5 cm) thick; you can also use salmon and sea bass)"
      },
      {
        amount: 2,
        name: "teaspoons kosher salt (Diamond Crystal; use half for table salt)"
      },
      {
        amount: 2,
        name: "tablespoons sake (for cleaning and removing the odor of the fish)"
      },
      {
        amount: 6,
        name: "tablespoons Saikyo miso (Kyoto-style white miso - 西京味噌)"
      },
      {
        amount: 3,
        name: "tablespoons mirin"
      },
      {
        amount: 3,
        name: "tablespoons sake"
      },
      {
        amount: 1,
        name: "tablespoons sugar (add sugar only if you do not use saikyo miso)"
      }
    ],
    instructions: [
      "Sprinkle salt over the fish and set it aside for 30 minutes. The salt will draw out excess moisture and reduce the odor of the fish.",
      "In a bowl, add the saikyo miso, mirin, and sake (and sugar, if you are using regular white miso.)",
      "Mix it all together and pour the marinade into a flat-bottomed airtight container.",
      "Pour 2 Tbsp sake over the fish to rinse off the salt. Gently pat dry with a paper towel to remove the moisture.",
      "Place the fish in the container and coat both sides of the fish with the marinade.",
      "Slather the fillets with the marinade. Cover the container and keep it in the refrigerator for up to 2-3 days. If you prefer your fish less salty (and don't eat this dish with rice, for example), you can reduce the marination time to 1 day (or even several hours.) It depends on your preference.",
      "With your fingers, wipe the marinade off the fish completely. Do not leave any excess marinade on the fish; otherwise, it will burn easily. At this point, you can individually wrap the fish with plastic wrap and store it in a freezer bag for up to 2-3 weeks. Defrost in the refrigerator before cooking.",
      "Place the fish, skin side upm on a baking sheet lined with parchment paper/silicone mat.",
      "Preheat the oven to 400°F (200ºC) with a rack placed in the center of the oven. For a convection oven, reduce the cooking temperature by 25ºF (15ºC). Bake the fish on the parchment paper until the surface is blistered and browned a bit, about 20 minutes. You do not need to flip the fish.",
      "Carefully remove the fish with a spatula and remove any burnt miso from the fish. Serve immediately."
    ],
    marinadeTime: 2880,
    origin: "https://www.justonecookbook.com/black-cod-with-miso/",
    prepTime: 10,
    progressPics: 11,
    servings: 4,
    summary:
      "A classic Japanese dish, Black Cod with Miso (or simply Miso Cod 銀だらの西京焼き), is served at many formal Japanese restaurants. These days you may have heard of the dish after it's made famous worldwide by the acclaimed fine Japanese restaurant chain Nobu. Luckily, the miso-glazed black cod recipe is simple enough that you can enjoy this wonderfully seasoned fish at home.",
    tags: ["fish", "japanese"],
    title: "Black Cod with Miso"
  },
  ButadonPorkBowls: {
    cookTime: 45,
    ingredients: [
      {
        amount: 1.5,
        name: "lbs thinly sliced pork belly"
      },
      {
        amount: 1,
        name: "small onion, cut into chunks"
      },
      {
        amount: 3,
        name: "tbs dashi broth granules"
      },
      {
        amount: 3,
        name: "cups water"
      },
      {
        amount: 0.5,
        name: "cup soy sauce"
      },
      {
        amount: 0.5,
        name: "cup mirin"
      },
      {
        amount: 2,
        name: "teaspoon honey"
      },
      {
        name: "Chopped green onions (optional garnish)"
      },
      {
        name: "Pickled ginger (optional garnish)"
      },
      {
        name: "Shichimi Togarashi (optional garnish)"
      }
    ],
    instructions: [
      "In medium pot over medium heat, combine water, dashi granules, soy sauce, mirin, and honey.",
      "Cut pork belly strips into bite-sized pieces, about 2-3 inches in length.",
      "Add pork to the pot, stirring to separate meat slices. Bring to a gentle boil.",
      "Cover pot with lid, leaving a slight gap and reduce heat to a low. Simmer for at least 30 minutes (45 minutes is best).",
      "Remove lid and add onions. Mix well and simmer uncovered for another 15 minutes.",
      "Serve over hot rice, spooning some of the braising liquid over the meat.",
      "Garnish with chopped green onions, Shichimi Togarashi (Japanese pepper mix) and pickled ginger, if desired."
    ],
    origin: "https://www.adayinthekitchen.com/japanese-butadon-pork-bowls/",
    prepTime: 15,
    progressPics: 3,
    servings: 6,
    summary:
      "Butadon pork bowls are an easy way to bring a humble, homey Japanese meal to your table. Tender flavorful pork over hot steamed rice, it's a simple and delicious bowl of satisfying comfort.",
    tags: ["pork", "japanese"],
    title: "Butadon Pork Bowls"
  },
  ButtermilkMashedPotatoes: {
    cookTime: 25,
    ingredients: [
      {
        amount: 6,
        name: "medium white potatoes, peeled"
      },
      {
        amount: 0.75,
        name: "cup buttermilk"
      },
      {
        amount: 3,
        name: "tablespoons butter"
      },
      {
        amount: 2,
        name: "tablespoons chicken bouillon powder"
      },
      {
        amount: 2,
        name: "teaspoons chopped fresh dill"
      },
      {
        name: "salt and ground black pepper to taste"
      }
    ],
    instructions: [
      "Place potatoes into a large pot and cover with salted water; bring to a boil. Reduce heat to medium-low and simmer until tender, 20 to 30 minutes. Drain and mash in a large bowl.",
      "Add buttermilk, butter, bouillon powder, dill, salt, and pepper and mash until creamy."
    ],
    origin:
      "https://www.allrecipes.com/recipe/277614/buttermilk-mashed-potatoes/",
    prepTime: 15,
    servings: 6,
    summary:
      "Extra creamy buttermilk mashed potatoes bursting with flavor. No need to add gravy!",
    tags: ["vegetarian"],
    title: "Buttermilk Mashed Potatoes"
  },
  ButteryFlakyPieCrust: {
    cookTime: 25,
    ingredients: [
      {
        amount: 2.5,
        name: "cups all-purpose flour (spoon & leveled), plus more as needed for shaping and rolling"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 6,
        name: "Tablespoons unsalted butter, chilled and cubed"
      },
      {
        amount: 0.66,
        name: "cup vegetable shortening, chilled"
      },
      {
        amount: 0.5,
        name: "cup ice water"
      }
    ],
    instructions: [
      "Mix the flour and salt together in a large bowl. Add the butter and shortening.",
      "Using a pastry cutter or two forks, cut the butter and shortening into the mixture until it resembles coarse meal (pea-sized bits with a few larger bits of fat is OK). A pastry cutter makes this step very easy and quick.",
      "Measure 1/2 cup (120ml) of water in a cup. Add ice. Stir it around. From that, measure 1/2 cup (120ml) water since the ice has melted a bit. Drizzle the cold water in, 1 Tablespoon (15ml) at a time, and stir with a rubber spatula or wooden spoon after every Tablespoon (15ml) added. Stop adding water when the dough begins to form large clumps. I always use about 1/2 cup (120ml) of water and a little more in dry winter months (up to 3/4 cup). Do not add any more water than you need.",
      "Transfer the pie dough to a floured work surface. The dough should come together easily and should not feel overly sticky. Using floured hands, fold the dough into itself until the flour is fully incorporated into the fats. Form it into a ball. Cut dough in half. Flatten each half into 1-inch thick discs using your hands.",
      "Wrap each tightly in plastic wrap. Refrigerate for at least 2 hours and up to 5 days.",
      "When rolling out the chilled pie dough discs to use in your pie, always use gentle force with your rolling pin. Start from the center of the disc and work your way out in all directions, turning the dough with your hands as you go. Visible specks of butter and fat in the dough are perfectly normal and expected!",
      "Proceed with the pie per your recipe's instructions."
    ],
    origin:
      "https://sallysbakingaddiction.com/baking-basics-homemade-buttery-flaky-pie-crust/",
    prepTime: 15,
    progressPics: 9,
    servings: 2,
    summary:
      "This is the one and only pie crust recipe I use. It's been passed down through generations. Stands the test of time. Old-fashioned, yet never out of style. Wins my heart every single time. This recipe is enough for a double crust pie. If you only need 1 crust for your pie, cut this recipe in half OR freeze the other half per the make ahead tip instruction below.",
    tags: ["vegetarian"],
    title: "Buttery Flaky Pie Crust"
  },
  Carnitas: {
    cookTime: 0,
    ingredients: [
      {
        amount: 2,
        name: "kg pork shoulder, skinless, boneless (Use pork with the skin removed but leaving some of the fat cap on. The fat adds juiciness to the carnitas)"
      },
      {
        amount: 2.5,
        name: "teaspoon salt"
      },
      {
        amount: 1,
        name: "teaspoon black pepper"
      },
      {
        amount: 1,
        name: "onion, chopped"
      },
      {
        amount: 1,
        name: "jalapeno, deseeded, chopped"
      },
      {
        amount: 4,
        name: "cloves garlic, minced"
      },
      {
        amount: 0.75,
        name: "cup juice from orange"
      },
      {
        amount: 1,
        name: "tablespoon dried oregano"
      },
      {
        amount: 2,
        name: "teaspoon ground cumin"
      },
      {
        amount: 1,
        name: "tablespoon olive oil"
      }
    ],
    instructions: [
      "Rinse and dry the pork shoulder, rub all over with salt and pepper.",
      "Combine the oregano, cumin, and olive oil then rub all over the pork.",
      "Place the pork in a slow cooker (fat cap up), top with the onion, jalapeño, minced garlic and squeeze over the orange juice.",
      "Slow Cook on low for 10 hours or on high for 7 hours.",
      "Pork should be tender enough to shred. Remove from slow cooker and let cool slightly. Then shred using two forks.",
      "If you have a lot more than 2 cups of juice, then reduce it down to about 2 cups. The liquid will be salty, it is the seasoning for the pork. Set liquid aside - don't bother straining onion etc, it's super soft.",
      "Heat 1 tbsp of oil in a large non stick pan or well seasoned skillet over high heat. Spread pork in the pan, drizzle over some juices. Wait until the juices evaporate and the bottom side is golden brown and crusty. Turn and just briefly sear the other side - you don't want to make it brown all over because then it's too crispy, need tender juicy bits.",
      "Remove pork from skillet. Repeat in batches - don't crowd the pan.",
      "Just before serving, drizzle over more juices and serve hot, stuffed in tacos."
    ],
    origin:
      "https://www.recipetineats.com/pork-carnitas-mexican-slow-cooker-pulled-pork/",
    prepTime: 15,
    progressPics: 3,
    servings: 10,
    summary:
      "Every tortilla dreams of being stuffed with Carnitas. The best of the best of Mexican food, seasoned pork is slow cooked until tender before gently teasing apart with forks and pan frying to golden, crispy perfection. Pork Carnitas are that elusive combination of juicy and crispy with perfect seasoning - and this Carnitas recipe requires just 5 minutes prep!",
    tags: ["pork"],
    title: "Carnitas"
  },
  CheesyMushroomandWildRiceCasserole: {
    cookTime: 120,
    ingredients: [
      {
        amount: 1.5,
        name: "cup short or medium grain brown rice"
      },
      {
        amount: 2.5,
        name: "cups water"
      },
      {
        amount: 1,
        name: "tablespoon unsalted butter (for rice)"
      },
      {
        amount: 1,
        name: "teaspoon salt (for rice)"
      },
      {
        amount: 4,
        name: "tablespoons butter (unsalted)"
      },
      {
        amount: 1,
        name: "Small onion (diced)"
      },
      {
        amount: 8,
        name: "ounces mushrooms, any variety (quartered)"
      },
      {
        amount: 3,
        name: "tablespoons all-purpose flour"
      },
      {
        amount: 1,
        name: "cup low-sodium fake chicken or vegetable broth"
      },
      {
        amount: 1,
        name: "cup whole milk"
      },
      {
        amount: 4,
        name: "ounces Swiss cheese (grated)"
      },
      {
        amount: 15,
        name: "saltine crackers (optional)"
      },
      {
        name: "salt and pepper to taste"
      }
    ],
    instructions: [
      "To bake the rice: Preheat the oven to 375 degrees. Place the rice in an 8-inch square baking dish. Bring the water, butter, and salt to a boil in a saucepan or in the microwave. Pour over the rice in the baking dish and stir to combine. Cover the baking dish with aluminum foil. Bake for one hour. Remove from the oven, fluff the rice with a fork, and serve.",
      "To make the casserole: reduce the oven temperature to 350 degrees.",
      "Melt one tablespoon of the butter in a 10-inch skillet over medium heat. Cook the onion in the butter until soft and beginning to turn translucent. Add the mushrooms and cook until browned.",
      "Add the remaining butter to the pan and melt. Add the flour and whisk until incorporated; cook for about a minute.",
      "Gradually add the chicken broth then the milk, whisking constantly. Cook until thickened then add the cheese, stirring until completely incorporated. Salt and pepper to taste.",
      "Combine the rice and the creamy mushroom mixture in a large bowl. Transfer to an 8-inch baking dish (I just use the one in which I cooked the rice). If desired, crumble saltine crackers over the top.",
      "Bake for 30 minutes, checking from time to time to make sure the cracker crumbs aren't burning. If they start to burn, cover the pan with foil. Serve."
    ],
    origin: "https://chattavore.com/cheesy-mushroom-and-wild-rice-casserole/",
    prepTime: 25,
    progressPics: 2,
    servings: 4,
    summary:
      "This cheesy mushroom and wild rice casserole is easy (especially when you use the baked rice method included) and so filling and satisfying!",
    tags: ["vegetarian"],
    title: "Cheesy Mushroom and Wild Rice Casserole"
  },
  CheesyWhiteChickenEnchiladas: {
    cookTime: 25,
    ingredients: [
      {
        amount: 2,
        name: "Chicken breasts"
      },
      {
        amount: 3,
        name: "Cups Pepper Jack Cheese shredded"
      },
      {
        amount: 8,
        name: "corn tortillas"
      },
      {
        amount: 5,
        name: "tablespoons butter divided"
      },
      {
        amount: 3,
        name: "tablespoons all purpose flour"
      },
      {
        amount: 1,
        name: "clove garlic minced"
      },
      {
        amount: 4,
        name: "cups chicken stock"
      },
      {
        amount: 1,
        name: "cup sour cream"
      },
      {
        amount: 1,
        name: "cup Fontina cheese shredded"
      },
      {
        amount: 15,
        name: "ounces Rotel tomatoes and green chilis"
      },
      {
        amount: 4,
        name: "ounces green chilis"
      },
      {
        amount: 2,
        name: "teaspoons garlic powder"
      },
      {
        amount: 2,
        name: "teaspoons onion powder"
      },
      {
        amount: 2,
        name: "teaspoons cumin"
      },
      {
        name: "salt and pepper to taste"
      },
      {
        name: "Cilantro garnish"
      }
    ],
    instructions: [
      "Preheat the oven to 325. Prepare a 9x13 baking dish with cooking spray and set aside.",
      "Shred the chicken with two forks. Remove and discard any skin and bones.",
      "Mix the shredded chicken with 2 cups of pepper jack cheese. Place a handful of the mixture into each tortilla and roll the tortilla up and place seem side down in the prepared baking dish.",
      "In a large sauce pan, melt 2 tbs of butter and garlic. Cook until the garlic is fragrant - about a minute. Remove these from the pan and put in the remaining 3 tbs of butter and add the flour. mix well and cook the mixture over medium heat for 1-2 minutes to allow the flour to cook (this removes the flour taste). Add the garlic back into the mix.",
      "Using a whisk to whisk the butter/flour mixture, slowly add the chicken stock. It will seem that the flour mix is growing when you add the chicken water - just keep whisking - whisk very fast so as to remove any lumps that may want to form. Whisk until smooth and continue to cook this mixture over medium heat until it forms a bubbly sauce. You will note that it is somewhat thicker than when you started.",
      "Stir in the sour cream and the fontina cheese. When well mixed, add the Ro-tell tomatoes and the can of green chilis. Add garlic powder, onion powder and cumin. Mix well and allow to heat until starting to bubble. Taste. Add salt and pepper to taste.",
      "Pour this sauce over the top of the enchiladas. Make sure the sauce goes down between the enchiladas. Do not over fill. Top with the remaining 1-2 Cups of pepper jack cheese.",
      "Place a baking sheet below the baking dish in the oven to catch drips. Bake in the oven for 25-30 minutes until bubbly throughout. Cilantro as a garnish at the table. (it gets wilty if you put it on as it comes out of the oven)"
    ],
    origin: "https://chattavore.com/cheesy-mushroom-and-wild-rice-casserole/",
    prepTime: 20,
    progressPics: 4,
    servings: 12,
    summary:
      "Rich, hearty, easy cheesy white chicken enchiladas that ANYONE can master and fit everyone's tastes! You'll be rolling out and cranking up the Taco Tuesdays with this EASY and delicious dish! Have your entire family BEGGING for more!",
    tags: ["chicken"],
    title: "Cheesy White Chicken Enchiladas"
  },
  ChickenPotPieswithPuffPastry: {
    cookTime: 40,
    ingredients: [
      {
        amount: 0.5,
        name: "cup unsalted butter"
      },
      {
        amount: 4,
        name: "cups chicken broth, divided"
      },
      {
        amount: 0.5,
        name: "cup all-purpose flour"
      },
      {
        amount: 0.25,
        name: "cup dried onion flakes"
      },
      {
        amount: 1,
        name: "dash hot pepper sauce"
      },
      {
        amount: 1,
        name: "teaspoon ground black pepper"
      },
      {
        amount: 0.5,
        name: "teaspoon dried thyme"
      },
      {
        amount: 1,
        name: "bay leaf"
      },
      {
        amount: 8,
        name: "ounce can carrots, drained"
      },
      {
        amount: 8,
        name: "ounce can white potatoes"
      },
      {
        amount: 2,
        name: "cups diced cooked chicken"
      },
      {
        amount: 4,
        name: "slices Swiss cheese"
      },
      {
        amount: 1,
        name: "sheet frozen puff pastry, cut into four squares"
      },
      {
        amount: 1,
        name: "egg, beaten with"
      },
      {
        amount: 1,
        name: "tablespoon water"
      }
    ],
    instructions: [
      "Preheat oven to 400 degrees. Spray 4 small oven-proof bowls with cooking spray.",
      "In a saucepan over medium heat, melt butter. Stir in 2 cups chicken broth, and whisk in all of the flour, gradually adding the remaining chicken broth until you have a smooth, slightly thick base. Mix in onion flakes, hot pepper sauce, pepper, thyme, bay leaf, and carrots. Cook about 5 minutes. Stir in potatoes and chicken, and cook for another 5 minutes.",
      "In the bottom of each prepared bowl, place a slice of Swiss cheese. Divide the chicken mixture equally into the four bowls, over the cheese. Place a puff pastry square over the top of each bowl, pressing lightly around the rim. Brush the pastry with the egg and water mixture. Place the four bowls on a baking sheet.",
      "Bake until pastry is puffed and golden brown, about 25 minutes. Let rest at least 5 minutes before serving."
    ],
    origin:
      "https://www.allrecipes.com/recipe/53926/chicken-pot-pies-with-puff-pastry/",
    prepTime: 20,
    servings: 4,
    summary:
      "For those of us who LOVE pot pies, but don't have all day to make them! This quick pot pie recipe can be altered with as many vegetables and seasonings as your heart desires. Its only crust is a square of puff pastry placed over the top of the bowl, which rises and browns beautifully. Use leftover chicken, or store-bought prepared chicken breasts if you're in more of a hurry!",
    tags: ["chicken"],
    title: "Chicken Pot Pies with Puff Pastry"
  },
  CranberrySauce: {
    cookTime: 15,
    ingredients: [
      {
        amount: 12,
        name: "ounce fresh cranberries"
      },
      {
        amount: 1,
        name: "cup cranberry juice"
      },
      {
        amount: 1,
        name: "cup pure maple syrup"
      },
      {
        amount: 3,
        name: "tablespoon orange juice"
      }
    ],
    instructions: [
      "Wash bag of cranberries under cool water, then dump into a medium saucepan.",
      "Pour in 1 cup of cranberry juice.",
      "Pour in 1 cup maple syrup.",
      "Add orange juice.",
      "Stir together and turn heat on high until it reaches a boil.",
      "Once it comes to a rolling boil, turn the heat down to medium low and continue cooking over lower heat for about 10 minutes, or until the juice is thick. Turn off the heat."
    ],
    origin:
      "https://www.thepioneerwoman.com/food-cooking/recipes/a9614/homemade-cranberry-sauce/",
    prepTime: 5,
    progressPics: 5,
    servings: 4,
    summary:
      "I go back to this homemade cranberry sauce year after year after year.",
    tags: ["vegetarian", "vegan", "thanksgiving"],
    title: "Cranberry Sauce"
  },
  CrawfishBisque: {
    cookTime: 35,
    ingredients: [
      {
        amount: 6,
        name: "tablespoons crawfish butter, divided"
      },
      {
        amount: 0.33,
        name: "cup chopped onion"
      },
      {
        amount: 2,
        name: "tablespoons vermouth or brandy"
      },
      {
        amount: 5,
        name: "cups crawfish broth"
      },
      {
        amount: 0.33,
        name: "cup rice"
      },
      {
        amount: 1,
        name: "pound crawfish meat"
      },
      {
        amount: 2,
        name: "tablespoons heavy cream, or to taste"
      },
      {
        name: "Salt to taste"
      },
      {
        name: "Chopped dill, parsley or chives for garnish"
      }
    ],
    instructions: [
      "Heat 2 tablespoons crawfish butter in a large soup pot over medium-high heat. Saute the onion until soft and translucent. Do not let it brown. Pour in the vermouth or brandy and let this boil for a minute.",
      "Add the rice and crawfish broth and bring it to a gentle simmer. Simmer until the rice is soft, about 25 minutes. Add salt to taste.",
      "Pour the soup into a blender along with 1/4 pound of crawfish meat. Puree, in batches if you need to.",
      "Wipe out the soup pot and return the pureed soup to it. Heat the bisque over medium-low heat just to the steaming point. Add the rest of the crawfish meat and heat for 2-3 minutes. Mix in the heavy cream, then stir in the remaining crawfish butter 1 tablespoon at a time. Serve at once, garnished with the herbs."
    ],
    origin: "https://honest-food.net/crayfish-bisque-recipe/",
    prepTime: 10,
    servings: 8,
    summary:
      "Few recipes concentrate the flavors of the main ingredient better than a French crawfish bisque. This is no mere soup or stew, it is a full-on barrage of flavor that makes everyone stop talking at the table: You just want to savor this soup in silence.",
    tags: ["crawfish", "cajun"],
    title: "Crawfish Bisque"
  },
  CrawfishBroth: {
    cookTime: 120,
    ingredients: [
      {
        amount: 4,
        name: "pounds crawfish heads and shells from tails"
      },
      {
        amount: 0.25,
        name: "cup safflower, grapeseed or other neutral oil"
      },
      {
        amount: 1,
        name: "fennel bulb, chopped with fronds"
      },
      {
        amount: 2,
        name: "large carrots, chopped"
      },
      {
        amount: 2,
        name: "cups chopped onion"
      },
      {
        amount: 4,
        name: "garlic cloves, chopped"
      },
      {
        amount: 1,
        name: "ounce dried matsutake mushrooms (optional)"
      },
      {
        amount: 6,
        name: "ounces tomato paste"
      },
      {
        amount: 1,
        name: "cup dry vermouth"
      },
      {
        amount: 5,
        name: "bay leaves"
      }
    ],
    instructions: [
      "Heat the oil in a large stockpot over medium heat. Add the crawfish shells and smash them to bits with a potato masher. Crush and stir them as they cook until they are all in pieces. Let this cook for a few minutes, then mix in the fennel, carrot and onion. Cook for 5 minutes, stirring often. Mix in the garlic, dried mushrooms and tomato paste. Turn the heat as high as it will go and stir-fry this for 2 minutes.",
      "Add the vermouth and stir well. Let this boil for 1 minute, then add enough cool water to cover the shells by 1 inch. Add the bay leaves and let this simmer gently for 90 minutes to 2 hours. Do not let it boil.",
      "Strain the broth by pouring it through a fine-meshed sieve with a paper towel set inside. Set aside or chill quickly and store."
    ],
    origin: "https://honest-food.net/crawfish-bisque-recipe/",
    prepTime: 20,
    progressPics: 2,
    servings: 8,
    summary: "For all good recipies you MUST make your own broth.",
    tags: ["crawfish", "cajun"],
    title: "Crawfish Broth"
  },
  CrawfishButter: {
    cookTime: 90,
    ingredients: [
      {
        amount: 0.25,
        name: "pound cooked crawfish heads and shells from the tails"
      },
      {
        amount: 0.5,
        name: "pound unsalted butter"
      },
      {
        amount: 1,
        name: "tablespoon brandy"
      }
    ],
    instructions: [
      "To make the crawfish butter, smash the shells to a pulp. This can be done in a mortar and pestle, or in a strong blender or food processor -- or with a mallet in a bowl. You really want to mash everything well so you get more flavor from the shells.",
      "Melt the butter in a small saucepan and add the shells to it. Cover and put into a 170°F oven and let this cook for 90 minutes, stirring now and again. Strain the butter through a fine-meshed sieve that has a paper towel set inside it; this filters all the debris out.",
      "Pour into a container and let it cool. TIP: For long storage, let the butter solidify and pop it out of the container, leaving behind the gellified liquid at the bottom of the container. Leaving this in contact with the butter over time can make it got rancid."
    ],
    origin: "https://honest-food.net/crawfish-bisque-recipe/",
    prepTime: 5,
    servings: 8,
    summary:
      "The reason crawfish butter is so good is because a great deal of the flavor in lobsters, crabs, shrimps and crawfish is fat soluble, not water soluble. So what you can't extract by making broth you get by making the butter. Ah, those crafty French…",
    tags: ["crawfish", "cajun"],
    title: "Crawfish Butter"
  },
  CreamofChickenSoup: {
    cookTime: 40,
    ingredients: [
      {
        amount: 115,
        name: "g unsalted butter"
      },
      {
        amount: 1,
        name: "medium onion, chopped"
      },
      {
        amount: 2,
        name: "stalks celery (with leaves), chopped"
      },
      {
        amount: 3,
        name: "medium carrots, chopped"
      },
      {
        amount: 80,
        name: "g plain flour"
      },
      {
        amount: 1.65,
        name: "liter chicken stock, homemade or low-sodium tinned"
      },
      {
        amount: 3,
        name: "sprigs parsley"
      },
      {
        amount: 3,
        name: "sprigs fresh thyme"
      },
      {
        amount: 1,
        name: "bay leaf"
      },
      {
        amount: 415,
        name: "g cooked, diced chicken"
      },
      {
        amount: 120,
        name: "ml double cream"
      },
      {
        amount: 2.5,
        name: "tsp dry sherry"
      },
      {
        amount: 1,
        name: "tbsp salt"
      },
      {
        amount: 10,
        name: "g chopped flat-leaf parsley"
      },
      {
        name: "Freshly ground black pepper to taste"
      }
    ],
    instructions: [
      "Melt the butter in a large soup pot over medium heat. Add the onion, celery, and carrots and cook, covered, stirring occasionally, until soft, about 12 minutes. Add the flour and cook, stirring with a wooden spoon, for two minutes more.",
      "Pour in the stock and bring to a boil while whisking constantly. Tie the parsley sprigs, thyme, and bay leaf together with a piece of kitchen twine and add to the soup. Lower the heat and simmer for 15 mins.",
      "Stir in the chicken and bring to a boil. Remove from the heat.",
      "Whisk the double cream, sherry, and salt into the soup and season with pepper to taste. Remove and discard the herb bundle. Divide among soup bowls, sprinkle the top of each soup with the chopped parsley and serve immediately."
    ],
    origin: "https://foodnetwork.co.uk/recipes/cream-of-chicken-soup/",
    prepTime: 20,
    servings: 8,
    summary:
      "An amazing cream of chicken soup that has also been my base of modification for plenty of other cream soups.",
    tags: ["chicken"],
    title: "Cream of Chicken Soup"
  },
  CreamofAsparagusSoup: {
    cookTime: 25,
    ingredients: [
      {
        amount: 1,
        name: "pound fresh asparagus, trimmed and cut into 1 inch pieces"
      },
      {
        amount: 2,
        name: "cups fake chicken or vegetable broth"
      },
      {
        amount: 0.5,
        name: "cup chopped onion"
      },
      {
        amount: 2,
        name: "tablespoons butter"
      },
      {
        amount: 2,
        name: "tablespoons all-purpose flour"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 1,
        name: "pinch ground black pepper"
      },
      {
        amount: 1,
        name: "cup milk"
      },
      {
        amount: 0.5,
        name: "cup sour cream"
      },
      {
        amount: 1,
        name: "teaspoon fresh lemon juice"
      }
    ],
    instructions: [
      "Combine asparagus, 1/2 cup chicken broth, and onion in a large saucepan; cover and bring to a boil over high heat. Reduce heat to medium-low and simmer, uncovered, until asparagus is tender, about 12 minutes. Transfer the mixture to a blender; puree until smooth and set aside.",
      "In the same saucepan, melt butter over medium-low heat. Stir in flour, salt, and pepper; cook, stirring constantly, for 2 minutes. Increase heat to medium; add remaining chicken broth, stirring constantly, until the mixture boils. Stir in pureed asparagus and milk.",
      "Place sour cream in a small bowl and stir in a ladleful of hot soup until blended; pour into the soup and stir in lemon juice. Warm soup through to serving temperature, without boiling. Serve immediately."
    ],
    origin:
      "https://www.allrecipes.com/recipe/13114/cream-of-fresh-asparagus-soup-ii/",
    prepTime: 15,
    servings: 4,
    summary:
      "This cream of asparagus soup recipe is perfect for making the most of fresh asparagus when it's in season — take advantage!",
    tags: ["vegetarian"],
    title: "Cream of Asparagus Soup"
  },
  CreamofMushroomSoup: {
    cookTime: 15,
    ingredients: [
      {
        amount: 1,
        name: "tablespoon butter"
      },
      {
        amount: 1,
        name: "small onion diced"
      },
      {
        amount: 1,
        name: "pound baby Bella mushrooms sliced"
      },
      {
        amount: 0.25,
        name: "cup flour"
      },
      {
        amount: 1,
        name: "teaspoon Italian seasoning"
      },
      {
        amount: 1,
        name: "teaspoon fresh thyme"
      },
      {
        amount: 3,
        name: "garlic cloves diced"
      },
      {
        amount: 4,
        name: "cups chicken broth"
      },
      {
        amount: 1,
        name: "cup heavy cream"
      },
      {
        name: "salt and pepper"
      }
    ],
    instructions: [
      "In a large pot add the butter, onion and mushrooms. Sauté over medium high until tender. Add in the flour, Italian seasoning, thyme, garlic and salt, pepper and stir until coated.",
      "Add in the chicken broth and simmer over medium high heat for 5-7 minutes. Add in the heavy cream and let simmer for 3-5 more minutes."
    ],
    origin: "https://therecipecritic.com/cream-of-mushroom-soup/",
    prepTime: 5,
    progressPics: 2,
    servings: 4,
    summary:
      "Cream of Mushroom Soup is a dreamy creamy soup full of delicately flavored sautéed mushrooms and herbs. If you love the taste of cream of mushroom soup, but can stand the canned version, this is for you! This is a fancy, thick, rich, restaurant worthy soup you can whip up at home in no time.",
    tags: ["vegetarian"],
    title: "Cream of Mushroom Soup"
  },
  DamnGoodRoastTurkey: {
    cookTime: 120,
    ingredients: [
      {
        name: 'A brine recipe, originally suggested with "Apple Cider Turkey Brine"'
      },
      {
        amount: 1,
        name: "12-pound turkey, thawed"
      },
      {
        name: "As many fresh herbs as will fit into cavity (sage, rosemary, thyme, marjoram, oregano, basil)"
      },
      { amount: 2, name: "cups chicken broth" },
      { amount: 2, name: "tablespoons unsalted butter (melted)" },
      {
        name: "freshly ground black pepper (divided)"
      },
      { amount: 1, name: "teaspoon salt" }
    ],
    instructions: [
      "Remove giblets and neck from turkey, refrigerate until ready to use, and reserve for gravy. Rinse turkey with cold water and pat dry. Trim excess fat. Stuff body cavity with orange quarters. Place a turkey-sized oven bag inside a large stockpot. Place turkey inside bag. Add whatever brine you are using. Squeeze as much air out of bag as possible. twist top and secure with twist tie or tuck end so that it stays put. Refrigerate for 12 to 24 hours, turning occasionally.",
      "To roast the turkey:Preheat oven or grill to 450º.",
      "Remove turkey from and discard your brine. Rinse turkey with cold water and pat dry. Cut a small slit in the breast skin so that you can tuck wing tips under to keep in place. Tie legs together with kitchen string if the turkey didn't already come with a fastener. Place herbs in the cavity of the bird. Pour the broth in the bottom of a roasting pan that will be under the bird (this will also catch the drippings). Place roasting rack in pan if roasting in the oven or if using a rack and roasting pan on your grill. I cooked mine on the trager and put a pan on the grease tray under the rack, and the turkey directly on the rack.",
      "Arrange turkey, breast side down, on roasting rack. Brush turkey with 1 tablespoon of the butter and sprinkle with salt and pepper. Roast at 450º for 30 minutes.",
      "Reduce oven temperature to 350º.",
      "Carefully turn turkey over (breast side up). Brush turkey breast with 1 tablespoon butter; sprinkle with more salt and pepper. Bake at 350º for 1 hour and 15 minutes* or until a thermometer inserted into meaty part of breast registers 150º. Remove turkey from oven, tent with foil with thermometer still inserted, and let stand until internal temperature reads 160-165º , about 20 minutes. Reserve pan drippings for gravy.",
      "Note: for a larger turkey you may need a longer back time as well as a longer rest time"
    ],
    origin: "https://selfproclaimedfoodie.com/damn-good-roast-turkey/",
    prepTime: 30,
    marinadeTime: 1440,
    servings: 8,
    summary:
      "Impress your Thanksgiving guests by serving some Damn Good Roast Turkey. Its unbelievably moist from the brine and flavorful from all the herbs.",
    tags: ["thanksgiving", "turkey"],
    title: "Damn Good Roast Turkey"
  },
  DillPickleRelish: {
    cookTime: 25,
    ingredients: [
      {
        amount: 2.5,
        name: "lbs cucumbers (weighed prior to peeling and seeding),peeled, center row of seeds removed, and finely diced"
      },
      {
        amount: 1,
        name: "large yellow onion ,finely diced"
      },
      {
        amount: 1,
        name: "small red bell pepper ,finely diced"
      },
      {
        amount: 1,
        name: "small green bell pepper ,finely diced"
      },
      {
        amount: 3,
        name: "cloves garlic ,finely minced"
      },
      {
        amount: 0.25,
        name: "cup kosher or pickling salt (neither of these have additives which is important to avoid when canning)"
      },
      {
        amount: 3,
        name: "cups white vinegar"
      },
      {
        amount: 0.5,
        name: "cup sugar (optional or use less according to taste)"
      },
      {
        amount: 2,
        name: "teaspoons dill seeds"
      },
      {
        amount: 1,
        name: "tablespoon yellow mustard seeds"
      },
      {
        amount: 2,
        name: "teaspoons celery seeds"
      },
      {
        amount: 0.5,
        name: "teaspoon turmeric"
      },
      {
        amount: 2,
        name: "bay leaves"
      }
    ],
    instructions: [
      "Place the diced cucumbers, onion, bell pepper, and garlic in a large mixing bowl. Combine with the salt and pour water over the mixture until covered. Let sit for at least 6 hours or overnight.",
      "Drain the cucumber mixture in a colander, rinse thoroughly with water, and drain again.",
      "In a large stock pot, add the sugar, vinegar, and spices and bring to a boil. Reduce the heat to medium-low and simmer for 5 minutes. Add the drained cucumber mixture and return to a boil. Reduce the heat to medium-low and simmer, uncovered, for 10 minutes. Discard the bay leaves.",
      "Ladle the hot relish into hot sterile jars, leaving ¼ inch of headspace. Wipe the rims of the jars clean and seal tightly with the lids.",
      "Process the jars in a boiling water bath for 10 minutes.",
      "Sealed jars will store in a cool, dark place for a year. If the seal is broken, the relish will keep in the fridge for at least a month. Makes 4 pints (you can use pint-sized or half pint jars).  ",
      "Best eaten at least a week later after the flavors have had time to meld and the vinegar mellows out a bit."
    ],
    origin: "https://www.daringgourmet.com/easy-homemade-dill-pickle-relish/",
    prepTime: 30,
    servings: 128,
    summary:
      "An easy, wonderfully versatile and utterly deeeeelicious homemade dill pickle relish recipe! Canning instructions are included so you can enjoy this relish all year long!",
    tags: ["vegan", "vegetarian"],
    title: "Dill Pickle Relish"
  },
  DoubleCrustChickenPotPie: {
    cookTime: 35,
    ingredients: [
      {
        amount: 1,
        name: 'recipe "Buttery Flaky Pie Crust"'
      },
      {
        amount: 1,
        name: "pound skinless boneless chicken breast, cubed"
      },
      {
        amount: 1,
        name: "cup sliced carrots (about 2 carrots)"
      },
      {
        amount: 0.5,
        name: "cup sliced celery (about 1 stalk)"
      },
      {
        amount: 0.5,
        name: "cup unsalted butter"
      },
      {
        amount: 0.5,
        name: "cup chopped onion"
      },
      {
        amount: 1,
        name: "teaspoon minced garlic"
      },
      {
        amount: 0.33,
        name: "cup all-purpose flour"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 0.5,
        name: "teaspoon black pepper"
      },
      {
        amount: 0.5,
        name: "teaspoon dried thyme"
      },
      {
        amount: 1.75,
        name: "cups chicken broth"
      },
      {
        amount: 0.66,
        name: "cup half-and-half"
      },
      {
        amount: 1,
        name: "cup frozen peas"
      },
      {
        amount: 1,
        name: "large egg, beaten"
      },
      {
        name: "sprigs of fresh thyme for garnish (optional)"
      }
    ],
    instructions: [
      "Prepare the pie crust as directed in my pie crust recipe, including chilling for at least 2 hours. I usually make the crust the night before. The pie crust recipe makes 2 crusts and you'll be using both crusts.",
      "In a large saucepan, combine chicken, carrots, and celery. Add water to cover and boil for 12 minutes. Remove from heat, drain, and set aside.",
      "In a large skillet, cook the butter, onions, and garlic over medium heat, stirring occasionally. Cook until the onions are translucent and the butter is lightly browning. Whisk in the flour, salt, black pepper, thyme, chicken broth, and half-and-half. Cook and whisk until no flour lumps remain, then simmer over medium-low heat until thick. I simmer mine for 10 minutes. You want it to be a very thick gravy; simmer longer if necessary. Taste and add more seasonings if you prefer. Sometimes I add more thyme. Remove from heat and set aside.",
      "Preheat oven to 425°F (218°C).",
      "After the pie dough has chilled: On a floured work surface, roll out 1 half of the chilled pie dough. Turn the pie crust dough about a quarter turn after every few rolls until you have a circle 12 inches in diameter. Carefully place the dough into a 9-inch pie dish. Tuck it in with your fingers, making sure it is smooth. With a small and sharp knife, trim the extra overhang of dough and discard. Place the chicken mixture on top. Top with frozen peas. Pour gravy over top. Roll out 2nd half of pie crust dough just as you did the first. Cover the pie with the 2nd crust and trim the extra overhang off the sides. Seal the edges by crimping with a fork or your fingers. With a small and sharp knife, slice a few small slits in the top crust for steam to escape. Using a pastry brush, brush crust and edges with beaten egg.",
      "Bake for 32 - 38 minutes, or until crust is golden brown. I use a pie crust shield to protect the edges from browning too much too soon. Cool for 10 minutes before serving. Makes amazing leftovers– the filling is so thick on the next day! Reheat as desired. Leftovers keep well in the refrigerator in an airtight container for up to 5 days."
    ],
    origin: "https://sallysbakingaddiction.com/double-crust-chicken-pot-pie/",
    prepTime: 170,
    progressPics: 6,
    servings: 6,
    summary:
      "If you're craving comfort food, homemade chicken pot pie is your answer! This completely from scratch recipe is simple to prepare, features a double crust, and nourishes the soul.",
    tags: ["chicken"],
    title: "Double Crust Chicken Pot Pie"
  },
  EnchiladasVerdes: {
    cookTime: 35,
    ingredients: [
      {
        amount: 2,
        name: "bone-in chicken breast halves"
      },
      {
        amount: 2,
        name: "cups chicken broth"
      },
      {
        amount: 1,
        name: "clove garlic"
      },
      {
        amount: 2,
        name: "teaspoons salt"
      },
      {
        amount: 1,
        name: "pound fresh tomatillos, husks removed"
      },
      {
        amount: 5,
        name: "serrano peppers"
      },
      {
        amount: 0.25,
        name: "white onion"
      },
      {
        amount: 1,
        name: "clove garlic"
      },
      {
        amount: 1,
        name: "pinch salt"
      },
      {
        amount: 12,
        name: "corn tortillas"
      },
      {
        amount: 0.25,
        name: "cup vegetable oil"
      },
      {
        amount: 1,
        name: "cup crumbled queso fresco"
      },
      {
        amount: 0.5,
        name: "white onion, chopped"
      },
      {
        amount: 1,
        name: "bunch fresh cilantro, chopped"
      }
    ],
    instructions: [
      "In a saucepan, combine chicken breast with chicken broth, one quarter onion, a clove of garlic, and 2 teaspoons salt. Bring to a boil, and then boil for 20 minutes. Reserve broth, set chicken aside to cool, and discard onion and garlic. When cool enough to handle, shred chicken with your hands.",
      "Place tomatillos and serrano chiles in a pot with water, enough to cover them. Bring to boil, and continue boiling until tomatillos turn a different shade of green (from bright green to a dull, army green). Strain tomatillos and chiles, and place in a blender with another quarter piece of onion, 1 clove garlic, and a pinch of salt. Pour in reserved chicken broth, so that liquid just covers the veggies in the blender by about an inch. Blend all ingredients until they are completely pureed. Pour salsa in a medium saucepan, and bring to a low boil.",
      "Pour oil in a frying pan, and allow to get very hot. Slightly fry tortillas one by one in hot oil, setting each on a paper towel afterwards to soak some of the oil. Finally, dip slightly fried tortillas in low-boiling green salsa, until tortillas become soft again. Place on plates, 3 per person.",
      "Fill or top tortillas with shredded chicken, then extra green sauce. Top with crumbled cheese, chopped onion, and chopped cilantro."
    ],
    origin:
      "https://www.allrecipes.com/recipe/59900/authentic-enchiladas-verdes/",
    prepTime: 45,
    servings: 4,
    summary:
      "These enchiladas are made with a fresh green salsa, just like you would find in a Mexican restaurant or better yet, in a Mexican home.",
    tags: ["chicken"],
    title: "Enchiladas Verdes"
  },
  FrenchFries: {
    cookTime: 60,
    ingredients: [
      {
        amount: 2,
        name: "large russet potatoes"
      },
      {
        amount: 1,
        name: "tablespoon white vinegar"
      },
      {
        amount: 1,
        name: "quart water"
      },
      {
        name: "Peanut oil"
      },
      {
        name: "Table salt"
      }
    ],
    instructions: [
      "Skin the potato if desired and cut into ¼” strips.",
      "Add potato slices, vinegar and water to pot and bring to a boil. Boil for 10 minutes.",
      "While potatoes are boiling heat oil around 400 degrees. The ideal frying temperature is 360 so by heating it hotter the oil should drop into the proper range when frying.",
      "Once potatoes are done boiling let them sit out and dry on paper towels for 5 minutes to prevent a reaction with the oil.",
      "Once dry add the potatoes to the oil and fry for 50 seconds. Try to maintain a temperature near 360 degrees.",
      "Remove fries from oil and let cool.",
      "(Optional) For a fluffier interior, place fries in a container and set in the freezer overnight, or longer.",
      "Heat oil to 400 degrees.",
      "Working in small batches, place frozen fries in hot oil and try to maintain a frying temperature of 360. Fry for 3 ½ minutes or until they are colored to your liking.",
      "Place fries on paper towels to soak up grease and salt immediately and generously with table salt. Fries can be kept warm in 200 degree oven while remaining fries cook."
    ],
    origin:
      "https://www.allrecipes.com/recipe/59900/authentic-enchiladas-verdes/",
    prepTime: 5,
    servings: 2,
    summary:
      "Want to make french fries from scratch but don't like the dark brown soggy fries? This recipe will yield perfectly crisp pale yellow fries that are guaranteed to please.",
    tags: ["vegetarian"],
    title: "French Fries"
  },
  FudgeBrownies: {
    cookTime: 25,
    ingredients: [
      {
        amount: 1,
        name: "cup unsalted butter, melted and cooled"
      },
      {
        amount: 2,
        name: "tablespoons vegetable oil"
      },
      {
        amount: 1.25,
        name: "cups white sugar"
      },
      {
        amount: 1,
        name: "cup packed light brown sugar"
      },
      {
        amount: 4,
        name: "large eggs, at room temperature"
      },
      {
        amount: 1,
        name: "tablespoon pure vanilla extract"
      },
      {
        amount: 0.75,
        name: "teaspoon salt"
      },
      {
        amount: 1,
        name: "cup all purpose flour"
      },
      {
        amount: 1,
        name: "cup good quality, unsweetened cocoa powder"
      },
      {
        amount: 1,
        name: "cup roughly chopped chocolate or large chocolate chips"
      }
    ],
    instructions: [
      "Do NOT over beat your batter once the flour and cocoa powder are added. That creates air pockets in the batter which will give you cake-like textured brownies.",
      "Please try not to over bake them. Set a timer if you need too. I like mine at exactly 23 minutes in an 8x12-inch pan. You can go a little bit over if you like them set a bit more, but I don't recommend it if you're looking for the fudgiest brownies in the world. Remember, they will continue to bake slightly in the hot pan once pulled out of the oven,",
      "I bake my brownies on the top shelf in the oven. I find the middle shelf cooks them a lot faster, slightly burns them on the top and dries them out."
    ],
    origin: "https://cafedelites.com/worlds-best-fudgiest-brownies/",
    prepTime: 10,
    servings: 16,
    summary:
      "Perfect crisp crackly top, super fudgy centre, chewy and gooey in all the right places, studded with melted chunks of chocolate!",
    tags: ["vegetarian", "dessert"],
    title: "Fudge Brownies"
  },
  GarlicShrimpandSobaNoodles: {
    cookTime: 20,
    ingredients: [
      {
        amount: 2,
        name: "ounces soba noodles"
      },
      {
        amount: 1,
        name: "pound medium shrimp, peeled and deveined"
      },
      {
        name: "kosher salt"
      },
      {
        name: "Freshly ground black pepper"
      },
      {
        amount: 0.25,
        name: "cup extra-virgin olive oil"
      },
      {
        amount: 3,
        name: "piece ginger, peeled and cut into matchsticks"
      },
      {
        amount: 1,
        name: 'bunch scallions, cut into 1" pieces'
      },
      {
        amount: 3,
        name: "garlic cloves, thinly sliced"
      },
      {
        amount: 2,
        name: "tablespoon low-sodium soy sauce"
      },
      {
        amount: 2,
        name: "tablespoon dry white wine"
      },
      {
        amount: 2,
        name: "tablespoon honey"
      },
      {
        amount: 2,
        name: "tablespoon sesame oil (optional)"
      }
    ],
    instructions: [
      "In a large pot of boiling water, cook soba noodles according to package directions. Season shrimp with salt and pepper and set aside.",
      "Meanwhile, in a large skillet over high heat, heat oil. Add ginger and cook until softened and flavor infuses oil, 5 minutes. Reduce heat to medium-high and add scallions and garlic. Cook, stirring to prevent garlic from burning, 2 minutes. Add shrimp and sear on both sides until just barely pink. Transfer to a plate.",
      "Add soy sauce, wine, and honey to skillet. Bring to a boil, then reduce to a simmer until mixtures becomes a thick sauce, about 5 minutes. Add shrimp and noodles and toss. Drizzle with sesame oil (if using) and serve."
    ],
    origin:
      "https://www.delish.com/cooking/recipe-ideas/recipes/a45387/garlic-shrimp-soba-noodles-recipe/",
    prepTime: 15,
    servings: 4,
    summary:
      "Not a fan of soba noodles? This super-flavorful shrimp recipe also goes great with angel hair pasta or chow mein noodles.",
    tags: ["fish", "shrimp", "japanese"],
    title: "Garlic Shrimp and Soba Noodles"
  },
  GibletGravy: {
    cookTime: 120,
    ingredients: [
      {
        amount: 1,
        name: "Turkey giblets (from whole turkey, thawed if frozen)"
      },
      {
        amount: 2,
        name: "medium stalks celery, sliced (1 cup)"
      },
      {
        amount: 1,
        name: "medium onion, sliced"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 0.25,
        name: "teaspoon pepper"
      },
      {
        amount: 1,
        name: "Drippings from roasted turkey"
      },
      {
        amount: 0.25,
        name: "cup chicken broth, if needed"
      },
      {
        amount: 0.25,
        name: "cup all-purpose flour"
      },
      {
        name: "Salt and pepper to taste"
      }
    ],
    instructions: [
      "In 2-quart saucepan, place giblets (except liver); add enough water to cover. Add celery, onion, 1 teaspoon salt and 1/4 teaspoon pepper. Heat to boiling; reduce heat to low. Cover and simmer 1 to 2 hours or until giblets are tender. Add liver during last 15 minutes of cooking.",
      "Drain giblet mixture, reserving broth and giblets. Discard celery and onion.",
      "After removing turkey from roasting pan, remove 1/2 cup drippings (turkey juices and fat); reserve. Pour remaining drippings into 2-cup measuring cup; add enough giblet broth and chicken broth to measure 2 cups; set aside.",
      "Place reserved 1/2 cup drippings in roasting pan or 12-inch skillet. Stir in flour. Cook over low heat, stirring constantly and scraping up brown bits in pan, until smooth and browned. Gradually stir in 2 cups broth mixture. Cook, stirring constantly, until mixture boils and thickens. Remove meat from neck; finely chop meat and giblets and add to gravy if desired. Stir in salt and pepper."
    ],
    origin:
      "https://www.bettycrocker.com/recipes/giblet-gravy/8b0a550a-ddf4-4269-afc2-ffa46ec80544",
    prepTime: 15,
    servings: 8,
    summary:
      "We're about to let you in on a secret: The key to smooth and richly flavored turkey gravy lies within the bird itself. We're talking about the giblets. Giblet gravy turns out meaty and luscious, and you can certainly pull it off—even on your first try. We'll show you how it's done with this surefire recipe. Once you get a taste of the depth of flavor that results from turning those odd bits into gravy, you'll never look back. Mashed potatoes and biscuits will forever be better, and your guests will certainly be satisfied!",
    tags: ["turkey", "thanksgiving"],
    title: "Giblet Gravy"
  },
  GyudonBeefBowls: {
    cookTime: 50,
    ingredients: [
      {
        amount: 1,
        name: "lb. thinly sliced beef"
      },
      {
        amount: 0.5,
        name: "medium onion"
      },
      {
        amount: 2,
        name: "cups water"
      },
      {
        amount: 1,
        name: "tablespoons dashi broth granules"
      },
      {
        amount: 0.33,
        name: "cup soy sauce"
      },
      {
        amount: 0.25,
        name: "cup mirin"
      },
      {
        amount: 1,
        name: "tablespoon honey"
      }
    ],
    instructions: [
      "In a medium to large sized pot over medium heat, add all liquid ingredients.",
      "Chop onion into chunks. Set aside.",
      "Cut hot pot beef slices in half.",
      "Add beef slices to the pot, stirring occasionally to loosen the pieces so they do not stick together.",
      "Bring to a boil.",
      "Reduce heat to simmer and cover the pot with a lid, leaving a narrow gap for steam to escape. Simmer for 45 minutes.",
      "Remove pot lid and add onions. Cook another 5-10 minutes.",
      "Using tongs or a straining spoon, serve beef and onions over hot rice. Spoon some of the sauce over the beef.",
      "Garnish with pickled ginger and Sichimi Togarashi (Japanese chili pepper seasoning), if desired."
    ],
    origin: "https://www.adayinthekitchen.com/japanese-gyudon-beef-bowls/",
    prepTime: 15,
    progressPics: 6,
    servings: 4,
    summary:
      "Beef gyudon bowls are full of satisfying and tasty comfort! A dish full of flavorful beef and onions on hot steamed rice is sure to hit the spot any day of the week!",
    tags: ["beef", "japanese"],
    title: "Gyudon Beef Bowls"
  },
  InariAge: {
    cookTime: 40,
    ingredients: [
      {
        amount: 6,
        name: "pieces aburaage (deep-fried tofu pouch)"
      },
      {
        amount: 1.5,
        name: "cups Awase dashi (use kombu dashi for vegan/vegetarian)"
      },
      {
        amount: 3,
        name: "Tbsp soy sauce"
      },
      {
        amount: 3,
        name: "Tbsp mirin"
      },
      {
        amount: 3,
        name: "Tbsp sugar"
      }
    ],
    instructions: [
      "Bring a medium saucepan of water to a boil. Before you start, I want you to consider doubling the ingredients, especially if you're making Inari Sushi. Why? The aburaage is very fragile and you may end up breaking the pouches and making holes. It's always nice to have backup pouches!",
      "Cut the aburaage in half. Gently open the aburaage pouches all the way to the bottom. It's easier to separate the skin at this step than trying to open it after simmering.",
      "If a pouch is hard to open, gently roll it with a chopstick. This helps to rub against the tofu pouches and it might help you to open the pouch.",
      "When water is boiling, cook the aburaage for 2 minutes, pressing down and turning over. This helps remove the (factory's deep fry) oil from the aburaage.",
      "Drain the aburaage into a sieve and rinse the saucepan. Gently press the aburaage with a ladle to squeeze water out. Do not press hard as the aburaage will tear easily.",
      "In the same saucepan, combine dashi, soy sauce, mirin, and sugar, and bring to a boil.",
      "Once boiling, add the aburaage to the saucepan. It's easy to flip the aburaage when you arrange the pouches in a circular/petal-like shape.",
      "Place the otoshibuta (drop lid) on top of the aburaage and cook on medium-low heat for 30-40 minutes. Flip the aburaage occasionally to make sure it's simmered evenly. When the liquid is going down fast, your heat is probably too high so reduce the stove's heat to low.",
      "When the cooking liquid is ¼-½ inches (1 cm) in the saucepan, remove the saucepan from the heat. Let the aburaage soak in the cooking liquid and let cool completely."
    ],
    origin: "https://www.justonecookbook.com/inari-age/",
    prepTime: 5,
    progressPics: 9,
    servings: 12,
    summary:
      "Simmered in sweet and savory dashi-based broth, Inari Age is seasoned deep-fried tofu pockets used for making Inari Sushi and Kitsune Udon.",
    tags: ["vegetarian", "vegan", "japanese"],
    title: "Inari Age"
  },
  IrikoDashi: {
    cookTime: 45,
    ingredients: [
      {
        amount: 0.5,
        name: "cup iriko or niboshi (dried baby sardines/anchovies)"
      },
      {
        amount: 4,
        name: "cups water"
      }
    ],
    instructions: [
      "I highly recommend removing the head and gut from the fish to reduce bitter flavor in iriko dashi. First, remove the head, and then around the belly area (bottom side), take out the gut inside (black color).",
      "Continue with the rest of the iriko/niboshi. Discard the head and guts.",
      "Soak the iriko/niboshi in the water for 20-30 minutes, preferably overnight.",
      "Transfer the water and iriko/niboshi into a small saucepan and slowly bring the water to a boil.",
      "When boiling, skim and reduce heat to low and cook for 8-10 minutes.",
      "Remove from the heat and drain into a fine-mesh sieve over a bowl or measuring cup. Any extra dashi needs to be refrigerated and used within 3-5 days or freeze for later use."
    ],
    origin: "https://www.justonecookbook.com/how-to-make-dashi-jiru/",
    prepTime: 10,
    progressPics: 7,
    servings: 1,
    summary:
      "Learn how to make Iriko Dashi (Niboshi Dashi), a Japanese anchovy stock made by boiling dried anchovies. This stock is fundamental to enhancing your miso soup for authentic flavor!",
    tags: ["fish", "japanese"],
    title: "Iriko Dashi"
  },
  KatsudonJapanesePorkCutletandEggRiceBowl: {
    cookTime: 20,
    ingredients: [
      {
        amount: 2,
        name: "center-cut boneless pork chops, pounded down to a centimeter thick"
      },
      {
        name: "salt and pepper"
      },
      {
        name: "flour (for dusting)"
      },
      {
        amount: 1,
        name: "egg"
      },
      {
        amount: 1,
        name: "cup panko"
      },
      {
        name: "oil (for frying)"
      },
      {
        amount: 0.5,
        name: "cup Awase dashi or chicken stock"
      },
      {
        amount: 2,
        name: "teaspoons sugar"
      },
      {
        amount: 1,
        name: "tablespoon soy sauce"
      },
      {
        amount: 2,
        name: "teaspoons Mirin"
      },
      {
        amount: 2,
        name: "large eggs"
      },
      {
        amount: 1,
        name: "medium onion (thinly sliced)"
      },
      {
        amount: 2,
        name: "servings steamed white rice"
      },
      {
        amount: 1,
        name: "scallion (chopped)"
      }
    ],
    instructions: [
      "Season the pounded pork chops with salt and pepper, and dust with a light, even coating of flour. In one shallow bowl, beat the egg. Put the panko into another shallow bowl.",
      "Add thin, even layer of oil to a cast iron pan or skillet over medium heat. The oil is ready when you throw a panko breadcrumb into the oil and it sizzles. Dip the pork into the egg to coat. Transfer the pork to the panko and press it evenly into the meat to get a good coating.",
      "Carefully lay the pork chops in the hot oil and cook for 5-6 minutes on one side, until golden brown. Flip and cook the other side for another 5-6 minutes. Drain on a plate lined with a paper towel.",
      "While the pork is resting, add the stock, sugar, soy sauce, and Mirin to a small bowl. In another bowl, lightly beat 2 eggs. Add a tablespoon of oil to a pan over medium heat, and add the sliced onion. Fry the onions until they're translucent and slightly caramelized.",
      "Pour the stock mixture over the onions. Slice your tonkatsu into pieces and place on top of the onions. Drizzle the egg over everything. Cook over medium low heat until the egg is just set. Serve over bowls of steamed rice, and garnish with scallions."
    ],
    origin: "https://thewoksoflife.com/katsudon/",
    prepTime: 20,
    progressPics: 7,
    servings: 2,
    summary:
      "Katsudon is a fried, panko-breaded pork cutlet with egg over rice and a favorite of Japanese restaurant-goers. Our Katsudon recipe is easy to make at home!",
    tags: ["pork", "japanese"],
    title: "Katsudon Japanese Pork Cutlet and Egg Rice Bowl"
  },
  KatsuoDashi: {
    cookTime: 0,
    ingredients: [
      {
        amount: 2,
        name: "cups katsuobushi (dried bonito flakes), packed"
      },
      {
        amount: 4,
        name: "cups water"
      }
    ],
    instructions: [
      "In a medium pot, bring water to a boil.",
      "Just before water starts boiling, add the katsuobushi and bring it to a boil again, skimming occasionally.",
      "Once the dashi is boiling, reduce the heat, simmer for just 30 seconds, and turn off the heat.",
      "Let the katsuobushi sink to the bottom, about 10 minutes.",
      "Strain the dashi through a fine-mesh sieve over a bowl or measuring cup."
    ],
    origin: "https://www.justonecookbook.com/how-to-make-dashi-jiru/",
    prepTime: 15,
    progressPics: 4,
    servings: 1,
    summary:
      "Learn how to make Katsuo Dashi, a Japanese soup stock made from dried bonito flakes. With its savory and distinct umami aroma, this soup stock is a game changer in your Japanese cooking, and can turn a lackluster ramen bowl into something extraordinary!",
    tags: ["fish", "japanese"],
    title: "Katsuo Dashi"
  },
  KitsuneUdon: {
    cookTime: 10,
    ingredients: [
      {
        amount: 2.5,
        name: "cups Awase Dashi (for vegetarian, use Kombu Dashi or Shitake Dashi)"
      },
      {
        amount: 1,
        name: "Tbsp mirin"
      },
      {
        amount: 1,
        name: "tsp sugar"
      },
      {
        amount: 1,
        name: "Tbsp usukuchi (light-colored) soy sauce"
      },
      {
        amount: 0.5,
        name: "tsp kosher salt (Diamond Crystal; use half for table salt)"
      },
      {
        amount: 2,
        name: "servings udon noodles"
      },
      {
        amount: 4,
        name: 'Inari age (seasoned fried tofu pouch) (you can buy them oror use the "Inari age" recipe)'
      },
      {
        amount: 1,
        name: "green onion / scallion"
      },
      {
        amount: 4,
        name: "slices narutomaki (fish cakes) (skip for vegetarian/vegan)"
      },
      {
        name: "shichimi togarashi (optional)"
      }
    ],
    instructions: [
      "In a saucepan, add the dashi, mirin, sugar, soy sauce, and salt and bring it to a boil. Once boiling, turn off the heat or cover and keep on a low simmer.",
      "Squeeze the excess liquid from the Inari age (or you can keep it as is). Cut the green onion into thin slices. Cut the narutomaki fish cake into ⅛-inch (3 mm) slices.",
      "Bring a large pot of water to a boil for the udon noodles. My favorite udon is frozen Sanuki udon. Reheat the frozen udon noodles in boiling water for 1 minute (no need to defrost). If you use dry noodles, follow the package instructions.",
      "Pick up the noodles in a strainer or drain the hot water. Make sure to shake off the excess water (which will end up diluting your soup).",
      "Divide the drained udon noodles into individual serving bowls. Pour the hot broth over the noodles to cover. Top with the Inari age, narutomaki, and green onions. Sprinkle the shichimi togarashi on top (optional)."
    ],
    origin: "https://www.justonecookbook.com/kitsune-udon/",
    prepTime: 10,
    progressPics: 5,
    servings: 2,
    summary:
      "Kitsune Udon is a Japanese noodle soup in dashi broth, topped with seasoned fried tofu, pink-swirl narutomaki fish cake, and scallions. This hearty udon soup is one of the most popular, classic Japanese noodle dishes.",
    tags: ["fish", "vegetarian", "vegan", "japanese"],
    title: "Kitsune Udon"
  },
  KombuDashi: {
    cookTime: 15,
    ingredients: [
      {
        amount: 10,
        name: "g kombu (dried kelp)"
      },
      {
        amount: 4,
        name: "cups water"
      }
    ],
    instructions: [
      "Most Japanese recipes say to gently clean the kombu with a damp cloth. However, these days, kombu is pretty clean so just make sure it doesn't have any mold spots and it's ready to use. Do not wash or wipe off the white powdery substance as it has lots of umami.",
      "Make a couple of slits on the kombu to release more flavor.",
      "Put the kombu and water in a medium pot. If you have time, soak for 3 hours or up to a half day. The kombu's flavor comes out naturally from soaking in water.",
      "Turn on the heat to medium low and slowly bring to a bare simmer, about 10 minutes. ",
      "Meanwhile, clean the dashi by skimming the foam from the surface with a fine-mesh skimmer.",
      "Just before the dashi starts boiling, remove the kombu from the pot (see below for what to do with it). If you leave the kombu in the pot, the dashi will become slimy and bitter. ",
      "Now the Kombu Dashi is ready to use."
    ],
    origin: "https://www.justonecookbook.com/how-to-make-dashi-jiru/",
    prepTime: 5,
    progressPics: 6,
    servings: 1,
    summary:
      "Learn how to make Kombu Dashi, a vegan-friendly Japanese soup stock, at home and enhance your Japanese dishes with umami flavor!",
    tags: ["vegetarian", "vegan", "japanese"],
    title: "Kombu Dashi"
  },
  MapleTurkeyBrine: {
    cookTime: 20,
    ingredients: [
      {
        amount: 4,
        name: "quarts water, divided"
      },
      {
        amount: 2,
        name: "cups dark brown sugar"
      },
      {
        amount: 1,
        name: "cup soy sauce"
      },
      {
        amount: 1,
        name: "cup maple syrup"
      },
      {
        amount: 0.75,
        name: "cup sea salt"
      },
      {
        amount: 8,
        name: "cloves whole garlic cloves, peeled"
      },
      {
        amount: 6,
        name: "bay leaves"
      },
      {
        amount: 3,
        name: "large fresh thyme sprigs"
      },
      {
        amount: 2,
        name: "teaspoons whole black peppercorns"
      },
      {
        amount: 1,
        name: "cup sour mash whiskey"
      }
    ],
    instructions: [
      "Place 2 quarts of water in a large pot over medium heat, and stir in brown sugar, soy sauce, maple syrup, sea salt, garlic cloves, bay leaves, thyme sprigs, peppercorns, and whiskey. Stir to dissolve brown sugar and salt; bring to a boil. Remove from heat, and stir in remaining 2 quarts of water. Allow brine to cool completely before using."
    ],
    origin: "https://www.allrecipes.com/recipe/219475/maple-turkey-brine/",
    prepTime: 15,
    progressPics: 1,
    servings: 18,
    summary:
      "This is Dave's favorite brine for Thanksgiving turkey. It can be used on any kind of poultry and pork. It gives a sweet, maple flavor to meats.",
    tags: ["vegetarian", "vegan", "turkey", "thanksgiving"],
    title: "Maple Turkey Brine"
  },
  MapoTofu: {
    cookTime: 10,
    ingredients: [
      {
        amount: 450,
        name: "g soft tofu"
      },
      {
        amount: 100,
        name: "g minced meat-beef or pork"
      },
      {
        amount: 0.5,
        name: "tbsp. sesame oil"
      },
      {
        amount: 0.5,
        name: "tsp. salt"
      },
      {
        amount: 3,
        name: "tbsp. cooking oil , divided"
      },
      {
        amount: 1.5,
        name: "tbsp. Doubanjiang ,roughly chopped"
      },
      {
        amount: 0.5,
        name: "tbsp. Dou-Chi, roughly chopped"
      },
      {
        amount: 1,
        name: "tbsp. pepper flakes or powder ,optional"
      },
      {
        amount: 0.5,
        name: "tbsp. Sichuan pepper for making fresh ground powder"
      },
      {
        name: "water or broth for braising ,I use 400ml this time"
      },
      {
        amount: 1,
        name: "tbsp. light soy sauce"
      },
      {
        amount: 1,
        name: "tsp. sugar, optional for reducing the spiciness"
      },
      {
        amount: 2,
        name: "scallion whites ,finely chopped"
      },
      {
        amount: 4,
        name: "garlic greens or scallion greens ,finely chopped"
      },
      {
        amount: 2,
        name: "garlic cloves ,finely chopped"
      },
      {
        amount: 5,
        name: "ginger slices ,finely minced"
      }
    ],
    instructions: [
      "Add a small pinch of salt and ground pepper. Mix well and set aside.",
      "Cut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain. This helps to remove the raw soy flavor form tofu.",
      "Get a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out and leave the oil in.",
      "Add another 1 tablespoon of vegetable cooking oil and fry doubanjiang for 1 minute over slow fire until the red turns red (bring us a lovely red color dish) and add fermented black beans,  garlic, scallion white and ginger, cook for 30 seconds until aroma. Optionally mix pepper flakes in. Pepper flakes should be added at the end because it contains little water and can be burnt easily.",
      "Pour in water or stock. Add light soy sauce, sugar and half of the cooked beef (providing more flavors to the soup) after the broth boils and let it continue simmering for 2-3 minutes. Place the tofu in, simmer for another 6-8 minutes. The longer time of simmering helps the tofu to absorb the flavors.",
      "During the process of simmering, mix 1 tablespoon of cornstarch with 2.5 tablespoons of water in a small bowl to make water starch. Stir the water starch and then pour half of the mixture to the simmering pot. Back push and wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough.  Add cooked beef to creates some crispy texture and then drizzle sesame oil. Mix well.",
      "Transfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.",
      "Serve immediately with steamed rice."
    ],
    origin: "https://www.chinasichuanfood.com/mapo-tofu-recipe/",
    prepTime: 10,
    progressPics: 6,
    servings: 2,
    summary:
      "Authentic Szechuan style mapo tofu is one of the branding dishes of Szechuan cuisine. Mapo tofu is one of the top ten famous Chinese dishes and enjoys a high popularity among not only Chinese people but also many western countries. Personally I like to cook this dish at home from time to time especially in cool seasons such as winter and fall. Do you love it?",
    tags: ["beef", "pork", "szechuan"],
    title: "Mapo Tofu"
  },
  MushroomGravy: {
    cookTime: 45,
    ingredients: [
      {
        amount: 0.25,
        name: "cup olive oil or non-dairy butter"
      },
      {
        amount: 1,
        name: "pound sliced mushrooms (white or baby bellas)"
      },
      {
        amount: 0.25,
        name: "cup all-purpose flour, or as needed"
      },
      {
        amount: 4,
        name: "cups mushroom or vegetable broth"
      },
      {
        name: "mineral salt & fresh ground black pepper, to taste"
      },
      {
        amount: 0.5,
        name: "teaspoons fresh thyme leaves, or to taste (optional)"
      }
    ],
    instructions: [
      "Heat oil over medium heat, add mushrooms and season with a pinch of salt. Simmer mushrooms, stirring occasionally, until liquid is almost evaporated, about 15 minutes.",
      "Add flour, continue cooking and stirring for about 3 - 5 minutes, at least until the flour has been absorbed and not white anymore. Add 1 cup of broth, stirring/whisking briskly until incorporated and liquid has thickened, there should be no flour lumps, about 5 minutes.",
      "Slowly pour in the remaining broth and mix thoroughly. Season with black pepper and thyme. Simmer at a gentle boil over medium-low until thickened, about 20 minutes, stirring often. Gravy will thicken upon standing. Taste for flavor, adding more salt and pepper as needed."
    ],
    origin: "https://simple-veganista.com/vegan-mushroom-gravy/",
    prepTime: 5,
    progressPics: 3,
    servings: 8,
    summary:
      "Vegan Mushroom Gravy - With only 5 ingredients, not including salt & pepper, this easy mushroom gravy recipe is rich and creamy. It's dairy free, can be gluten free, and pretty much the best mushroom gravy ever!",
    tags: ["vegetarian", "vegan", "thanksgiving"],
    title: "Mushroom Gravy"
  },
  MushroomRisotto: {
    cookTime: 30,
    ingredients: [
      {
        amount: 8,
        name: "cup chicken or vegetable broth"
      },
      {
        amount: 1,
        name: "tablespoons extra-virgin olive oil"
      },
      {
        amount: 1,
        name: "onion finely chopped"
      },
      {
        amount: 2,
        name: "tablespoons butter divided"
      },
      {
        amount: 2,
        name: "cloves garlic minced"
      },
      {
        amount: 1,
        name: "pound button mushrooms sliced"
      },
      {
        amount: 1,
        name: "tbsp fresh thyme stems removed and minced"
      },
      {
        name: "salt and pepper"
      },
      {
        amount: 2,
        name: "cups arborio rice"
      },
      {
        amount: 0.5,
        name: "cup white wine"
      },
      {
        amount: 1,
        name: "cup Fresh Parmesan Cheese grated"
      },
      {
        amount: 0.75,
        name: "cup frozen peas thawed"
      },
      {
        amount: 2,
        name: "tablespoons chopped fresh parsley"
      }
    ],
    instructions: [
      "Start by warming the chicken broth.  Either in a large bowl in the microwave or in a medium saucepan over medium heat bring to a simmer.",
      "In a large pot heat the olive oil.  Add the onion and cook until tender.  Add 1 tbsp butter, garlic, mushrooms and thyme.  Cook until the mushrooms have softened and are tender.  Season with salt and pepper.  Remove and set aside on a plate.",
      "Melt the remaining 1 tbsp butter and add the arborio rice.  Stirring on medium heat, cook the grains until the are lightly brown and start to toast about 2 minutes.  Add the wine and cook until the wine has absorbed.",
      "Add one cup of broth at a time to the rice and stir frequently until the rice absorbs the liquid.  Continue to add one cup of broth and allow the rice to absorb after each addition.  Stir often and cook until the risotto is al dente and not mushy.  You may not need all of the broth.",
      "Add the mushrooms, parmesan, and peas back to the rice and stir.  Garnish with fresh parsley.  Serve while warm."
    ],
    origin: "https://therecipecritic.com/mushroom-risotto/",
    prepTime: 5,
    progressPics: 1,
    servings: 4,
    summary:
      "Mushroom Risotto is soft short grained rice with flavorful button mushrooms, crunchy peas combined to make one of the Best side dishes your family will love! The flavor combination is amazing! ",
    tags: ["vegetarian", "vegan"],
    title: "Mushroom Risotto"
  },
  OnsenTamago: {
    cookTime: 20,
    ingredients: [
      {
        amount: 4.25,
        name: "cups water"
      },
      {
        amount: 0.75,
        name: "cup tap water"
      },
      {
        amount: 4,
        name: "large eggs"
      }
    ],
    instructions: [
      "You will need a small heavy-bottomed saucepan (I use 1.5 QT); you will need to cover the eggs completely with the water.",
      "Add the water to the saucepan, cover with a tight-fitting lid, and bring it to a boil.",
      "Once boiling, remove the pot from the heat. Take the eggs out of the refrigerator. Add the cold tap water to the pot and gently submerge the cold eggs in the hot water. Immediately cover and set the timer for 17 minutes.",
      "Once 17 minutes have passed, gently take the eggs out of the water and set them aside for 5 minutes.",
      "You can enjoy the onsen tamago either warm or at room temperature."
    ],
    origin: "https://www.justonecookbook.com/onsen-tamago/",
    prepTime: 10,
    progressPics: 4,
    servings: 4,
    summary:
      "Onsen Tamago literally means 'hot spring eggs' in Japanese. It refers to eggs that are slowly cooked in hot spring water to create silky egg whites and custard-like yolk. Here's how you can make this delicious egg recipe at home.",
    tags: ["vegetarian", "japanese"],
    title: "Onsen Tamago"
  },
  OnsenTamagoSauce: {
    cookTime: 1,
    ingredients: [
      {
        amount: 0.25,
        name: "cup Awase dashi (use kombu dashi for vegetarian)"
      },
      {
        amount: 0.5,
        name: "Tbsp mirin"
      },
      {
        amount: 1.5,
        name: "Tbsp soy sauce"
      },
      {
        amount: 0.33,
        name: "cup katsuobushi (dried bonito flakes) (skip for vegetarian)"
      },
      {
        name: "green onion/scallion (for garnish)"
      }
    ],
    instructions: [
      "Combine the dashi, mirin, and soy sauce in a small saucepan and bring it to a boil. Add the katsuobushi, turn off the heat, and let the katsuobushi sink to the bottom of the pan. After 30 seconds or so, strain through a sieve and set the sauce aside. You can keep the sauce in the refrigerator for 4-5 days.",
      "Cut the scallion into thin slices and set aside.",
      "Crack the egg into a small bowl, pour the sauce into the bowl, and garnish with the sliced scallion"
    ],
    origin: "https://www.justonecookbook.com/onsen-tamago/",
    prepTime: 1,
    progressPics: 1,
    servings: 4,
    summary:
      "A dashi-based soy sauce (だし醤油) which is usually served as a part of Japanese breakfast.",
    tags: ["vegetarian", "japanese"],
    title: "Onsen Tamago Sauce"
  },
  Oyakodon: {
    cookTime: 15,
    ingredients: [
      {
        amount: 2,
        name: "boneless, skinless chicken thighs"
      },
      {
        amount: 0.5,
        name: "onion"
      },
      {
        amount: 2,
        name: "large eggs"
      },
      {
        amount: 0.5,
        name: "cup dashi"
      },
      {
        amount: 1.5,
        name: "Tbsp mirin"
      },
      {
        amount: 1.5,
        name: "Tbsp sake"
      },
      {
        amount: 1.5,
        name: "Tbsp soy sauce"
      },
      {
        amount: 1.5,
        name: "tsp sugar"
      },
      {
        amount: 2,
        name: "servings cooked Japanese short-grain rice"
      },
      {
        amount: 2,
        name: "sprigs mitsuba or green onion/scallion"
      },
      {
        name: "shichimi togarashi (optional)"
      }
    ],
    instructions: [
      "Combine the dashi, mirin, sake, and soy sauce in a bowl or a liquid measuring cup.",
      "Add the sugar and mix all together until the sugar is dissolved. Depending on the size of your frying pan, you may not need all the broth. You can keep the leftovers in the refrigerator for 3 days.",
      "Thinly slice the onion and chop the mitsuba (or green onions). Beat one egg in a small bowl (you will need to beat the other egg when you work on the second batch).",
      "Slice the chicken thighs diagonally into pieces that are about 1½-inches (4 cm) long and ½-inch (1.3 cm) thick. I recommend using the “sogigiri” cutting technique so the chicken pieces will be of equal thickness and to create more surface area for fast cooking.",
      "Typically, Oyakodon is made individually for each serving, using an oyakodon pan. This small pan lets you slide the finished dish onto the rice bowl easily while the egg is set but still runny. Divide the ingredients in half or, alternatively, you can cook 2 servings together in a bigger pan.",
      "With the stove off, add 1 serving of the sliced onions to the pan in a single layer. Add roughly one-third to one-half of the seasonings mixture (the amount may vary depending on the size of your frying pan). Pour just enough on top to cover the onions.",
      "Add 1 serving of the chicken on top of the onions. Make sure the onions and chicken are evenly distributed. Then, turn on the heat to medium and bring it to a boil.",
      "Once boiling, lower the heat to medium low. Skim off any foam or scum that appears. Cover and cook for about 5 minutes or until the chicken is no longer pink and the onions are tender.",
      "Taste the broth and see if you need to adjust. Slowly drizzle the beaten egg evenly over the chicken and onions. Cook covered on medium-low heat until the egg is done to your liking. Usually, oyakodon in Japan is served while the egg is almost set but still runny.",
      "Add the mitsuba (or green onion) right before removing from the heat. Slide the cooked chicken and egg onto the steamed rice and drizzle the desired amount of remaining sauce on top."
    ],
    origin: "https://www.justonecookbook.com/oyakodon/",
    prepTime: 15,
    progressPics: 8,
    servings: 2,
    summary:
      "Oyakodon is cooked in one pan where onions, chicken, and egg are simmered in an umami-rich, dashi-based sauce. It is then poured over a bowl of fluffy steamed rice. Simple, delicious, and utterly comforting, this is the kind of one-bowl meal you can cook in less than 30 minutes!",
    tags: ["chicken", "japanese"],
    title: "Oyakodon"
  },
  RoastedThanksgivingTurkey: {
    cookTime: 300,
    ingredients: [
      {
        amount: 1,
        name: "whole 20 pound turkey, brined if desired"
      },
      {
        amount: 0.5,
        name: "cups butter, softened"
      },
      {
        amount: 1,
        name: "whole orange"
      },
      {
        amount: 2,
        name: "whole fresh rosemary sprigs, leaves stripped and minced"
      },
      {
        amount: 1,
        name: "teaspoon salt"
      },
      {
        amount: 1,
        name: "teaspoon black pepper"
      }
    ],
    instructions: [
      "Preheat oven to 275.",
      "If you brined your turkey, rinse it well under cold water. Fill the sink with fresh cold water and allow the turkey to soak for 15 to 20 minutes to remove any saltiness. Pat the turkey dry and place it on a roasting rack, breast side up. Cross the legs and tie them together with kitchen twine. Cover the whole pan with heavy aluminum foil, tucking it underneath the pan. Roast for the first stage for about 10 minutes per pound (so, for a 20 pound turkey, about 3 1/2 hours.)",
      "Using a vegetable peeler, shave off thick slices of orange peel and slice them very thin. Combine with butter, rosemary, salt and pepper.",
      "After the first stage of cooking, remove the turkey from the oven and remove the foil (turkey will still be pale.) Smear the butter mixture all over the skin, in crevices, etc so that it's totally covered. Insert a meat thermometer into the thigh, increase the oven temperature to 350, and return the turkey to the oven, basting every 30 minutes. Continue roasting the turkey until the thermometer reads 165 to 168, then remove the turkey from the oven. Cover loosely with clean aluminum foil until you're ready to carve!"
    ],
    origin:
      "https://www.thepioneerwoman.com/food-cooking/recipes/a11883/roasted-thanksgiving-turkey/",
    prepTime: 10,
    progressPics: 8,
    servings: 16,
    summary: "It turns out beautiful every time!",
    tags: ["turkey", "thanksgiving"],
    title: "Roasted Thanksgiving Turkey"
  },
  SavoryChickenMarinade: {
    cookTime: 10,
    ingredients: [
      {
        amount: 2,
        name: "lbs. Chicken Breasts Tenders, or Thighs"
      },
      {
        amount: 0.5,
        name: "cup Extra Virgin Olive Oil depending on preference"
      },
      {
        amount: 3,
        name: "Tablespoons Fresh Lemon Juice"
      },
      {
        amount: 3,
        name: "Tablespoons Soy Sauce"
      },
      {
        amount: 2,
        name: "Tablespoons Balsamic Vinegar"
      },
      {
        amount: 0.25,
        name: "cup Brown Sugar"
      },
      {
        amount: 1,
        name: "Tablespoon Worcestershire Sauce"
      },
      {
        amount: 3,
        name: "Garlic Cloves minced or ½ teaspoon Garlic Powder"
      },
      {
        amount: 1.5,
        name: "teaspoon Salt"
      },
      {
        amount: 1,
        name: "teaspoon Pepper"
      },
      {
        name: "Fresh Parsley (garnish)"
      }
    ],
    instructions: [
      "In a bowl, stir together oil, lemon juice, soy sauce, balsamic vinegar, brown sugar, Worcestershire sauce, garlic, salt, and pepper.",
      "Pierce chicken breasts with a fork all over. Place in a large Ziploc bag. Pour marinade over chicken.",
      "Let marinate for at least 30 minutes. 4 - 5 hours is ideal.",
      "Preheat grill to medium heat. Brush grill with oil to prevent sticking.",
      "Place chicken on the grill. Cook for approximately 5 - 6 minutes per side, depending on the thickness of chicken. The internal temperature of the chicken should reach 165 degrees.",
      "Remove chicken from grill and let rest for 5 minutes."
    ],
    marinadeTime: 240,
    origin: "https://www.modernhoney.com/the-best-chicken-marinade-recipe/",
    prepTime: 10,
    servings: 6,
    summary:
      "The Best Chicken Marinade Recipe makes chicken extra juicy and flavorful. This savory marinade makes grilled chicken mouthwatering!",
    tags: ["chicken"],
    title: "Savory Chicken Marinade"
  },
  ShiitakeDashi: {
    cookTime: 15,
    ingredients: [
      {
        amount: 6,
        name: "dried shiitake mushrooms"
      },
      {
        amount: 4,
        name: "cups water"
      }
    ],
    instructions: [
      "Check if there are any dust or dirt trapped under the gills of the mushrooms, and if there are, use a pastry brush to clean. Do not wash it under water.",
      "Soak the shiitake mushrooms in 4 cups water. If you have time, let them soak in the refrigerator for a few hours or preferably overnight. If you're in a hurry, soak them in warm water for 15 minutes or until softened.",
      "Soak for several hours",
      "When shiitake mushrooms are tender, squeeze to drain, reserving the liquid.",
      "Rehydrated shiitake mushrooms are ready to use. Remove and discard the tough stem of the mushrooms with a knife. You can use these rehydrated shiitake mushrooms as if you use raw shiitake mushrooms.",
      "Run the soaking liquid through a fine sieve."
    ],
    origin: "https://www.justonecookbook.com/how-to-make-dashi-jiru/",
    prepTime: 5,
    progressPics: 6,
    servings: 1,
    summary:
      "Aside from kombu dashi, shiitake dashi is another great option for vegetarians and vegans to make Japanese stock. To make flavorful and intense shiitake dashi, it is as simple as soaking dried shiitake mushrooms in water.",
    tags: ["vegetarian", "vegan", "japanese"],
    title: "Shiitake Dashi"
  },
  SimmeredKonnyakuwithBeef: {
    cookTime: 120,
    ingredients: [
      {
        amount: 1,
        name: "block konnyaku or 1 package shirataki"
      },
      {
        amount: 4,
        name: "ounces stewing beef, cut into 1/2 inch cubes"
      },
      {
        amount: 3,
        name: "tablespoons cooking oil or fat, for pan-frying"
      },
      {
        amount: 3,
        name: "cups dashi"
      },
      {
        amount: 2,
        name: "tablespoons soy sauce"
      },
      {
        amount: 2,
        name: "tablespoons sake"
      },
      {
        amount: 2,
        name: "tablespoons mirin"
      },
      {
        amount: 1,
        name: "teaspoon sugar"
      },
      {
        amount: 2,
        name: "tablespoons brown or red miso paste, or to taste"
      }
    ],
    instructions: [
      "Bring a medium-sized pot of water to boil. Add the whole block of konnyaku or the package of shirataki and parboil for 10 minutes. Drain and discard the water.",
      "Cut the konnyaku lengthwise into two rectangular blocks, then cut each block into pieces 1/2-inch thick. Score each piece in a cross-hatch pattern to allow the flavors of the simmering liquid to penetrate more deeply. Set aside. If using shirataki, set aside.",
      "Place a heavy pan, such as a cast iron skillet, over high heat. Add cooking oil or fat to the pan. Add the cubed beef to the pan and lightly brown on two sides; then remove with a slotted spoon. Using the remaining fat in the pan, lightly saute the parboiled and drained konnyaku or shirataki so that the surface is blistered and slightly browned. Remove and set aside.",
      "Place the beef and the konnyaku or shirataki along with all the marinade ingredients into a medium saucepan. Bring the pot to a boil; then lower the heat to a simmer and cook for 1 to 1 1/2 hours, until the beef and konnyaku are tender. For a vegetarian option, substitute daikon and lotus root for the beef and add the vegetables during the latter half of simmering.",
      "Add the miso paste to the simmering liquid and stir to dissolve. Simmer for a few minutes, correcting for taste. Depending on how salty your soy sauce and miso paste are, you may need to add a teaspoon or more of sugar. Serve hot.",
      "Note: The squares of konnyaku may be browned in a hot cast iron pan, or set under the broiler for a few minutes to recrisp the surface."
    ],
    origin:
      "https://www.seriouseats.com/seriously-asian-simmered-konnyaku-with-beef-recipe",
    prepTime: 5,
    servings: 2,
    summary:
      "Though the virtues of konnyaku are usually touted by dieters or select Japanese food lovers, konnyaku should be appreciated not only for its low-caloric features, but also because it's delicious.",
    tags: ["beef", "japanese"],
    title: "Simmered Konnyaku with Beef"
  },
  SpicyKonnyaku: {
    cookTime: 10,
    ingredients: [
      {
        amount: 400,
        name: "g Japanese konnyaku"
      },
      {
        amount: 2,
        name: "tablespoons Awase Dashi (use Kombu or Shitake Dashi for vegan / veggie)"
      },
      {
        amount: 3,
        name: "teaspoons dashi-seasoned soy sauce"
      },
      {
        amount: 2,
        name: "teaspoons soy sauce, to taste"
      },
      {
        amount: 0.125,
        name: "teaspoon Shichimi Togarashi (Japanese 7-chile pepper)"
      }
    ],
    instructions: [
      "Slice konnyaku into thick matchsticks or other desired size.",
      "Heat a nonstick pan over medium heat. Add dashi, soy sauce, dashi seasoned soy sauce, and konnyaku. Stir continuously.",
      "Add Shichimi Togarashi and braise until most of the liquid evaporates, about 6 to 8 minutes. Add more soy sauce to taste.",
      "Remove from heat and serve spicy konnyaku on individual small plates. Garnish with additional 7-chile pepper (shichimi togarashi)."
    ],
    origin: "https://www.thespruceeats.com/spicy-konnyaku-yam-cake-2030914",
    prepTime: 10,
    progressPics: 3,
    servings: 4,
    summary:
      "Konnyaku is the Japanese term for the vegetable or plant also known as devil's tongue, konjac, konjak, konjaku, konnyaku potato, voodoo lily, or elephant yam. Konnyaku also refers to the prepared food where the root of the konjac plant is made into a rectangular block of jelly-like yam cake or noodles.",
    tags: ["vegetarian", "vegan", "fish", "japanese"],
    title: "Spicy Konnyaku"
  }
};

export default recipes;
