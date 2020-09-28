//async await implementation with promises + generators

function runner(gnFn){

    const itr = gnFn();
    function run(arg){
        const result = itr.next(arg);

        if(result.done){
            return result.value;
        }
        else{
            return Promise.resolve(result.value).then(run);
        }
    }

    return run();
}

// async await... with generators 
function* init(){
    const res1 = yield doTask1();
    console.log('res1', res1);

    const res2 = yield doTask2(res1);
    console.log('res2', res2);

    const res3 = yield doTask3(res2);
    console.log('res3', res3);

    return res3;
}


function doTask1(){
    console.log(1);
    return 1;
}

function doTask2(r){
    console.log(r);
    return 2;
}
function doTask3(r){
    console.log(r);
    return 3;
}


runner(init);