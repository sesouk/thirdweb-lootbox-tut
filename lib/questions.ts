export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What kind of sushi is pressed and shaped in squares?",
    image:
      "https://heyexplorer.com/wp-content/uploads/2021/08/Oshizushi.jpeg",
    answers: [
      "Nigirizushi",
      "Oshizushi",
      "Makizushi",
      "Inarizushi",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "How many years does it take to become a sushi chef?",
    image: "https://heyexplorer.com/wp-content/uploads/2021/08/sushi-chef.jpeg",
    answers: ["3", "15", "6", "10"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Which US City first popularized nigiri in 1966?",
    image:
      "https://heyexplorer.com/wp-content/uploads/2021/08/sushi-variety.jpeg",
    answers: ["Los Angeles", "New York City", "San Franscisco", "Denver"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "When is International Sushi Day?",
    image: "https://heyexplorer.com/wp-content/uploads/2021/08/sushi-platter-1.jpeg",
    answers: ["February 5th", "April 23rd", "June 18th", "August 28th"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What is the most expensive cut of maguro (tuna) sushi?",
    image: "https://s3-media4.ak.yelpcdn.com/bphoto/F4bm9H7g-KKv7MG798EB-w/l.jpg",
    answers: ["Akami", "Chutoro", "Otoro", "Fin"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
