
const createSprite = seletor => {

    let current = 0;
    const last = frames.length - 1;

    const $sprite = $(seletor);

    const frames = [
        "frame1", "frame2", "frame3", "frame4", "frame5",
        "frame6", "frame7", "frame8", "frame9"
    ];

    $sprite.addClass(frames[current]);

    const moveFrame = (from, to) =>
        $sprite.removeClass(from)
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

    return { //return javascript object with property nextFrame and value nextFrame method
        nextFrame,
        reset,
        isFinished
    };
};

