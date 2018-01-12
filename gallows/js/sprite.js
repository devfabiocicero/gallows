
const createSprite = seletor => {

    const moveFrame = (from, to) =>

        sprite.removeClass(from)
            .addClass(to);

    const hasNext = () => 

        current + 1 <= last;

    const nextFrame = () => {

        if(hasNext()) moveFrame(frames[current], frames[++current]);
    };

    const reset = () => {

        moveFrame(frames[current], frames[0]);
        current = 0;
    };

    const isFinished = () =>

        !hasNext();

    let current = 0;
    
    const frames = [
        "frame1", "frame2", "frame3", "frame4", "frame5",
        "frame6", "frame7", "frame8", "frame9"
    ];

    const last = frames.length - 1;

    const sprite = $(seletor);

    sprite.addClass(frames[current]);

    return { //return javascript object with properties nextFrame, reset and isFinished
        nextFrame,
        reset,
        isFinished
    };
};

