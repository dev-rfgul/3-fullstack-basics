import express from "express"

const app = express();

// get and post are the methords but use is a middle ware
app.use(express.static('dist'))

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
    },
    {
        id: 18,
        joke: "استاد: بتاؤ اللہ میاں کی کون سی نعت سب سے بڑی ہے؟",
        punchline: "شاگرد: حضور سر کی دعا، اس میں کبھی 'آمین' ہی نہیں ہوتا!"
    },
    {
        id: 19,
        joke: "ایک آدمی ڈاکٹر کے پاس گیا اور کہا: ڈاکٹر صاحب مجھے رات کو نیند نہیں آتی۔",
        punchline: "ڈاکٹر: سونے سے پہلے بکری کے بال گن لیا کرو۔"
    },
    {
        id: 20,
        joke: "استاد: سب سے زیادہ بہادر کون ہوتا ہے؟",
        punchline: "شاگرد: وہ جس کی بیوی جاگ رہی ہو اور وہ ٹی وی دیکھ رہا ہو۔"
    },
    {
        id: 21,
        joke: "بیوی: سنو، اگر میں مر جاؤں تو تم کیا کرو گے؟",
        punchline: "شوہر: میں بھی پاگل ہو جاؤں گا۔ روز خوشی مناؤں گا۔"
    },
    {
        id: 22,
        joke: "بیوی: آپ مجھے ایک بات بتاؤ، جب میں غصے میں ہوتی ہوں تو آپ گھر سے باہر کیوں چلے جاتے ہیں؟",
        punchline: "شوہر: تاکہ تمہارا غصہ ختم ہونے تک میں زندہ رہوں۔"
    },
    {
        id: 23,
        joke: "دو دوست آپس میں بات کر رہے تھے۔",
        punchline: "پہلا: میری بیوی بہت اچھی ہے، میری ہر بات مانتی ہے۔\nدوسرا: کیا بات ہے! میری بیوی بھی ایسا ہی کہتی ہے۔"
    },
    {
        id: 24,
        joke: "ایک آدمی نے دوسرے سے کہا: یار تمہاری شادی کب ہوئی؟",
        punchline: "دوسرا آدمی: جب میری بیوی کو مجھ سے محبت ہوگئی۔"
    },
    {
        id: 25,
        joke: "استاد: بتاؤ سب سے زیادہ پر سکون انسان کون ہے؟",
        punchline: "شاگرد: وہ جس کی بیوی اس کے والدین کے ساتھ رہتی ہو۔"
    },
    {
        id: 26,
        joke: "بیوی: آپ میرے لئے کیا لا رہے ہو؟",
        punchline: "شوہر: سانس، وہ بھی غصے میں لے رہا ہوں۔"
    },
    {
        id: 27,
        joke: "شوہر: میرے جوتے کہاں ہیں؟",
        punchline: "بیوی: آپ جوتے اٹھا کر جائیں گے یا پھر بیوی کو؟"
    },
    {
        id: 28,
        joke: "بیوی: آپ کو ہمیشہ غصہ کیوں آتا ہے؟",
        punchline: "شوہر: تاکہ آپ خوش رہیں۔"
    },
    {
        id: 29,
        joke: "ایک آدمی ڈاکٹر کے پاس گیا: ڈاکٹر صاحب میرے دماغ میں آوازیں آتی ہیں۔",
        punchline: "ڈاکٹر: تمہارے دماغ میں جگہ ہی نہیں، یہ آوازیں گونجتی ہیں۔"
    },
    {
        id: 30,
        joke: "استاد: تم کیوں رو رہے ہو؟",
        punchline: "شاگرد: میں نے اپنے والد صاحب کی ٹی وی پر آنے والی تنخواہ دیکھ لی۔"
    },
    {
        id: 31,
        joke: "استاد: بتاؤ تم کون سی کتاب پڑھ رہے ہو؟",
        punchline: "شاگرد: واٹس ایپ کے پیغامات کی کتاب!"
    },
    {
        id: 32,
        joke: "ایک آدمی نے کہا: یار، یہ بیوی میرے جوتے کیوں کھا جاتی ہے؟",
        punchline: "دوست: کیوں کہ تم ہمیشہ جوتے بیوی کے دل کے قریب رکھتے ہو!"
    },
    {
        id: 33,
        joke: "شوہر: تم ہر بات پر میری مخالفت کیوں کرتی ہو؟",
        punchline: "بیوی: کیونکہ یہ میرے حقوق میں شامل ہے!"
    },
    {
        id: 34,
        joke: "بیوی: آپ کبھی مجھے سچ بول کر نہیں دکھائیں گے۔",
        punchline: "شوہر: اس لئے کہ میں آپ کو خوش رکھنا چاہتا ہوں!"
    }
];


const randomNumber = Math.floor(Math.random() * 17);

console.log(randomNumber)

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