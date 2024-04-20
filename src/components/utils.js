function filterByLocation(data, location) {
    return data.filter(item => item.location === location);
}

function calculateNumberOfNights(startDate, endDate) {
    const startUtcTimestamp = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const endUtcTimestamp = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    
    const differenceInMs = endUtcTimestamp - startUtcTimestamp;

    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

    const numberOfNights = Math.floor(differenceInDays);
    
    return numberOfNights;
}

export {filterByLocation, calculateNumberOfNights}