function func (a:number): void;
function func (a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number){
    if (typeof b === 'number' && typeof c ==='number'){
        console.log(a+b+c);
    }
    else{
        console.log(a);
    }
}

func(1)
