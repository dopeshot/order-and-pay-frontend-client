import { request } from "../../services/axios";
import { Dish, MenuType } from "./state";

export const getMenu = (): Promise<any> => {
    const dontUseHost = false

    if (!dontUseHost) {
        console.log(request.get<MenuType>('/menu/current'))
        return request.get<MenuType>('/menu/current') // MenuType is not correct! Here there is no index stuff???
    }
    else
        return new Promise((resolve) => resolve({
            data: {
                categories: [{
                    "_id": "61aa702b02fc57c3ee72ff99",
                    "name": "Vorspeisen",
                    "description": "Erster Gang."
                },
                {
                    "_id": "61aa70f202fc57c3ee72ff9a",
                    "name": "Salate",
                    "description": "Alle Salate werden mit einem Dressing Ihrer Wahl zubereitet."
                },
                {
                    "_id": "61aa71f602fc57c3ee72ff9b",
                    "name": "Pizza",
                    "description": "Alle Pizzen werden mit Tomatensuce und Käse zubereitet."
                },
                {
                    "_id": "61aa720902fc57c3ee72ff9c",
                    "name": "Calzone",
                    "description": "Alle Calzonen werden mit Tomatensauce und Käse zubereitet."
                },
                {
                    "_id": "61aa722602fc57c3ee72ff9d",
                    "name": "Pizzabrot",
                    "description": "Selbstgemachter Pizzateig feinster Qualität."
                },
                {
                    "_id": "61b20e3f07daa5dc7eb2b64f",
                    "name": "Pasta",
                    "description": "Alle Gerichte werden mit einer Nudelsorte Ihrer Wahl zubereitet."
                },
                {
                    "_id": "61b20e6b07daa5dc7eb2b650",
                    "name": "Pasta al Forno",
                    "description": "Alle Gerichte werden mit Käse überbacken."
                },
                {
                    "_id": "61b20eaf07daa5dc7eb2b651",
                    "name": "Kartoffelaufläufe",
                    "description": "Alle Kartoffelaufläufe werden mit Käse überbacken."
                },
                {
                    "_id": "61b20edf07daa5dc7eb2b652",
                    "name": "Chinesische Gerichte",
                    "description": "Alle Gerichte werden mit Reis serviert."
                },
                {
                    "_id": "61b20f8b07daa5dc7eb2b653",
                    "name": "Dessert",
                    "description": "Traditionelle italienische Desserts."
                },
                {
                    "_id": "61b2141807daa5dc7eb2b698",
                    "name": "Alkoholfreie Getränke",
                    "description": "Getränke ohne Alkohol"
                },
                {
                    "_id": "61b2158f07daa5dc7eb2b69a",
                    "name": "Alkoholische Getränke",
                    "description": "Getränke ohne Alkohol"
                }
                ],
                "dishes": [{
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "gluten",
                        "laktose"
                    ],
                    "_id": "617e6ccfb5661a79fd0d1a3d",
                    "name": "Gebackener Mozzarella",
                    "description": "",
                    "category": "61aa702b02fc57c3ee72ff99",
                    "price": 650
                },
                {
                    "labels": [
                        "vegetarian",
                        "vegan",
                        "glutenfree"
                    ],
                    "allergens": [],
                    "_id": "617e6d1f9a489b7b2d430930",
                    "name": "Gemüseteller",
                    "description": "Auberginen, Tomaten, Zucchini",
                    "category": "61aa702b02fc57c3ee72ff99",
                    "price": 600
                },
                {
                    "labels": [
                        "vegetarian",
                        "vegan"
                    ],
                    "allergens": [
                        "gluten",
                        "konservierungsstoffe"
                    ],
                    "_id": "617e6e2f88da5c7e2cd774f2",
                    "name": "Bruschetta",
                    "description": "Frisches Baguette mit Tomaten Knoblauch und Olivenöl",
                    "category": "61aa702b02fc57c3ee72ff99",
                    "price": 350
                },
                {
                    "labels": [],
                    "allergens": [
                        "krebstiere"
                    ],
                    "_id": "617e6e7646dd607f0a87a825",
                    "name": "Krabbencocktail",
                    "description": "Cocktailsauce mit frischen Krabben",
                    "category": "61aa702b02fc57c3ee72ff99",
                    "price": 900
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "gluten",
                        "konservierungsstoffe"
                    ],
                    "_id": "617e6f027cba0580dac835c4",
                    "name": "Frühlingsrollen (6Stück)",
                    "description": "",
                    "category": "61aa702b02fc57c3ee72ff99",
                    "price": 350
                },
                {
                    "labels": [
                        "vegetarian",
                        "glutenfree",
                        "vegan"
                    ],
                    "allergens": [],
                    "_id": "617e7f7cfb32e4981386e0fc",
                    "name": "Pommes Frites",
                    "description": "",
                    "category": "61aa702b02fc57c3ee72ff99",
                    "price": 300
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose"
                    ],
                    "_id": "617e801334566d98bebd7e96",
                    "name": "Kartoffelsalat",
                    "description": "Mit Sahne-Dressing",
                    "category": "61aa70f202fc57c3ee72ff9a",
                    "price": 500
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose"
                    ],
                    "_id": "61b21cac07daa5dc7eb2b6b5",
                    "name": "Gurkensalat",
                    "description": "Mit Sahne-Dressing",
                    "category": "61aa70f202fc57c3ee72ff9a",
                    "price": 300
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose"
                    ],
                    "_id": "61b21e4707daa5dc7eb2b6ba",
                    "name": "Caprese Salat",
                    "description": "mit Mozzarella, Tomaten, Basilikum und Olivenöl",
                    "category": "61aa70f202fc57c3ee72ff9a",
                    "price": 600
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose"
                    ],
                    "_id": "61b21fbc07daa5dc7eb2b6cb",
                    "name": "Tomatensalat",
                    "description": "",
                    "category": "61aa70f202fc57c3ee72ff9a",
                    "price": 400
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose"
                    ],
                    "_id": "61b2288107daa5dc7eb2b6d0",
                    "name": "Grüner Salat",
                    "description": "",
                    "category": "61aa70f202fc57c3ee72ff9a",
                    "price": 350
                },
                {
                    "labels": [
                        "fisch"
                    ],
                    "allergens": [
                        "laktose"
                    ],
                    "_id": "61b2292107daa5dc7eb2b6d5",
                    "name": "Nizza Salat",
                    "description": "grüner Salat, mit Thunfsich, Zwiebeln,Gurken,Tomaten",
                    "category": "61aa70f202fc57c3ee72ff9a",
                    "price": 500
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b229d507daa5dc7eb2b6de",
                    "name": "Pizza Margherita",
                    "description": "Tomatensauce und Mozzarella",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 550
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22a1907daa5dc7eb2b6e5",
                    "name": "Pizza Gorgonzola",
                    "description": "Tomatensauce, Gorgonzola und Mozzarella",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 650
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22a7407daa5dc7eb2b6e6",
                    "name": "Pizza Chickenfleisch",
                    "description": "Tomatensauce, Pilzen, Zwiebeln und Curry",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22aaf07daa5dc7eb2b6e7",
                    "name": "Pizza Istanbul",
                    "description": "Tomatensauce, türkischer Salami, Zwiebeln und Peperoni",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22ad007daa5dc7eb2b6e8",
                    "name": "Pizza Mafiosi",
                    "description": "Tomatensauce, Parmaschinken un Rucola",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22b1007daa5dc7eb2b6e9",
                    "name": "Pizza Speziale",
                    "description": "Tomatensauce, Vorderschinken, Pilzen und Hackfleischklößen ",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22b5d07daa5dc7eb2b6ea",
                    "name": "Pizza Inferno",
                    "description": "Tomatensauce, Paprika, Kapern, Peperoni und Silberzwiebeln ",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22b8907daa5dc7eb2b6eb",
                    "name": "Pizza Vegetaria",
                    "description": "Tomatensauce, Artischocken, Pilzen, Broccoli und Zwiebeln ",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22bb307daa5dc7eb2b6ec",
                    "name": "Pizza Diavolo",
                    "description": "Tomatensauce, Speck, scharfer Peperoni und Oliven",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten",
                        "krebstiere"
                    ],
                    "_id": "61b22bf607daa5dc7eb2b6ed",
                    "name": "Pizza Meeresfrüchten",
                    "description": "Tomatensauce und Meeresfrüchte ",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22c9e07daa5dc7eb2b6ee",
                    "name": "Pizza Ankara",
                    "description": "Tomatensauce und Sucuk, Schafskäse und Peperoni ",
                    "category": "61aa71f602fc57c3ee72ff9b",
                    "price": 750
                },
                {
                    "labels": [
                        "vegetarian"
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22f7d07daa5dc7eb2b727",
                    "name": "Calzone (vegetarisch)",
                    "description": "gefüllt mit Pilzen, Artischocken, Paprika und Tomatensauce ",
                    "category": "61aa720902fc57c3ee72ff9c",
                    "price": 600
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22fa307daa5dc7eb2b728",
                    "name": "Calzone mit Bolognese",
                    "description": "gefüllt mit Bolognese",
                    "category": "61aa720902fc57c3ee72ff9c",
                    "price": 700
                },
                {
                    "labels": [
                        ""
                    ],
                    "allergens": [
                        "laktose",
                        "gluten"
                    ],
                    "_id": "61b22fb907daa5dc7eb2b729",
                    "name": "Calzone mit Tomatensauce",
                    "description": "gefüllt mit Vorderschinken und Pilzen",
                    "category": "61aa720902fc57c3ee72ff9c",
                    "price": 700
                },
                {
                    "labels": [
                        "vegetarian",
                        "vegan"
                    ],
                    "allergens": [
                        "gluten"
                    ],
                    "_id": "61b231bd07daa5dc7eb2b762",
                    "name": "Pizzabrot mit Knoblauch",
                    "description": "",
                    "category": "61aa722602fc57c3ee72ff9d",
                    "price": 250
                },
                {
                    "labels": [
                        "vegetarian",
                        "vegan"
                    ],
                    "allergens": [
                        "gluten"
                    ],
                    "_id": "61b231e007daa5dc7eb2b763",
                    "name": "Pizzabrot mit Olivenöl",
                    "description": "",
                    "category": "61aa722602fc57c3ee72ff9d",
                    "price": 250
                }
                ],
                "name": "testMenu"
            }
        }))
}

export const getDish = (id: string) => request.get<Dish>(`/dishes/${id}`)
