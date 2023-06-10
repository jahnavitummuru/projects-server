import { faker } from "@faker-js/faker";
import { MongoClient, ObjectId } from "mongodb";

const uri =
  "mongodb+srv://jahnavi:0VyaJ14XmXIiYbN2@cluster0.28ve347.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function generateAndInsertFakeData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("jahnavi");
    const collection = db.collection("projects");

    const records = [];
    const numRecords = 15;

    for (let i = 0; i < numRecords; i++) {
      const dish = {
        _id: new ObjectId(),
        name: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        owner: faker.person.fullName(),
        stars: faker.number.int({ max: 1000 }),
        forks: faker.number.int({ max: 1000 }),
        languages: faker.helpers.arrayElements(
          [
            "JavaScript",
            "Python",
            "Java",
            "C#",
            "PHP",
            "C++",
            "TypeScript",
            "C",
            "Shell",
            "Ruby",
            "Objective-C",
            "Swift",
            "Kotlin",
            "Rust",
            "Scala",
            "Go",
            "PowerShell",
            "Perl",
            "Haskell",
            "Lua",
            "Clojure",
            "Groovy",
            "R",
            "Matlab",
            "Visual Basic",
            "Assembly",
            "CoffeeScript",
            "Dart",
            "Elixir",
            "Erlang",
            "Fortran",
            "Julia",
            "OCaml",
            "Pascal",
            "Racket",
            "Scheme",
            "Vim script",
          ],
          { min: 2, max: 5 }
        ),
        tags: [faker.lorem.word(), faker.lorem.word()],
        contributors: [faker.person.fullName(), faker.person.firstName()],
        created_at: faker.date.past(),
      };

      records.push(dish);
    }
    await collection.insertMany(records);
    console.log(`Inserted ${numRecords} records into the collection`);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB");
  }
}

generateAndInsertFakeData();
