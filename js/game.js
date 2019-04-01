// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You're walking down the street in the blistering cold and a little girl curled up on the ground",
            choices: [
                {
                    text: "go up to the little girl",
                    nextLevel: "level2",
                },

                {
                    text: "walk away",
                    nextLevel: "level_two",
                },
            ]
        },

        level2: {
            background_image: "",
            music: "",
            message: "ask the little girl if she's okay",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        level_two: {
            message: "as you walk you hear someone behind you and their footsteps get louder and louder",
            choices: [
                {
                    text: "Turn around",
                    nextLevel: "level3",
                },
                {    text: "run!",
                    nextLevel: "level_three"
                },    
            ]
        },
        level3: {
        background_image: "",
            music: "",
            message: "ask the little girl if she's okay",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        level_sthree: {
        background_image: "",
            music: "",
            message: "ask the little girl if she's okay",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
