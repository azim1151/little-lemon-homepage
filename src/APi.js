

// const today = new Date().getDate();

// const month = new Date().getMonth();

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export function fetchAPI (date) {
    let result = [];
    let random = seededRandom(new Date(date).getDate());

    for(let i = 17; i < 23; i++) {
        if(random() < 0.5) {
            result.push({time:i + ':00', day: date, isAvailable:true});
        }
        else {
            result.push({time:i + ':00',day:date, isAvailable:false});
        }
    }
   
    return result;
    
};
export function submitAPI (formData) {
    return true;
};