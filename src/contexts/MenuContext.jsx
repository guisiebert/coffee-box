import { createContext } from "react"

// export const OrderContext = createContext({})

export const menuItems = [
    {
        id: 1,
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        tags: ["tradicional"],
        price: 9.10,
        image: "./public/drinks/Expresso.png" ,
        // quantity: 0
    },
    {
        id: 2,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        tags: ["tradicional"],
        price: 9.20,
        image: "/public/drinks/Americano.png" ,
        // quantity: 0
    },
    {
        id: 3,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        tags: ["tradicional"],
        price: 9.30,
        image: "/public/drinks/Cremoso.png" ,
        // quantity: 0
    },
    {
        id: 4,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        tags: ["tradicional","gelado"],
        price: 9.40,
        image: "/public/drinks/Gelado.png" ,
        // quantity: 0
    },
    {
        id: 5,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        tags: ["tradicional", "com leite"],
        price: 9.50,
        image: "/public/drinks/comLeite.png" ,
        // quantity: 0
    },
    {
        id: 6,
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        tags: ["tradicional", "com leite"],
        price: 9.60,
        image: "/public/drinks/Latte.png" ,
        // quantity: 0
    },
    {
        id: 7,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        tags: ["tradicional", "com leite"],
        price: 9.70,
        image: "/public/drinks/Capuccino.png" ,
        // quantity: 0
    },
    {
        id: 8,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        tags: ["tradicional", "com leite"],
        price: 9.80,
        image: "/public/drinks/Macchiato.png" ,
        // quantity: 0
    },
    {
        id: 9,
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        tags: ["tradicional", "com leite"],
        price: 9.90,
        image: "/public/drinks/Mochaccino.png" ,
        // quantity: 0
    },
    {
        id: 10,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        tags: ["especial", "com leite"],
        price: 8.10,
        image: "/public/drinks/chocoQuente.png" ,
        // quantity: 0
    },
    {
        id: 11,
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        tags: ["especial", "alcoolico", "gelado"],
        price: 8.20,
        image: "/public/drinks/Cubano.png" ,
        // quantity: 0
    },
    {
        id: 12,
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        tags: ["especial"],
        price: 8.30,
        image: "/public/drinks/Havaiano.png" ,
        // quantity: 0
    },
    {
        id: 13,
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        tags: ["especial"],
        price: 8.40,
        image: "/public/drinks/Arabe.png" ,
        // quantity: 0
    },
    {
        id: 14,
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        tags: ["especial", "alcoolico"],
        price: 8.50,
        image: "/public/drinks/Irlandes.png" ,
        // quantity: 0
    },
]