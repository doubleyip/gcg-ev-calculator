function getSelectedTurn(){
    return document.querySelector('input[name="option"]:checked').value;
};

function getExpectedCopies(){
    return document.querySelector('input[name="expectedCopies"]').value;
};

function getTurnCount(){
    return document.querySelector('input[name="turnCount"]').value;
}
function calculateCardCount(turn, expectedCopies, turnCount){
    const startingHand = 5;
    const addedCards = turn === 1 ? turnCount : turnCount -1;
    const adjustedHandSize = startingHand + addedCards;
    const copiesToPlay = expectedCopies * 50 / adjustedHandSize;


    console.log(copiesToPlay);
    return copiesToPlay;
}

document.addEventListener('DOMContentLoaded', () => {
    function updateInputs() {
        const turn = getSelectedTurn() === "first" ? 1 : 2;
        const expectedCopies = Number(getExpectedCopies());
        const turnCount = Number(getTurnCount());

        let copiesToPlay = document.getElementById("copiesToPlay")

        console.log({ turn, expectedCopies, turnCount });
        copiesToPlay.textContent = (expectedCopies && turnCount)? calculateCardCount(turn, expectedCopies, turnCount): 0;
    }

    document.getElementById('turnSelectionRadio').addEventListener('change', updateInputs);
    document.getElementById('expectedCopies').addEventListener('change', updateInputs);
    document.getElementById('turnCount').addEventListener('change', updateInputs);
    updateInputs();
});