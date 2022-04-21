export type Catalog = {
  name: string
  slug: string
  price: string
  discounted_price?: string
  images: string[]
}

export type Comment = {
  user: {
    name: string
    avatarUrl: string
  }
  created_at: string
  content: string[]
}

export type Recipe = {
  title: string
  slug: string
  tags: string[]
  created_at: string
  thumbnail: string
  cover: string
  preparation_time: number
  cook_time: number
  content?: string
  ingredients: string[]
  instructions: string[]
  notes: {
    title: string
    content: string
  }[]
  comments?: Comment[]
}

type Data = {
  catalog: Catalog[]
  recipes: Recipe[]
  social_media: string[]
}

const data: Data = {
  catalog: [
    {
      name: 'Spatula',
      slug: 'spatula',
      price: '15.00',
      images: ['/images/catalog/EVA00025.jpeg'],
    },
    {
      name: 'Ice cream',
      slug: 'ice-cream',
      price: '10.00',
      discounted_price: '8.00',
      images: ['/images/catalog/EVA00074.jpeg'],
    },
    {
      name: 'Olive Oil',
      slug: 'olive-oil',
      price: '25.00',
      images: ['/images/catalog/EVA00028.jpeg'],
    },
  ],
  recipes: [
    {
      title: 'Roasted Cauliflower Pitas with Zhug and Garlic Tahini 1',
      slug: 'roasted-cauliflower-pitas-with-zhug-and-garlic-tahini',
      tags: ['dinner', 'single_pan', 'gluten_free'],
      created_at: '03/01/2022',
      thumbnail: '/images/recipes/roasted-cauliflower-pitas-vegan.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
      comments: [
        {
          created_at: '03/03/2022',
          content: [
            'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.',
            'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, anda search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          ],
          user: {
            name: 'Alex Barloy',
            avatarUrl: '/images/julian-wan-WNoLnJo7tS8.jpeg',
          },
        },
        {
          created_at: '03/03/2022',
          content: [
            'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.',
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, anda search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          ],
          user: {
            name: 'Ann Merloy',
            avatarUrl: '/images/stephanie-liverani-Zz5LQe-VSMY.jpeg',
          },
        },
        {
          created_at: '03/03/2022',
          content: [
            'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.',
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, anda search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          ],
          user: {
            name: 'Cris Fray',
            avatarUrl: '/images/christian-buehner-DItYlc26zVI.jpeg',
          },
        },
      ],
    },
    {
      title: 'Baked Chocolate Fudge Glazed Doughnuts 1',
      slug: 'baked-chocolate-fudge-glazed-doughnuts',
      tags: ['dessert', 'sugar_free'],
      created_at: '02/20/2022',
      thumbnail: '/images/recipes/Baked-Chocolate-Fudge-Glazed-Doughnuts.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Simple Thai Yellow Chicken Curry with Spicy Garlic Butter 1',
      slug: 'simple-thai-yellow-chicken-curry-with-spicy-garlic-butter',
      tags: ['dinner', 'slow_cooker'],
      created_at: '02/18/2022',
      thumbnail:
        '/images/recipes/Simple-Thai-Yellow-Chicken-Curry-with-Spicy-Garlic-Butter.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Roasted Cauliflower Pitas with Zhug and Garlic Tahini 2',
      slug: 'roasted-cauliflower-pitas-with-zhug-and-garlic-tahini',
      tags: ['dinner', 'single_pan', 'gluten_free'],
      created_at: '03/01/2022',
      thumbnail: '/images/recipes/roasted-cauliflower-pitas-vegan.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },

    {
      title: 'Baked Chocolate Fudge Glazed Doughnuts 2',
      slug: 'baked-chocolate-fudge-glazed-doughnuts',
      tags: ['dessert', 'sugar_free'],
      created_at: '02/20/2022',
      thumbnail: '/images/recipes/Baked-Chocolate-Fudge-Glazed-Doughnuts.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Simple Thai Yellow Chicken Curry with Spicy Garlic Butter 2',
      slug: 'simple-thai-yellow-chicken-curry-with-spicy-garlic-butter',
      tags: ['dinner', 'slow_cooker'],
      created_at: '02/18/2022',
      thumbnail:
        '/images/recipes/Simple-Thai-Yellow-Chicken-Curry-with-Spicy-Garlic-Butter.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Roasted Cauliflower Pitas with Zhug and Garlic Tahini 3',
      slug: 'roasted-cauliflower-pitas-with-zhug-and-garlic-tahini',
      tags: ['dinner', 'single_pan', 'gluten_free'],
      created_at: '03/01/2022',
      thumbnail: '/images/recipes/roasted-cauliflower-pitas-vegan.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },

    {
      title: 'Baked Chocolate Fudge Glazed Doughnuts 3',
      slug: 'baked-chocolate-fudge-glazed-doughnuts',
      tags: ['dessert', 'sugar_free'],
      created_at: '02/20/2022',
      thumbnail: '/images/recipes/Baked-Chocolate-Fudge-Glazed-Doughnuts.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Simple Thai Yellow Chicken Curry with Spicy Garlic Butter 3',
      slug: 'simple-thai-yellow-chicken-curry-with-spicy-garlic-butter',
      tags: ['dinner', 'slow_cooker'],
      created_at: '02/18/2022',
      thumbnail:
        '/images/recipes/Simple-Thai-Yellow-Chicken-Curry-with-Spicy-Garlic-Butter.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Roasted Cauliflower Pitas with Zhug and Garlic Tahini 4',
      slug: 'roasted-cauliflower-pitas-with-zhug-and-garlic-tahini',
      tags: ['dinner', 'single_pan', 'gluten_free'],
      created_at: '03/01/2022',
      thumbnail: '/images/recipes/roasted-cauliflower-pitas-vegan.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Baked Chocolate Fudge Glazed Doughnuts 4',
      slug: 'baked-chocolate-fudge-glazed-doughnuts',
      tags: ['dessert', 'sugar_free'],
      created_at: '02/20/2022',
      thumbnail: '/images/recipes/Baked-Chocolate-Fudge-Glazed-Doughnuts.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Simple Thai Yellow Chicken Curry with Spicy Garlic Butter 4',
      slug: 'simple-thai-yellow-chicken-curry-with-spicy-garlic-butter',
      tags: ['dinner', 'slow_cooker'],
      created_at: '02/18/2022',
      thumbnail:
        '/images/recipes/Simple-Thai-Yellow-Chicken-Curry-with-Spicy-Garlic-Butter.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Roasted Cauliflower Pitas with Zhug and Garlic Tahini 5',
      slug: 'roasted-cauliflower-pitas-with-zhug-and-garlic-tahini',
      tags: ['dinner', 'single_pan', 'gluten_free'],
      created_at: '03/01/2022',
      thumbnail: '/images/recipes/roasted-cauliflower-pitas-vegan.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Baked Chocolate Fudge Glazed Doughnuts 5',
      slug: 'baked-chocolate-fudge-glazed-doughnuts',
      tags: ['dessert', 'sugar_free'],
      created_at: '02/20/2022',
      thumbnail: '/images/recipes/Baked-Chocolate-Fudge-Glazed-Doughnuts.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Simple Thai Yellow Chicken Curry with Spicy Garlic Butter 5',
      slug: 'simple-thai-yellow-chicken-curry-with-spicy-garlic-butter',
      tags: ['dinner', 'slow_cooker'],
      created_at: '02/18/2022',
      thumbnail:
        '/images/recipes/Simple-Thai-Yellow-Chicken-Curry-with-Spicy-Garlic-Butter.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Roasted Cauliflower Pitas with Zhug and Garlic Tahini 6',
      slug: 'roasted-cauliflower-pitas-with-zhug-and-garlic-tahini',
      tags: ['dinner', 'single_pan', 'gluten_free'],
      created_at: '03/01/2022',
      thumbnail: '/images/recipes/roasted-cauliflower-pitas-vegan.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },

    {
      title: 'Baked Chocolate Fudge Glazed Doughnuts 6',
      slug: 'baked-chocolate-fudge-glazed-doughnuts',
      tags: ['dessert', 'sugar_free'],
      created_at: '02/20/2022',
      thumbnail: '/images/recipes/Baked-Chocolate-Fudge-Glazed-Doughnuts.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
    {
      title: 'Simple Thai Yellow Chicken Curry with Spicy Garlic Butter 6',
      slug: 'simple-thai-yellow-chicken-curry-with-spicy-garlic-butter',
      tags: ['dinner', 'slow_cooker'],
      created_at: '02/18/2022',
      thumbnail:
        '/images/recipes/Simple-Thai-Yellow-Chicken-Curry-with-Spicy-Garlic-Butter.jpeg',
      cover: '/images/recipes/v-wkvegMar0403__068.png',
      preparation_time: 30 * 60,
      cook_time: 30 * 60,
      ingredients: [
        '1 large head cauliflower, cut into florets',
        '3 tablespoons extra-virgin olive oil',
        '1 tablespoon smoked or sweet paprika',
        '2 teaspoons ground cumin',
        '1/2 teaspoon ground cardamom',
        '1/2teaspoon ground turmeric',
        '1/4 teaspoon cayenne pepper',
        'juice from half a lemon',
        '4 garlic cloves, chopped',
        'kosher salt black pepper',
        '4 fresh naan or pitas, warmed',
        'pickled red onion and lettuce, for serving',
        'lemon tahini and mango harissa (recipe in notes) (optional)',
        '1 bunch fresh parsley',
        '1 bunch fresh cilantro',
        '1 large jalapeño, seeded if desired',
        '1 clove garlic, finely chopped or grated',
        '1 teaspoon ground cumin',
        '1/2 teaspoon ground turmeric',
        '1/3 cup extra-virgin olive oil',
        '2 tablespoons fresh lemon juice',
      ],
      instructions: [
        'Preheat the oven to 425° F.',
        'On a baking sheet, tossed together the cauliflower, olive oil, paprika, cumin, cardamom, turmeric, cayenne, lemon, garlic, and a large pinch each of salt and pepper. Bake 15 minutes, toss and bake another 15 minutes, until lightly charred.',
        'To make the zhug. Combine all ingredients in a food processor or blender. Pulse until finely chopped. If the sauce is too thick, add water, 1 tablespoon at a time to thin. Taste and add more salt as needed.',
        'To assemble, stuff/spread each pita with zhug, then lettuce, roasted cauliflower, and red onion. Drizzle over more zhug. Add tahini and harissa, if desired (recipes in notes).',
      ],
      notes: [
        {
          title: 'Lemon Tahini',
          content:
            'Combine 1/2 cup tahini, 3 tablespoons lemon juice, 1/2 teaspoon garlic powder, 1 teaspoon honey, and 1/4 cup water in a blender and blend until smooth. If needed, add water to thin the sauce as desired. Season to taste with salt.',
        },
        {
          title: 'Mango Harissa',
          content:
            'In a blender, combine 1/2 cup red harissa sauce, 1 cup diced mango, and 1/4 cup pickled jalapeños, blend until smooth.',
        },
      ],
    },
  ],
  social_media: [
    '/images/social-media/EVA00054.jpeg',
    '/images/social-media/EVA00067.jpeg',
    '/images/social-media/EVA00077.jpeg',
    '/images/social-media/EVA00111.jpeg',
    '/images/social-media/EVA00135.jpeg',
    '/images/social-media/EVA00142.jpeg',
    '/images/social-media/EVA00148.jpeg',
    '/images/social-media/EVA00204.jpeg',
  ],
}

export default data
