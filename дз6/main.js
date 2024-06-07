    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];
    


    const SortByAges = users.sort((age1, age2) => age1.age - age2.age);
    


    console.log(SortByAges);
    