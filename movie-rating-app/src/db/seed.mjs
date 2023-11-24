import database from "../firebaseSetup.mjs";
import { ref, set } from "firebase/database";

const main = () => {
    // Setting movie list data.
    const data = {
        movies: [
            {
                'id': 0,
                'title': 'Interstellar',
                'description': `Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film's protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy`,
                'rating_count': 20,
                'rating': 4.9
            },
            {
                'id': 1,
                'title': 'Frozen',
                'description': `When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.`,
                'rating_count': 23,
                'rating': 2.2
            },
            {
                'id': 2,
                'title': 'Toy Story',
                'description': `Taking place in a world where toys come to life when humans are not present, the plot of Toy Story focuses on the relationship between an old-fashioned pullstring cowboy doll named Woody and a modern space cadet action figure, Buzz Lightyear, as Woody develops jealousy towards Buzz when he becomes their owner Andy'`,
                'rating_count': 32,
                'rating': 3.5
            },
            {
                'id': 3,
                'title': 'Shrek',
                'description': `Shrek is a large, green-skinned, physically intimidating ogre with a Scottish accent. In Shrek Forever After, however, it is revealed that he is much smaller than the average ogre.`,
                'rating_count': 18,
                'rating': 4.8
            },
            {
                'id': 4,
                'title': 'Cars',
                'description': `On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.`,
                'rating_count': 5,
                'rating': 3.0
            },
        ],
    }


    set(ref(database, 'movies/'), data).then(() => {
        return
    }).catch((error) => {
        console.log(error);
    });

    return 1
}
main()