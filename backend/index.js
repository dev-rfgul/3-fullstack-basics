import express from "express"

const app = express();

const jokes = [
    {
        id: 1,
        joke: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 2,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        id: 3,
        joke: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 4,
        joke: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    },
    {
        id: 5,
        joke: "What do you get when you cross a snowman and a vampire?",
        punchline: "Frostbite!"
    },
    {
        id: 6,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        id: 7,
        joke: "Why don’t some couples go to the gym?",
        punchline: "Because some relationships don’t work out."
    },
    {
        id: 8,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!"
    },
    {
        id: 9,
        joke: "How does a penguin build its house?",
        punchline: "Igloos it together."
    },
    {
        id: 10,
        joke: "What do you call cheese that isn't yours?",
        punchline: "Nacho cheese."
    },
    {
        id: 11,
        joke: "Why can't you give Elsa a balloon?",
        punchline: "Because she will let it go."
    },
    {
        id: 12,
        joke: "What did one ocean say to the other ocean?",
        punchline: "Nothing, they just waved."
    },
    {
        id: 13,
        joke: "Why was the math book always worried?",
        punchline: "It had too many variables."
    },
    {
        id: 14,
        joke: "What kind of shoes do ninjas wear?",
        punchline: "Sneakers!"
    },
    {
        id: 15,
        joke: "Why was the computer cold?",
        punchline: "It left its Windows open."
    },
    {
        id: 16,
        joke: "Why did the golfer bring two pairs of pants?",
        punchline: "In case he got a hole in one."
    },
    {
        id: 17,
        joke: "What do you get when you cross a snowman with a dog?",
        punchline: "Frostbite."
    }
];

// const randomNumber = Math.floor(Math.random() * 17);

// console.log(randomNumber)

app.get("/", (req, res) => {
    res.send("Hello World")

})

app.get("/api/jokes", (req, res) => {
    res.send(jokes)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})