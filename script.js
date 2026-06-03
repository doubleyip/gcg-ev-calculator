function getSelectedTurn(){
    return document.querySelector('input[name="option"]:checked').value;
}

function getExpectedCopies(){
    return document.querySelector('input[name="expectedCopies"]').value;
}

function getTurnCount(){
    return document.querySelector('input[name="turnCount"]').value;
}

function getDrawOneCount(){
    return document.querySelector('input[name="drawOneCount"]').value;
}

function getDrawTwoCount(){
    return document.querySelector('input[name="drawTwoCount"]').value;
}

function calculateCardCount(turn, expectedCopies, turnCount, drawOneCount, drawTwoCount){
    const startingHand = 5;
    const addedCards = turn === 1 ? turnCount : turnCount -1;
    const adjustedHandSize = startingHand + addedCards;
    const drawOneModifier = drawOneCount !== 0? drawOneCount * adjustedHandSize / 50: 0;
    const drawTwoModifier = drawTwoCount !== 0? (2 * drawTwoCount * adjustedHandSize) / 50: 0;
    const copiesToPlay = expectedCopies * 50 / (adjustedHandSize + drawOneModifier + drawTwoModifier);

    return copiesToPlay.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    function updateInputs() {
        const turn = getSelectedTurn() === "first" ? 1 : 2;
        const expectedCopies = Number(getExpectedCopies());
        const turnCount = Number(getTurnCount());
        const drawOneCount = Number(getDrawOneCount());
        const drawTwoCount = Number(getDrawTwoCount());

        let copiesToPlay = document.getElementById("copiesToPlay")

        copiesToPlay.textContent = (expectedCopies && turnCount)? calculateCardCount(turn, expectedCopies, turnCount, drawOneCount, drawTwoCount): 0;
    }

    document.getElementById('turnSelectionRadio').addEventListener('change', updateInputs);
    document.getElementById('expectedCopies').addEventListener('change', updateInputs);
    document.getElementById('turnCount').addEventListener('change', updateInputs);
    document.getElementById('drawOneCount').addEventListener('change', updateInputs);
    document.getElementById('drawTwoCount').addEventListener('change', updateInputs);
    updateInputs();
});