function distanceFromHqInBlocks(street){
    let hQ = 42
    return Math.abs(street - hQ)
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(street2){
    return (distanceFromHqInBlocks(street2) * 264)
}
distanceFromHqInBlocks(43);

function distanceTravelledInFeet(street3, street4){
    return Math.abs((street3 - street4) * 264)
}
distanceTravelledInFeet(43,42)

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    if(feet <= 400){
        return 0;
    } else if(feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02;
    } else if(feet > 2000 && feet <= 2500){
        return 25;
    } else return 'cannot travel that far';
}
