// Execution context mean how javascript will run or execute your js File.

/*
    Each time when js File will be executed , there will be three contex is created:-
        1.  "Global  execution context created " which is referred by "this" keyword.
        2. "Functional Context".
        3. "Eval Context"

    In case of Browser => Window is the global Exceution Context.
    In case of other environment (like nodejs, deno etc) => Global execution context will be diiferent.


    File is run in two phase :-
        1. Memory creation phase(memory is allocated to the variables and functions).
        2. Execution Phase

*/



// javascript is single threaded i.e.  it can only execute one task at a time. 
//This is in contrast to multi-threaded languages, such as C++ and Java, which can execute multiple tasks at the same time.