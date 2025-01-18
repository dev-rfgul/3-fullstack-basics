import express from "express"
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// get and post are the methords but use is a middle ware
app.use(express.static('dist'))

const jokes = [
    {
        id: 1,
        joke: "Why don’t we play hide and seek with mountains?",
        punchline: "Because they always peak!",
        urduJoke: "ہم پہاڑوں کے ساتھ چھپن چھپائی کیوں نہیں کھیلتے؟",
        urduPunchline: "کیونکہ وہ ہمیشہ نظر آ جاتے ہیں!"
    },
    {
        id: 2,
        joke: "Why do bees have sticky hair?",
        punchline: "Because they use honeycombs!",
        urduJoke: "شہد کی مکھیوں کے بال چپچپے کیوں ہوتے ہیں؟",
        urduPunchline: "کیونکہ وہ شہد کے چھتے استعمال کرتی ہیں!"
    },
    {
        id: 3,
        joke: "Why did the skeleton go to the party alone?",
        punchline: "Because he had no body to go with!",
        urduJoke: "ڈھانچہ پارٹی میں اکیلا کیوں گیا؟",
        urduPunchline: "کیونکہ اس کے پاس کوئی جسم ساتھ لے جانے کے لیے نہیں تھا!"
    },
    {
        id: 4,
        joke: "What do you call a snowman’s temper tantrum?",
        punchline: "A meltdown!",
        urduJoke: "برف والے آدمی کا غصہ کیا کہلاتا ہے؟",
        urduPunchline: "پگھلنا!"
    },
    {
        id: 5,
        joke: "Why do cows wear bells?",
        punchline: "Because their horns don’t work!",
        urduJoke: "گائے گھنٹیاں کیوں پہنتی ہیں؟",
        urduPunchline: "کیونکہ ان کے سینگ کام نہیں کرتے!"
    },
    {
        id: 6,
        joke: "Why did the golfer bring an extra pair of pants?",
        punchline: "In case he got a hole in one!",
        urduJoke: "گولف کھیلنے والا ایک اضافی پینٹ کیوں لایا؟",
        urduPunchline: "کہیں ایک سوراخ نہ ہو جائے!"
    },
    {
        id: 7,
        joke: "What’s orange and sounds like a parrot?",
        punchline: "A carrot!",
        urduJoke: "کون سی نارنجی چیز طوطے جیسی لگتی ہے؟",
        urduPunchline: "گاجر!"
    },
    {
        id: 8,
        joke: "Why don’t eggs tell jokes?",
        punchline: "Because they might crack up!",
        urduJoke: "انڈے مذاق کیوں نہیں کرتے؟",
        urduPunchline: "کیونکہ وہ ٹوٹ سکتے ہیں!"
    },
    {
        id: 9,
        joke: "Why did the tomato blush?",
        punchline: "Because it saw the salad dressing!",
        urduJoke: "ٹماٹر شرما کیوں گیا؟",
        urduPunchline: "کیونکہ اس نے سلاد کا لباس دیکھا!"
    },
    {
        id: 10,
        joke: "What do you call a factory that makes good products?",
        punchline: "A satisfactory!",
        urduJoke: "اچھی چیزیں بنانے والی فیکٹری کو کیا کہتے ہیں؟",
        urduPunchline: "سنتوش کارخانہ!"
    },
    {
        id: 11,
        joke: "Why do seagulls fly over the ocean?",
        punchline: "Because if they flew over the bay, they’d be bagels!",
        urduJoke: "سی گلز سمندر کے اوپر کیوں اڑتی ہیں؟",
        urduPunchline: "کیونکہ اگر وہ خلیج کے اوپر اڑیں تو وہ بیگلز بن جائیں گی!"
    },
    {
        id: 12,
        joke: "What did the ocean say to the beach?",
        punchline: "Nothing, it just waved.",
        urduJoke: "سمندر نے ساحل سے کیا کہا؟",
        urduPunchline: "کچھ نہیں، بس ہاتھ ہلایا!"
    },
    {
        id: 13,
        joke: "What happens when you cross a snowman and a dog?",
        punchline: "Frostbite!",
        urduJoke: "اگر برف والے آدمی اور کتے کو ملائیں تو کیا ہوگا؟",
        urduPunchline: "فراسٹ بائٹ!"
    },
    {
        id: 14,
        joke: "Why don’t skeletons go skydiving?",
        punchline: "They don’t have the guts!",
        urduJoke: "ڈھانچے اسکائی ڈائیونگ کیوں نہیں کرتے؟",
        urduPunchline: "کیونکہ ان کے پاس ہمت نہیں ہوتی!"
    },
    {
        id: 15,
        joke: "What do you call fake noodles?",
        punchline: "An impasta!",
        urduJoke: "جعلی نوڈلز کو کیا کہتے ہیں؟",
        urduPunchline: "ایک امپاسٹا!"
    },
    {
        id: 16,
        joke: "Why was the math book sad?",
        punchline: "It had too many problems.",
        urduJoke: "ریاضی کی کتاب اداس کیوں تھی؟",
        urduPunchline: "کیونکہ اس میں بہت زیادہ مسائل تھے!"
    },
    {
        id: 17,
        joke: "What’s a snake’s favorite subject?",
        punchline: "Hiss-tory!",
        urduJoke: "سانپ کا پسندیدہ مضمون کیا ہے؟",
        urduPunchline: "ہسٹری!"
    },
    {
        id: 18,
        joke: "Why can’t you trust stairs?",
        punchline: "Because they’re always up to something!",
        urduJoke: "سیڑھیوں پر بھروسہ کیوں نہیں کیا جا سکتا؟",
        urduPunchline: "کیونکہ وہ ہمیشہ کچھ نہ کچھ کر رہی ہوتی ہیں!"
    },
    {
        id: 19,
        joke: "Why did the barber win the race?",
        punchline: "He knew all the shortcuts!",
        urduJoke: "نائی نے دوڑ کیوں جیت لی؟",
        urduPunchline: "کیونکہ اسے تمام شارٹ کٹ معلوم تھے!"
    },
    {
        id: 20,
        joke: "Why did the cookie go to the hospital?",
        punchline: "Because it felt crumby!",
        urduJoke: "بِسکٹ اسپتال کیوں گیا؟",
        urduPunchline: "کیونکہ وہ بکھرنے والا محسوس کر رہا تھا!"
    },
    {
        id: 21,
        joke: "What did one wall say to the other wall?",
        punchline: "I’ll meet you at the corner!",
        urduJoke: "ایک دیوار نے دوسری دیوار سے کیا کہا؟",
        urduPunchline: "کونے پر ملتے ہیں!"
    },
    {
        id: 22,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!",
        urduJoke: "سائیکل کیوں گر گیا؟",
        urduPunchline: "کیونکہ وہ دو تھکا ہوا تھا!"
    },
    {
        id: 23,
        joke: "What do you call a bear with no teeth?",
        punchline: "A gummy bear!",
        urduJoke: "دانتوں کے بغیر ریچھ کو کیا کہتے ہیں؟",
        urduPunchline: "گمی بیئر!"
    },
    {
        id: 24,
        joke: "Why did the banana go to the doctor?",
        punchline: "It wasn’t peeling well!",
        urduJoke: "کیلا ڈاکٹر کے پاس کیوں گیا؟",
        urduPunchline: "کیونکہ اس کی چھلک اچھی نہیں لگ رہی تھی!"
    },
    {
        id: 25,
        joke: "What kind of room doesn’t have doors?",
        punchline: "A mushroom!",
        urduJoke: "کون سا کمرہ دروازوں کے بغیر ہوتا ہے؟",
        urduPunchline: "ایک مشروم!"
    },
    {
        id: 26,
        joke: "Why are skeletons so calm?",
        punchline: "Because nothing gets under their skin!",
        urduJoke: "ڈھانچے اتنے پرسکون کیوں ہوتے ہیں؟",
        urduPunchline: "کیونکہ کچھ بھی ان کی جلد کے نیچے نہیں جاتا!"
    },
    {
        id: 27,
        joke: "Why did the computer go to art school?",
        punchline: "It wanted to draw more attention!",
        urduJoke: "کمپیوٹر آرٹ اسکول کیوں گیا؟",
        urduPunchline: "کیونکہ وہ مزید توجہ حاصل کرنا چاہتا تھا!"
    },
    {
        id: 28,
        joke: "Why don’t oysters share their pearls?",
        punchline: "Because they’re shellfish!",
        urduJoke: "سیپی اپنے موتی کیوں نہیں دیتی؟",
        urduPunchline: "کیونکہ وہ خود غرض ہیں!"
    },
    {
        id: 29,
        joke: "What’s a cat’s favorite color?",
        punchline: "Purr-ple!",
        urduJoke: "بلی کا پسندیدہ رنگ کون سا ہے؟",
        urduPunchline: "پُرپل!"
    },
    {
        id: 30,
        joke: "Why are ghosts bad liars?",
        punchline: "Because you can see right through them!",
        urduJoke: "بھوت جھوٹے کیوں ہوتے ہیں؟",
        urduPunchline: "کیونکہ آپ ان کے پار دیکھ سکتے ہیں!"
    }
];



const randomNumber = Math.floor(Math.random() * 17);

console.log(randomNumber)

// app.get("/", (req, res) => {
//     res.send("Hello World")

// })

app.get("/api/jokes", (req, res) => {
    res.send(jokes)
})



const port = process.env.BASE_URL || '3001';
console.log(port)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})