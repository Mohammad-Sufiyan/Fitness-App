const exerciseData = [
    {
        "id": 1,
        "month":"January",
        "day":"1",
        "gif": "https://media0.giphy.com/media/vvzFNc1kRSqTzrFLOT/giphy.gif",
        "name": "Squat Jumps",
        "description": "Feet shoulder-width apart. Squat with knees behind toes, jump up, return to squat and repeat",
        "modified": "Slight squat and smaller jump",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 2,
        "month":"January",
        "day":"2",
        "gif": "https://media3.giphy.com/media/l41YgS3UPP5Qjwr8Q/giphy.gif?cid=ecf05e47yj5tpl3e7w1xbte97gdyr31g8c2noedyyv8gi4bg&rid=giphy.gif",
        "name": "Burpees",
        "description": "Lower body to ground all the way, as you perform a push-up, jump up straight. Repeat for duration of round.",
        "modified": "Lift up from ground without push-up, less intense jump",
        "focus": [
            "cardio",
            "upper-body",
            "lower-body"
        ]
    },
    {
        "id": 3,
        "month":"January",
        "day":"3",
        "gif": "https://media0.giphy.com/media/Ibme3bOrbIpry/giphy.gif?cid=ecf05e47997cc82ce20b442dbed0e6eb67315508406f4e94&rid=giphy.gif",
        "name": "Split Squat Jumps",
        "description": "Alternate legs as you jump into a lunge and switch feet after each jump",
        "modified": "Step into each lunge instead of jumping",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 4,
        "month":"January",
        "day":"4",
        "gif": "https://media0.giphy.com/media/7e3P2VsI7Js2c/giphy.gif?cid=ecf05e47wlmeootds5gb07o6gq93wp66ddkig89fo2jkbq9j&rid=giphy.gif",
        "name": "Hand-Release Push-Ups",
        "description": "In push-up position, lower body all the way to the ground, lift hands off ground, then perform push-up",
        "modified": "Perform push-up keeping knees on the ground",
        "focus": [
            "upper-body"
        ]
    },
    {
        "id": 5,
        "month":"January",
        "day":"5",
        "gif": "https://media3.giphy.com/media/iD7UrloaBlLB3ygIha/giphy.gif?cid=ecf05e47z2qfe9q6ww9t73h87iz429a55fqj0n7y6tmqwtks&rid=giphy.gif",
        "name": "Mountain Climbers",
        "description": "In a plank, quickly bring knees to chest, alternating legs",
        "modified": "Decrease speed, lower range of motion",
        "focus": [
            "cardio",
            "lower-body",
            "core"
        ]
    },
    {
        "id": 6,
        "month":"January",
        "day":"6",
        "gif": "https://media2.giphy.com/media/PSrBEj1ISCohi/giphy.gif",
        "name": "Jump Knee Tucks",
        "description": "Jump up and bring knees as high to chest as possible. Repeat quickly",
        "modified": "Jump lower, bringing knees up less high and jump slower",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 7,
        "month":"January",
        "day":"7",
        "gif": "https://media0.giphy.com/media/62aGqZoUJYtPsl0Hb0/giphy.gif?cid=ecf05e47lmijhi66jfkg893mj53eysza82559v4it7sqk2of&rid=giphy.gif",
        "name": "High Knees",
        "description": "Run in place, bringing knees up to your waist line",
        "modified": "Run slower, bringing knees up less high",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 8,
        "month":"January",
        "day":"8",
        "gif": "https://media1.giphy.com/media/lRe4b5OEtBpXyvvXua/giphy.gif",
        "name": "Jump Squat Overhead",
        "description": "Feet shoulder-width apart. Squat with knees behind toes, jump up, touch hands together over your head, return to squat and repeat",
        "modified": "Slight squat and smaller jump",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 9,
        "month":"January",
        "day":"9",
        "gif": "https://media2.giphy.com/media/lEYcevSwZ55Go/giphy.gif?cid=ecf05e47fdp6fdj56vwrgdcm7f2qd26o1wqd67sflgqpm6hn&rid=giphy.gif",
        "name": "Half Burpee",
        "description": "Jump down, with hands on floor and quickly extend legs behind you, then quickly jump back up. When you land immediately repeat movement",
        "modified": "Place hands on floor and step legs behind you, stand back up",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 10,
        "month":"January",
        "day":"10",
        "gif": "https://media3.giphy.com/media/FqMREXElyOZDG/giphy.gif?cid=ecf05e4781a25cb4e83760372c62cafc9e53510e2b4df41b&rid=giphy.gif",
        "name": "Air Squats",
        "description": "Feet shoulder-width apart, quickly squat keeping your back straight, knees behind your feet, stand back up straight and repeat",
        "modified": "Squat less deep and at a slower pace",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 11,
        "month":"January",
        "day":"11",
        "gif": "https://media3.giphy.com/media/4HgsfDIXY4F6cOnAK2/giphy.gif?cid=ecf05e47b08e01685776c6867ff97459ba9ab23368d1f5a6&rid=giphy.gif",
        "name": "Controlled Push-Ups",
        "description": "Perform a push-up, slow and controlled, lowering body until chest touches ground, and mainting good form the entire time",
        "modified": "Perform push-up keeping knees on the ground",
        "focus": [
            "upper-body",
            "core"
        ]
    },
    {
        "id": 12,
        "month":"January",
        "day":"12",
        "gif": "https://media1.giphy.com/media/ZA68nmuNOXBecacY4Z/giphy.gif?cid=ecf05e47151e37d7e7bc45a7880c7932b7a9a33855698be2&rid=giphy.gif",
        "name": "Military Push-Ups",
        "description": "Hands directly underneath shoulders, elbows pointing back, perform push, lowering body the ground",
        "modified": "Perform push-up keeping knees on the ground",
        "focus": [
            "upper-body",
            "core"
        ]
    },
    {
        "id": 13,
        "month":"January",
        "day":"13",
        "gif": "https://media3.giphy.com/media/Y4ucGSV9E78fo9B36E/giphy.gif",
        "name": "Squat Hold",
        "description": "Feet shoulder width apart, knees behind toes, perform squat and hold for duration of the round",
        "modified": "Perform less deep squat",
        "focus": [
            "lower-body"
        ]
    },
    {
        "id": 14,
        "month":"January",
        "day":"14",
        "gif": "https://media3.giphy.com/media/kEL6G7ZR024IjJC1Hq/giphy.gif?cid=ecf05e47c095f014d839018eaa1e9d4afae759415da16c1d&rid=giphy.gif",
        "name": "Toe Touch Push-Ups",
        "description": "Perform push-up, then tap right toe followed by left toe",
        "modified": "Perform push-up and toe taps with knees on ground",
        "focus": [
            "upper-body",
            "core"
        ]
    },
    {
        "id": 15,
        "month":"January",
        "day":"15",
        "gif": "https://media1.giphy.com/media/VFkfj21xsUBkAeqoda/giphy.gif?cid=ecf05e47edd62d63b2a497460c4dc1926e49b716bd3e7006&rid=giphy.gif",
        "name": "Alternating Forward Lunges",
        "description": "Lunge forward with right leg, keeping knee behind toe, stand back up, and lunge with left leg. Repeat",
        "modified": "Hold onto wall or something stable for balance",
        "focus": [
            "lower-body"
        ]
    },
    {
        "id": 16,
        "month":"January",
        "day":"16",
        "gif": "https://media1.giphy.com/media/NkPeSnQNdQNZYSRluD/giphy.gif",
        "name": "Plank Touch and Reach",
        "description": "In a plank, first touch your opposite shoulder, then reach hand up to sky, and come back to plank and do other hand",
        "modified": "Only touch shoulders, no reach, or only do the reach and do not touch shoulder",
        "focus": [
            "core"
        ]
    },
    {
        "id": 17,
        "month":"January",
        "day":"17",
        "gif": "https://media1.giphy.com/media/5tmpTAIMt4H89W7H0G/giphy.gif?cid=ecf05e47z2qfe9q6ww9t73h87iz429a55fqj0n7y6tmqwtks&rid=giphy.gif",
        "name": "Knee to Elbow Plank",
        "description": "Plank with forearms on ground, alternate bringing knee towards same-side elbow, medium pace and controlled",
        "modified": "Do not exaggerate knee to elbow movement",
        "focus": [
            "core"
        ]
    },
    {
        "id": 18,
        "month":"January",
        "day":"18",
        "gif": "https://media1.giphy.com/media/625Y3SUYeX7qh01LyL/giphy.gif?cid=ecf05e47fd4b3cfee5e8977defeaf4f2b45fb9df4dcb3c72&rid=giphy.gif",
        "name": "Toe Touchers",
        "description": "Lying on back with legs extended straight up, reach up with hands and touch your toes, repeat for duration of round",
        "modified": "Reach up with hands, but don't try and touch toes",
        "focus": [
            "core"
        ]
    },
    {
        "id": 19,
        "month":"January",
        "day":"19",
        "gif": "https://media2.giphy.com/media/cjhdh7TqTdZmRp9bKe/giphy.gif",
        "name": "Superman",
        "description": "Lying on your stomach, extend hands straight out, then lift your legs and arms up, keeping stomach on floor, hold for a second, lower and repeat",
        "modified": "Do not exaggerate arm and leg extension",
        "focus": [
            "core"
        ]
    },
    {
        "id": 20,
        "month":"January",
        "day":"20",
        "gif": "https://media0.giphy.com/media/Pihv2leEf9UKQdloXA/giphy.gif?cid=ecf05e472476a423af3c296bcb18220801db6074ddf347b9&rid=giphy.gif",
        "name": "Plank Hip Dips",
        "description": "In a plank with forearms on floor, swivel hips first the right and touch floor, then swivel hips to left and touch floor. Repeat for duration of round",
        "modified": "Swivel hips left and right, but don't try to touch floor",
        "focus": [
            "core"
        ]
    },
    {
        "id": 21,
        "month":"January",
        "day":"21",
        "gif": "https://media0.giphy.com/media/7zuAQ6ebll6maa2rBF/giphy.gif?cid=ecf05e47k3p5dl6ojwc7kj576o82e4k1ja4c3slvs5gvk6zo&rid=giphy.gif",
        "name": "Push-Up Plank",
        "description": "With forearms on floor in a plank, place right hand on floor, then left hand on floor, and walk back down. Repeat for duration of round",
        "modified": "Perform plank and moves with knees on ground",
        "focus": [
            "core",
            "upper-body"
        ]
    },
    {
        "id": 22,
        "month":"January",
        "day":"22",
        "gif": "https://media1.giphy.com/media/26BRyNmEefw26QTle/giphy.gif?cid=ecf05e47ed66f6decbdba30044ab5fbbdda6f91ee4a35867&rid=giphy.gif",
        "name": "Cross-Body Plank with Hold",
        "description": "Hands on floor plank, reach under opposite arm, touch body and hold, repeat on other side",
        "modified": "Perform plank and hold with knees touching ground",
        "focus": [
            "core"
        ]
    },
    {
        "id": 23,
        "month":"January",
        "day":"23",
        "gif": "https://media2.giphy.com/media/gJuksGZCpvBi02FvNQ/giphy.gif?cid=ecf05e4747e68b286e67a069265cf0abdb65d08f42fe584f&rid=giphy.gif",
        "name": "Half Plank Shoulder Touch",
        "description": "With hands on feet on ground, touch right shoulder with left hand, and then left shoulder with right hand",
        "modified": "Slightly lift left then right hand off the floor. Don't touch shoulders",
        "focus": [
            "core"
        ]
    },
    {
        "id": 24,
        "month":"January",
        "day":"24",
        "gif": "https://media1.giphy.com/media/2UqZvQq4p9DjTBDVRc/giphy.gif",
        "name": "Plank Jacks",
        "description": "Plank with forearms on ground, jump toes out then in in a jumping-jack style motion",
        "modified": "In the plank, step toes out and in one at a time, lower range of motion",
        "focus": [
            "core"
        ]
    },
    {
        "id": 25,
        "month":"January",
        "day":"25",
        "gif": "https://media2.giphy.com/media/jTs6TRPQAlHvtV044Y/giphy.gif?cid=ecf05e47c72f733266340b23e340ad1078e1944c0872dea3&rid=giphy.gif",
        "name": "Tricep Dips",
        "description": "Using a stable chair behind you, grab the edge and bend your knees, lower your body with your arms then lift yourself up",
        "modified": "User a surface higher from the ground to make your dip shorter",
        "focus": [
            "upper-body"
        ]
    },
    {
        "id": 26,
        "month":"January",
        "day":"26",
        "gif": "https://media1.giphy.com/media/7YCC7PTNX2TOhJQ6aW/giphy.gif?cid=ecf05e47k5osd7y6cu4jtj32cjnarainjjwzkks5j987ejkg&rid=giphy.gif",
        "name": "Wide Grip Push-Ups",
        "description": "Place hands further than shoulder-width apart and lower body til chest touches ground then push body up in explosive movement",
        "modified": "Peform push-up with knees on the ground",
        "focus": [
            "upper-body"
        ]
    },
    {
        "id": 27,
        "month":"January",
        "day":"27",
        "gif": "https://media1.giphy.com/media/jbiA1NsHa50OS2MATH/giphy.gif?cid=ecf05e476f60fcd24fac9fe3c58c23a5781d3fb703fee87a&rid=giphy.gif",
        "name": "Flutter Kicks",
        "description": "Lying on back, head on floor, hands under your hips, raise legs slightly off the ground and quickly move legs in a scissors motion, keeping legs straight and core tight",
        "modified": "Lower the angle of your legs so they are not as high off the ground",
        "focus": [
            "core"
        ]
    },
    {
        "id": 28,
        "month":"January",
        "day":"28",
        "gif": "https://media3.giphy.com/media/4Hx33hvGMdeyK016mT/giphy.gif?cid=ecf05e47d02fd41dbdcac036454091ef659e5ad42fd205eb&rid=giphy.gif",
        "name": "Jumping Jacks",
        "description": "With hands by side, feet together, quickly jump and bring hands up while landing in a wide stance, then hands back down and feet together",
        "modified": "Lower the pace of each jump",
        "focus": [
            "cardio"
        ]
    },
    {
        "id": 29,
        "month":"January",
        "day":"29",
        "gif": "https://media3.giphy.com/media/kdXScqzCfT5VmpgZ5Q/giphy.gif?cid=ecf05e47b73afbc56a900c6c3a1fb7e0c847392e559ae297&rid=giphy.gif",
        "name": "180 Degree Squat Jumps",
        "description": "Perform squat and as you jump, rotate 180 degrees to face the opposite direction, landing in a squat, and jump back the opposite direction",
        "modified": "Do not exaggerate the squat as deeply",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 30,
        "month":"January",
        "day":"30",
        "gif": "https://media1.giphy.com/media/3HAsGD9FFDCLhxOpf4/giphy.gif",
        "name": "Russian Twists",
        "description": "Seated on the floor, raise feet off the ground, twist with hands together and touch the floor on one side, then the other",
        "modified": "Keep your feet on the floor",
        "focus": [
            "core"
        ]
    },
    {
        "id": 31,
        "month":"January",
        "day":"31",
        "gif": "https://media0.giphy.com/media/yxfL4q5OyaCXyEfp4g/giphy.gif?cid=ecf05e473950556f4f4e90157e84959b6c4115bb1f0850e3&rid=giphy.gif",
        "name": "Rock the Boat",
        "description": "Lying on your back, hands outstretched over your head, legs raised straight off the ground, rock back and forth using your core to stabilize",
        "modified": "Place your arms down by your side to help stabilize you",
        "focus": [
            "core"
        ]
    },
    {
        "id": 32,
        "month":"February",
        "day":"1",
        "gif": "https://media1.giphy.com/media/xU1ryd1OkMzbh9VwDR/giphy.gif?cid=ecf05e475bdba10c0e467b363182cd9cb16a36853bedb051&rid=giphy.gif",
        "name": "Wide Stance Jump Squats",
        "description": "With feet together jump into a squat landing with feet in a wide stance, jump back up feet together again",
        "modified": "Narrow stance of feet and depth of squat",
        "focus": [
            "cardio",
            "lower-body"
        ]
    },
    {
        "id": 33,
        "month":"February",
        "day":"2",
        "gif": "https://media3.giphy.com/media/5kJUmYs1cnzv5KahFc/giphy.gif?cid=ecf05e4766a373461c8bd97b7626489ed94638a5f189c93f&rid=giphy.gif",
        "name": "Pike Press",
        "description": "Place hands and feet on ground, walk hands up towards feet until hips are bent, lower head towards ground until head lightly touches ground, push back up",
        "modified": "Lessen the angle of your hips and don't lower head all the way to the ground",
        "focus": [
            "upper-body"
        ]
    },
    {
        "id": 34,
        "month":"February",
        "day":"3",
        "gif": "https://media1.giphy.com/media/I7XZyrjtE8wne/giphy.gif?cid=ecf05e47c1c139b73d5fad1064eb7d8696214fa89c096863&rid=giphy.gif",
        "name": "Side to Side Burpees",
        "description": "Lower body to ground all the way, as you perform a push-up, jump up to the left, repeat motion, jumping back to the right. Alternate back and forth",
        "modified": "Step to the side instead of jumping",
        "focus": [
            "cardio",
            "lower-body",
            "upper-body"
        ]
    },
    {
        "id": 35,
        "month":"February",
        "day":"4",
        "gif": "https://media1.giphy.com/media/wHASBzF5IpTdHApShT/giphy.gif?cid=ecf05e47a5h35w0rdsxq7pnkg4h4hfhc80row6xuwwu1mbvd&rid=giphy.gif",
        "name": "Leg Extension and Raise",
        "description": "Lying on your back, hands on the floor for support, first extend your legs out in front of you, off the ground, then pull them into your body, raise your legs straight up and lift your hips, slowly lower your legs straight over the ground",
        "modified": "Place your hands under your lower back for support",
        "focus": [
            "core"
        ]
    },
    {
        "id": 36,
        "month":"February",
        "day":"5",
        "gif": "https://media0.giphy.com/media/3PywN1RF3eLyVTgzTw/giphy.gif?cid=ecf05e473e991bb2a8984e1daf26aab25476d5dafa39ce25&rid=giphy.gif",
        "name": "Standard Plank",
        "description": "With hands on floor, create a straight line with your body from your head to your feet and hold position for duration of round",
        "modified": "Hold plank 5-10 seconds at a time, and rest 2-3 seconds between",
        "focus": [
            "core"
        ]
    },
    {
        "id": 37,
        "month":"February",
        "day":"6",
        "gif": "https://media3.giphy.com/media/5hqs5R78mB5thn3eSc/giphy.gif?cid=ecf05e47a64fb03684c0abc32f5df880f10d728dfe558dd8&rid=giphy.gif",
        "name": "Wall Squat",
        "description": "With back flat against wall, lower body until your knees are bent at a 45 degree angle and hold for duration of round",
        "modified": "Lessen the angle of your squat, stand up to take breaks",
        "focus": [
            "lower-body",
            "core"
        ]
    },
    {
        "id": 38,
        "month":"February",
        "day":"7",
        "gif": "https://media2.giphy.com/media/25a0Zl7launMhiD6LU/giphy.gif?cid=ecf05e476efbd5c3d49fd145fa888f616f1db4bd483369b1&rid=giphy.gif",
        "name": "Reverse Plank",
        "description": "From a seated position on ground, place hands flat on ground behind you, extend both legs out straight in front of you and keep your body straight, hold for duration of round",
        "modified": "Hold plank 5-10 seconds at a time, rest 2-3 seconds between",
        "focus": [
            "upper-body",
            "core"
        ]
    },
    {
        "id": 39,
        "month":"February",
        "day":"8",
        "gif": "https://media3.giphy.com/media/cXHxOJu8vEwhoApxjy/giphy.gif?cid=ecf05e47qvnv417ldq1kxzraxdiez2l1j6qypeuuvpazjtui&rid=giphy.gif",
        "name": "Step Back Lunges",
        "description": "With hands raised by head and feet together, step back with one leg and lowering the opposite leg into a lunge, stand back up and repeat on other side",
        "modified": "Hold onto a wall or study object to help balance as you lunge",
        "focus": [
            "lower-body"
        ]
    },
    {
        "id": 40,
        "month":"February",
        "day":"9",
        "gif": "https://i.gifer.com/B0lR.gif",
        "name": "Lateral Leaps",
        "description": "Jump to the side landing on one leg, bringing the opposite knee to your chest, then jump to the other leg. Try to cover some distance",
        "modified": "Don't jump as far, don't bring knee all the way to your chest",
        "focus": [
            "lower-body",
            "cardio"
        ]
    },
    {
        "id": 41,
        "month":"February",
        "day":"10",
        "gif": "https://media2.giphy.com/media/H3kyniitkDEZ0KhhAe/giphy.gif",
        "name": "Ultra Low Plank",
        "description": "With hands and feet on floor, lower yourself as close to the ground without your chest touching the ground and hold plank",
        "modified": "Take rest breaks as needed, lower body to rest on ground for 2-3 seconds",
        "focus": [
            "core",
            "upper-body"
        ]
    },
    {
        "id": 42,
        "month":"February",
        "day":"11",
        "gif": "https://media3.giphy.com/media/uGP4yfwMnf8Tm/giphy.gif?cid=ecf05e47cc9e4026dc1c0c103dc5c90233bf6158e7243121&rid=giphy.gif",
        "name": "Jackknife Sit-Ups",
        "description": "With arms and legs off the ground, bring hands up to head then bend at waist and reach to touch your toes, extend back with arms by your head",
        "modified": "Bend your knees to reduce motion",
        "focus": [
            "core"
        ]
    },
    {
        "id": 43,
        "month":"February",
        "day":"12",
        "gif": "https://media0.giphy.com/media/l41YqRErqxgRhXbUI/giphy.gif?cid=ecf05e478f42c4a95ce3ae26108921265ec1a9a44286025e&rid=giphy.gif",
        "name": "Bicycle Sit-Ups",
        "description": "Lying on your back, hands by head, touch your right elbow to your left knee, then your left elbow to your right knee",
        "modified": "Decrease range of motion and rate of movement",
        "focus": [
            "core"
        ]
    }
]

exports.module = exerciseData