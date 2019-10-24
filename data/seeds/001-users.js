exports.seed = function(knex, Promise) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          name: "Mario",
          username: "mario1",
          password: "pass",
          email: "test1@gmail.com"
        },
        {
          name: "Luigi",
          username: "luigi1",
          password: "pass",
          email: "test2@gmail.com"
        },
        {
          name: "Bowser",
          username: "badguy",
          password: "pass",
          email: "test3@gmail.com"
        },
        {
          name: "Peach",
          username: "princess",
          password: "pass",
          email: "test4@gmail.com"
        },
        {
          name: "Joe",
          username: "traveler",
          password: "pass",
          email: "test5@gmail.com"
        },
        {
          name: "Matt",
          username: "traveler",
          password: "pass",
          email: "test6@gmail.com"
        },
        {
          name: "David",
          username: "traveler",
          password: "pass",
          email: "test7@gmail.com"
        },
        {
          name: "Jon",
          username: "traveler",
          password: "pass",
          email: "test8@gmail.com"
        },
        {
          name: "Ryan",
          username: "traveler",
          password: "pass",
          email: "test9@gmail.com"
        },
        {
          name: "Jen",
          username: "traveler",
          password: "pass",
          email: "test10@gmail.com"
        },
        {
          name: "Jack",
          username: "traveler",
          password: "pass",
          email: "test11@gmail.com"
        },
        {
          name: "Jill",
          username: "traveler",
          password: "pass",
          email: "tes12t@gmail.com"
        },
        {
          name: "Mike",
          username: "traveler",
          password: "pass",
          email: "test13@gmail.com"
        },
        {
          name: "Katie",
          username: "traveler",
          password: "pass",
          email: "test14@gmail.com"
        },
        {
          name: "Bill",
          username: "traveler",
          password: "pass",
          email: "test15@gmail.com"
        }
      ]);
    });
};
