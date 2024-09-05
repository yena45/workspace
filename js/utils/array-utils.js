export const range = (start,end,step = start > end ? -1 : 1) =>{
    if (step === 0 || start === end) return [start];
    if ((start>end && step > 0) || start < end && step <0) return [];

    let tmp =start;
    end = end ?? (start > 0 ? (start =1, tmp): (start <0 ? -1:0));


    const result=[];

    for (let i =start; start >end ? i >=end : i <=end; i+=step){
        result.push(i);
    }

    return result;

}